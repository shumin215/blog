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
| Code Quality | ESLint + Prettier |

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
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ImageCaption.astro  # 캡션 이미지
│   │   └── PostCard.astro      # 포스트 목록 카드
│   ├── content/
│   │   └── posts/              # MDX 포스트 파일
│   ├── layouts/
│   │   └── BaseLayout.astro    # 공통 레이아웃 (SEO, OG 태그 포함)
│   ├── pages/
│   │   ├── index.astro         # 홈 (포스트 목록)
│   │   ├── about.astro         # About 페이지
│   │   ├── rss.xml.ts          # RSS 피드
│   │   ├── posts/
│   │   │   └── [slug].astro    # 포스트 상세 (TOC, 읽기시간, 이전/다음)
│   │   └── tags/
│   │       ├── index.astro     # 전체 태그 목록
│   │       └── [tag].astro     # 태그별 포스트 목록
│   ├── styles/
│   │   └── global.css
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

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트
npm run lint

# 코드 포맷
npm run format
```

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

**MDX 커스텀 컴포넌트:**
```mdx
<Callout type="info">정보 메시지</Callout>
<Callout type="tip">팁 메시지</Callout>
<Callout type="warn">경고 메시지</Callout>
<Callout type="danger">위험 메시지</Callout>

<ImageCaption src="/images/example.png" alt="설명" caption="이미지 캡션" />
```

---

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

### 기능
- [ ] 다크모드 토글
- [ ] 포스트 검색 기능
- [ ] 댓글 기능 (Giscus — GitHub Discussions 기반)
- [ ] 포스트 조회수 표시
- [ ] 코드 블록 복사 버튼
- [ ] 이미지 최적화 (Cloudinary 연동)

### SEO / 성능
- [ ] 커스텀 도메인 연결 및 `astro.config.mjs` `site` 값 업데이트
- [ ] OG 이미지 자동 생성
- [ ] Lighthouse 점검 (목표: Performance 90+, SEO 100)

### 콘텐츠
- [ ] About 페이지 상세 작성
- [ ] 첫 기술 포스트 작성

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
