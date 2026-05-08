# Shumin's World

개발 경험과 배움을 기록하는 개인 기술 블로그입니다.

**블로그 주소:** [blog.km-hero-lee.workers.dev](https://blog.km-hero-lee.workers.dev)

---

## 기술 스택

| 역할 | 기술 |
|------|------|
| Framework | [Astro](https://astro.build) v6 |
| Content | MDX (Markdown + JSX) |
| Styling | Tailwind CSS v4 + @tailwindcss/typography |
| Deployment | Cloudflare Workers (Static Assets) |
| CI/CD | GitHub Actions |
| Search | [Pagefind](https://pagefind.app) (빌드 타임 인덱싱) |
| Comments | [Giscus](https://giscus.app) (GitHub Discussions 기반) |
| Code Quality | ESLint + Prettier |

---

## 구현된 기능

| 기능 | 설명 |
|------|------|
| 다크모드 토글 | 헤더 버튼으로 전환, 시스템 설정 자동 감지, localStorage 유지 |
| 전문 검색 | 헤더 🔍 아이콘 또는 `Cmd+K` / `Ctrl+K` 로 모달 검색 |
| 댓글 | 포스트 하단 Giscus 댓글창 (GitHub 계정으로 로그인) |
| 코드 복사 | 코드 블록 호버 시 Copy 버튼 표시 |
| 목차 (TOC) | 데스크탑에서 포스트 우측 사이드바에 고정 표시 |
| 태그 분류 | 네비게이션 카테고리별 태그 페이지 |
| RSS 피드 | `/rss.xml` |
| 사이트맵 | 자동 생성 (`sitemap-index.xml`) |
| SEO | OG 태그, Twitter Card, canonical URL |
| 읽기 시간 | 포스트 헤더에 예상 읽기 시간 표시 |
| 이전/다음 포스트 | 포스트 하단 네비게이션 |

---

## 프로젝트 구조

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: 자동 빌드 & Cloudflare 배포
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Callout.astro       # MDX 강조 박스 (info / tip / warn / danger)
│   │   ├── Comments.astro      # Giscus 댓글 컴포넌트
│   │   ├── Footer.astro
│   │   ├── Header.astro        # 네비게이션, 검색 모달, 다크모드 토글
│   │   ├── ImageCaption.astro  # 캡션 이미지
│   │   └── PostCard.astro      # 포스트 목록 카드
│   ├── content/
│   │   └── posts/              # MDX 포스트 파일
│   ├── layouts/
│   │   └── BaseLayout.astro    # 공통 레이아웃 (SEO, OG 태그, 다크모드 초기화)
│   ├── pages/
│   │   ├── index.astro         # 홈 (포스트 목록)
│   │   ├── about.astro         # About 페이지
│   │   ├── search.astro        # 검색 페이지 (Pagefind UI)
│   │   ├── rss.xml.ts          # RSS 피드
│   │   ├── posts/
│   │   │   └── [slug].astro    # 포스트 상세 (TOC 사이드바, 읽기시간, 댓글)
│   │   └── tags/
│   │       ├── index.astro     # 전체 태그 목록
│   │       └── [tag].astro     # 태그별 포스트 목록
│   ├── styles/
│   │   └── global.css          # Tailwind 설정, 다크모드 variant, Shiki 테마
│   ├── utils/
│   │   ├── readingTime.ts      # 예상 읽기시간 계산
│   │   └── url.ts              # base URL 헬퍼
│   └── content.config.ts       # 콘텐츠 스키마 정의 (Astro v6)
├── astro.config.mjs
├── wrangler.toml               # Cloudflare Workers 설정
├── tsconfig.json
├── eslint.config.mjs
├── prettier.config.mjs
└── package.json
```

---

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 프로덕션 빌드 (Astro 빌드 + Pagefind 인덱싱)
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트
npm run lint

# 코드 포맷
npm run format
```

> **참고:** `npm run build`는 Astro 빌드 후 Pagefind 인덱싱(`pagefind --site dist`)을 자동으로 실행합니다. 로컬에서 검색 기능을 테스트하려면 `npm run preview`로 확인하세요.

---

## 포스트 작성 방법

`src/content/posts/` 폴더에 `.mdx` 파일을 추가합니다.

**파일명이 URL 경로가 됩니다:**
```
my-post.mdx → /posts/my-post/
```

**frontmatter 형식:**
```yaml
---
title: "포스트 제목"
date: 2026-03-15
description: "짧은 설명 (SEO meta description 겸용)"
tags: ["tag1", "tag2"]
draft: false          # true면 빌드에서 제외
cover: "/images/posts/cover.png"  # 선택 (OG 이미지로 사용)
---
```

**태그 카테고리 (네비게이션 메뉴와 연결):**

| 메뉴 | 태그 |
|------|------|
| Research | `research` |
| Programming | `programming` |
| Series | `series` |
| English | `english` |
| Personal | `personal` |

**MDX 커스텀 컴포넌트:**
```mdx
<Callout type="info">정보 메시지</Callout>
<Callout type="tip">팁 메시지</Callout>
<Callout type="warn">경고 메시지</Callout>
<Callout type="danger">위험 메시지</Callout>

<ImageCaption src="/images/example.png" alt="설명" caption="이미지 캡션" />
```

---

## WordPress 콘텐츠 이전/리뷰

기존 NAS WordPress 글은 바로 전체 이전하지 않고, 먼저 공개 여부를 리뷰한 뒤 선별 이전합니다.

- 리뷰 기준과 현재 Astro 구조 매핑: [`docs/wordpress-content-review.md`](docs/wordpress-content-review.md)
- Migration status dashboard: [`docs/wordpress-migration-status.md`](docs/wordpress-migration-status.md)
- NAS SSH 접속 참고: [`docs/nas-ssh-setup.md`](docs/nas-ssh-setup.md)
- 실제 단일 글 이전은 `.codex/skills/wordpress-migration/SKILL.md`의 워크플로를 따릅니다.

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 Cloudflare에 배포합니다.

```bash
git add .
git commit -m "docs: 새 포스트 추가"
git push
```

### 필요한 GitHub Secrets

| Secret | 설명 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API 토큰 (Edit Cloudflare Workers 권한) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 계정 ID |

---

## TODO

### 콘텐츠
- [ ] About 페이지 상세 작성
- [ ] 카테고리별 첫 포스트 작성 (Research, Programming, Series, English, Personal)

### SEO / 성능
- [ ] 커스텀 도메인 연결 및 `astro.config.mjs` `site` 값 업데이트
- [ ] `public/robots.txt` Sitemap URL을 실제 도메인으로 변경
- [ ] OG 이미지 자동 생성
- [ ] Lighthouse 점검 (목표: Performance 90+, SEO 100)

### 기능
- [ ] 방문자 수 / 포스트 조회수 표시 (Supabase 또는 Cloudflare Workers KV)
- [ ] Cloudflare Web Analytics 연동 (`BaseLayout.astro` 주석 처리된 스크립트 활성화)
- [ ] 이미지 외부 호스팅 연동 (Cloudinary 등, 저장소 용량 절감)

---

## License

MIT License

Copyright (c) 2026 Kyungmin Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
