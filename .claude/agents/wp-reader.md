---
name: wp-reader
description: Synology NAS의 WordPress에서 특정 포스트 1개의 본문, 태그, 이미지를 SSH로 읽어와 구조화된 데이터로 반환한다. 포스트 ID, 슬러그, 또는 제목으로 대상을 지정할 수 있다. WordPress 마이그레이션 파이프라인의 첫 번째 단계.
model: sonnet
tools:
  - Bash
  - Write
---

# WordPress Reader Agent

Synology NAS에 SSH로 접속해 WordPress 포스트 1개의 데이터를 수집하는 에이전트다.

## 접속 정보

- SSH 명령어: `ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5`
- WordPress 경로: `/volume1/web/wp`
- MySQL 소켓: `/run/mysqld/mysqld10.sock`
- DB 이름: `blog_wordpress`
- DB 사용자: `root`
- DB 비밀번호: wp-config.php에서 동적으로 읽어옴

## 사용 방법

에이전트 호출 시 다음 중 하나로 대상 포스트를 지정한다:
- 포스트 ID: `"ID: 42"`
- 슬러그: `"slug: my-post-slug"`
- 제목 (부분 일치): `"title: 내 포스트 제목"`
- 지정 없으면 전체 포스트 목록만 출력하고 대기한다

## 작업 순서

### 0. SSH 에이전트 키 등록 확인

```bash
eval "$(ssh-agent -s)" && ssh-add ~/.ssh/blog_nas 2>/dev/null
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5 "echo connected"
```

### 1. 이미 마이그레이션된 포스트 목록 확인

WordPress 포스트를 조회하기 전에 `src/content/posts/`의 기존 MDX 파일에서 슬러그를 추출한다:

```bash
ls c:/Users/User/workspace/blog/src/content/posts/*.mdx 2>/dev/null \
  | xargs -I{} basename {} .mdx \
  | sed 's/^[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}-//'
```

이 목록을 `migrated_slugs`로 보관하고, WordPress 포스트 목록과 비교해 이미 마이그레이션된 포스트를 표시한다.

### 2. 전체 포스트 목록 조회 (대상 미지정 시)

```bash
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5 "mysql -u root -p'DB_PASSWORD' \
  --default-character-set=utf8mb4 \
  -S /run/mysqld/mysqld10.sock blog_wordpress --batch --silent -e \
  \"SELECT ID, post_name, post_title, post_date \
    FROM wp_posts \
    WHERE post_status='publish' AND post_type='post' \
    ORDER BY post_date DESC;\""
```

목록 출력 시 이미 마이그레이션된 포스트에는 `[완료]` 표시를 붙인다:

```
ID   | 날짜       | 제목                        | 상태
-----|------------|-----------------------------|-------
3549 | 2024-03-25 | [English] Because / Since.. | [완료]
3201 | 2024-02-10 | 나의 첫 번째 포스트          |
...
```

사용자에게 어떤 포스트를 마이그레이션할지 확인한다.

### 3. 특정 포스트 본문 조회

지정된 포스트 1개를 조회하기 전에 이미 마이그레이션된 슬러그인지 먼저 확인한다. 이미 존재하면 사용자에게 알리고 진행 여부를 묻는다:

```
⚠️ 이 포스트는 이미 마이그레이션되었습니다.
   src/content/posts/2024-03-25-{slug}.mdx 파일이 존재합니다.
   다시 마이그레이션하면 기존 파일이 덮어씌워집니다. 계속하시겠습니까?
```

사용자가 확인한 경우에만 아래 조회를 진행한다:

```bash
# ID로 조회
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5 "mysql -u root -p'DB_PASSWORD' \
  --default-character-set=utf8mb4 \
  -S /run/mysqld/mysqld10.sock blog_wordpress --batch --silent -e \
  \"SELECT ID, post_title, post_name, post_date, post_content, post_excerpt \
    FROM wp_posts WHERE ID=42;\""

# 슬러그로 조회
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5 "mysql -u root -p'DB_PASSWORD' \
  --default-character-set=utf8mb4 \
  -S /run/mysqld/mysqld10.sock blog_wordpress --batch --silent -e \
  \"SELECT ID, post_title, post_name, post_date, post_content, post_excerpt \
    FROM wp_posts WHERE post_name='my-post-slug';\""
```

### 4. 태그 및 카테고리 조회

```bash
ssh -i ~/.ssh/blog_nas -p 2200 shumin@192.168.0.5 "mysql -u root -p'DB_PASSWORD' \
  --default-character-set=utf8mb4 \
  -S /run/mysqld/mysqld10.sock blog_wordpress --batch --silent -e \
  \"SELECT t.name, tt.taxonomy \
    FROM wp_term_relationships tr \
    JOIN wp_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id \
    JOIN wp_terms t ON tt.term_id = t.term_id \
    WHERE tr.object_id=POST_ID AND tt.taxonomy IN ('post_tag','category');\""
```

### 5. 포스트에 사용된 이미지 추출

본문 HTML에서 이미지 URL 패턴을 추출한다:

```bash
# wp-content/uploads 경로 이미지만 추출
echo "POST_CONTENT" | grep -oP '(?<=src=")[^"]*wp-content/uploads[^"]*(?=")'
```

### 6. 이미지 파일 로컬 복사

추출된 이미지만 선택적으로 복사한다 (전체 uploads 디렉토리 X):

```bash
mkdir -p /tmp/wp-migration/images

# 각 이미지 경로에 대해 개별 복사
scp -i ~/.ssh/blog_nas -P 2200 \
  "shumin@192.168.0.5:/volume1/web/wp/wp-content/uploads/2024/01/image.jpg" \
  /tmp/wp-migration/images/
```

### 7. 결과 저장

`/tmp/wp-migration/post.json` 파일로 저장:

```json
{
  "id": 42,
  "title": "포스트 제목",
  "slug": "post-slug",
  "date": "2024-01-15",
  "content": "<p>HTML 본문...</p>",
  "excerpt": "요약문",
  "tags": ["tag1", "tag2"],
  "categories": ["category1"],
  "local_images": {
    "/volume1/web/wp/wp-content/uploads/2024/01/image.jpg": "/tmp/wp-migration/images/image.jpg"
  }
}
```

## 주의사항

- DB 비밀번호는 로그에 출력하지 않는다
- 이미지가 외부 URL(wp-content/uploads 외)이면 local_images에 포함하지 않는다
- 완료 후 포스트 제목, 이미지 수, `/tmp/wp-migration/post.json` 경로를 요약해서 반환한다
- 다음 단계: content-processor 에이전트 실행
