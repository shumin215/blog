# WordPress 콘텐츠 리뷰 및 이전 계획

이 문서는 NAS 위 기존 WordPress 글을 Astro 블로그로 옮기기 전에, 어떤 글을 공개 이전할지 검토하기 위한 기준과 현재 저장소 구조를 정리한다. 실제 단일 글 이전 절차는 `.codex/skills/wordpress-migration/SKILL.md`의 3단계 워크플로를 따른다.

## 목표

- WordPress에 누적된 많은 글을 한 번에 이전하지 않고, 공개할 가치가 있는 글만 선별한다.
- 선별 과정에서 필요한 메타데이터, 판단 기준, 이전 후 배치 위치를 일관되게 기록한다.
- 최종 이전 대상은 Astro content collection 스키마에 맞는 MDX로 변환한다.

## 현재 블로그 구조 요약

| 영역 | 경로 | 역할 | WordPress 이전 시 확인할 점 |
|------|------|------|-----------------------------|
| 포스트 원본 | `src/content/posts/` | `.md`/`.mdx` 파일이 포스트 slug와 본문이 됨 | WordPress slug와 같은 파일이 이미 있는지 먼저 확인 |
| 콘텐츠 스키마 | `src/content.config.ts` | frontmatter 검증 | `title`, `date`, `description`, `tags` 필수, `category`, `draft`, `cover` 선택 |
| 홈 | `src/pages/index.astro` | `draft: false` 포스트 전체를 최신순으로 노출 | 공개 이전 글은 홈에 자동 노출 |
| 포스트 상세 | `src/pages/posts/[slug].astro` | 본문, 태그, 읽기 시간, 목차, 이전/다음 글, 댓글 표시 | H2/H3가 목차가 되므로 제목 계층 정리 필요 |
| 태그 목록 | `src/pages/tags/` | 태그별 포스트 목록 생성 | WordPress category/tag를 Astro `tags`로 어떻게 매핑할지 결정 필요 |
| 개인 글 목록 | `src/pages/personal.astro` | `personal` 태그가 있는 글만 노출 | 사적인 글은 공개 여부와 `personal` 태그 여부를 별도 판단 |
| 검색 | `src/pages/search.astro`, `src/components/Header.astro` | Pagefind 검색 UI | 공개 글은 빌드 후 검색 인덱스에 포함 |
| 정적 이미지 | `public/` | 브라우저에서 직접 접근하는 이미지 자산 | 이전 이미지는 `/images/...` 하위 경로로 복사 권장 |
| NAS 접속 문서 | `docs/nas-ssh-setup.md` | WordPress가 있는 Synology NAS SSH 접속 참고 | 비밀값은 문서/로그에 남기지 않음 |

## 현재 콘텐츠 모델

### 필수 frontmatter

```yaml
---
title: "Post title"
date: 2026-03-15
description: "Short SEO-friendly description"
tags: ["tag1", "tag2"]
---
```

### 선택 frontmatter

```yaml
category: "Programming"
draft: false
cover: "/images/posts/example/cover.png"
```

`category`에 허용되는 값은 현재 다음 6개뿐이다.

- `AI`
- `Computer Architecture`
- `Programming`
- `Digital Logic`
- `NAS`
- `Series`

주의: 현재 화면의 주요 분류와 라우팅은 `category`보다 `tags`에 더 의존한다. 특히 `personal.astro`는 `personal` 태그만 필터링한다. 따라서 WordPress의 category를 그대로 `category`에 넣을지, 공개 탐색용 `tags`로 변환할지는 리뷰 단계에서 결정해야 한다.

## 카테고리 한눈에 보기

현재 저장소에는 두 종류의 분류 개념이 함께 있다.

1. `category`: frontmatter의 선택 필드이며, 현재 스키마에서 허용되는 큰 주제 분류
2. `tags`: 실제 목록/태그 페이지/Personal 페이지 노출에 쓰이는 탐색용 분류

### Astro category 후보

| Astro category | 권장 용도 | WordPress에서 가져올 만한 글 | 공개 리뷰 포인트 | 대표 tags 예시 |
|----------------|-----------|-------------------------------|------------------|----------------|
| `AI` | AI, LLM, 머신러닝, 자동화 실험 | 모델 사용기, 프롬프트, AI 도구, 자동화 글 | 도구/모델 정보가 너무 오래되지 않았는지 확인 | `ai`, `llm`, `prompt-engineering`, `automation` |
| `Computer Architecture` | 컴퓨터 구조, CPU, 메모리, 저수준 시스템 | CPU 구조, 캐시, 파이프라인, 임베디드/저수준 정리 | 그림/수식/코드가 깨지지 않는지 확인 | `computer-architecture`, `cpu`, `memory`, `system` |
| `Programming` | 일반 프로그래밍, 언어, 프레임워크, 개발 경험 | Python/C/C++/JavaScript, 문제 해결, 개발 환경 글 | 현재도 재현 가능한지, 버전 정보 보강 필요 여부 확인 | `programming`, `python`, `cpp`, `javascript`, `debugging` |
| `Digital Logic` | 디지털 논리, HDL, FPGA, 회로 설계 | Verilog/VHDL, 논리회로, FPGA 실습 글 | 회로도/파형 이미지 보존 여부 확인 | `digital-logic`, `verilog`, `fpga`, `hdl` |
| `NAS` | Synology NAS, 홈서버, 인프라 운영 | NAS 설정, Docker, 네트워크, 백업, WordPress 운영 글 | 내부 IP, 계정, 경로, 보안 정보 제거 필수 | `nas`, `synology`, `docker`, `network`, `homelab` |
| `Series` | 여러 편으로 이어지는 연재 글 | 튜토리얼 시리즈, 학습 노트 묶음 | 순서/이전·다음 글 연결이 필요한지 확인 | `series`, `tutorial`, `notes` |

### 현재 라우팅에 특별한 의미가 있는 tag

| tag | 의미 | 연결된 화면/동작 |
|-----|------|------------------|
| `personal` | 개인적인 글, 일상, 생각 | `src/pages/personal.astro`에서 이 태그가 있는 글만 노출 |
| 모든 tag | 포스트 탐색용 분류 | `/tags/`, `/tags/{tag}` 페이지가 자동 생성 |

### 현재 저장소에 있는 포스트 tag

| tag | 공개 글 수 | 비고 |
|-----|-----------:|------|
| `astro` | 1 | 샘플 공개 글 |
| `blog` | 2 | 샘플 공개 글 |
| `intro` | 1 | 샘플 공개 글 |
| `mdx` | 1 | 샘플 공개 글 |
| `tutorial` | 1 | 샘플 공개 글 |
| `devops` | 0 | 현재 초안 글에만 있음 |
| `docker` | 0 | 현재 초안 글에만 있음 |
| `github-actions` | 0 | 현재 초안 글에만 있음 |

> 공개 글 수는 `draft: false` 기준이다. `draft: true` 글은 빌드/목록에서 제외된다.

### WordPress 카테고리 매핑표

WordPress의 실제 카테고리 목록을 확인하면 아래 표를 채워서 이전 기준으로 사용한다.

| WordPress category | Astro category | 기본 tags | 기본 판정 | 메모 |
|--------------------|----------------|-----------|-----------|------|
| TBD | TBD | TBD | TBD | WordPress 카테고리 목록 확인 후 작성 |

## WordPress 글 리뷰 기준

각 WordPress 글은 아래 네 가지 중 하나로 판정한다.

| 판정 | 의미 | 후속 작업 |
|------|------|-----------|
| `publish` | 현재 블로그에 공개 이전할 글 | MDX 변환 후 `draft: false` |
| `revise` | 소재는 좋지만 수정 후 공개할 글 | 임시로 `draft: true` 또는 이전 보류 |
| `archive` | 보관 가치는 있지만 공개하지 않을 글 | NAS/백업에만 유지, 저장소에는 넣지 않음 |
| `skip` | 중복, 테스트, 품질 낮음, 공개 부적합 | 이전하지 않음 |

판단할 때는 다음 항목을 본다.

- 현재도 읽을 가치가 있는가?
- 개인 정보, 내부 정보, 오래된 계정/서버 정보가 포함되어 있지 않은가?
- 이미지, 코드, 링크가 복구 가능한가?
- 기존 블로그의 기술 주제와 맞는가?
- 같은 주제의 더 좋은 글과 중복되지 않는가?
- 공개하려면 어느 정도의 리라이팅이 필요한가?

## 리뷰 기록 템플릿

WordPress 목록을 검토할 때 아래 형식으로 정리하면 이후 이전 작업으로 바로 이어질 수 있다.

```md
| WP ID | WordPress slug/title | WP category/tags | 날짜 | 판정 | Astro slug | Astro category | Astro tags | 메모 |
|------:|----------------------|------------------|------|------|------------|----------------|------------|------|
| 123 | example-post | Programming / C++ | 2021-05-01 | publish | example-post | Programming | ["programming", "cpp"] | 코드 블록 확인 필요 |
```

권장 규칙:

- `Astro slug`는 가능하면 WordPress slug를 유지하되, 한글/공백/특수문자가 많으면 kebab-case 영문으로 정리한다.
- 공개 여부가 애매하면 `revise`로 두고 바로 `publish`하지 않는다.
- 보안 정보가 의심되는 글은 `archive` 또는 `skip`으로 두고 별도 확인 전까지 이전하지 않는다.
- 이미지가 많은 글은 이미지 수와 누락 가능성을 메모한다.

## WordPress → Astro 매핑 원칙

| WordPress | Astro | 비고 |
|-----------|-------|------|
| post title | `title` | 원문 제목을 기본으로 하되 SEO에 맞게 다듬을 수 있음 |
| post date | `date` | 원 발행일 유지 권장 |
| excerpt 또는 첫 단락 요약 | `description` | 검색/OG 설명에 쓰이므로 1문장으로 작성 |
| category | `category` 또는 `tags` | 현재 허용 category enum에 맞지 않으면 tags로 우선 보존 |
| tags | `tags` | 소문자 kebab-case 권장 |
| featured image | `cover` | `/images/posts/{slug}/...` 권장 |
| body HTML | MDX body | H2/H3 계층, 코드 블록 언어, 이미지 캡션 확인 |
| unpublished/private | `draft: true` 또는 이전 제외 | 공개 검토 전에는 `draft: true` 사용 가능 |

## 실제 이전 전 체크리스트

1. 대상 글의 WordPress ID, slug, 또는 title을 확정한다.
2. `src/content/posts/{slug}.mdx` 또는 `.md`가 이미 있는지 확인한다.
3. 공개 판정이 `publish` 또는 `revise`인지 확인한다.
4. WordPress HTML과 메타데이터를 `/tmp/wp-migration/post.json`으로 추출한다.
5. 참조된 이미지만 복사하고, 전체 uploads 디렉터리는 복사하지 않는다.
6. MDX frontmatter가 `src/content.config.ts` 스키마를 통과하는지 확인한다.
7. `npm run build`로 Astro 빌드와 Pagefind 인덱싱을 검증한다.
8. PR을 만들 경우 브랜치, 커밋 대상 파일, PR 제목을 확인한다.

## 다음에 결정할 내용

사용자가 WordPress 글 목록이나 카테고리 정보를 제공하면 아래를 먼저 정한다.

- WordPress 카테고리를 현재 Astro `category` 6개에 어떻게 매핑할지
- `personal`, `series`, `nas`처럼 라우팅/탐색에 중요한 태그 이름 규칙
- 공개 제외 기준: 사적인 일상, 오래된 장애 기록, 내부 IP/계정 정보 포함 글 등
- 리뷰 결과를 저장할 위치: 별도 문서, CSV, 이슈, PR 본문 중 하나
