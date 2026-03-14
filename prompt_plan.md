# Shumin's World - 구현 계획

## Phase 1: 프로젝트 초기 세팅
- [ ] `npm create astro@latest` 로 Astro 프로젝트 생성
- [ ] Tailwind CSS 통합 (`@astrojs/tailwind`)
- [ ] MDX 통합 (`@astrojs/mdx`)
- [ ] TypeScript strict mode 설정
- [ ] Prettier + ESLint 설정
- [ ] `tsconfig.json` 경로 별칭 설정 (`@/components`, `@/layouts` 등)
- [ ] Git 초기화 및 GitHub 원격 저장소 연결
- [ ] `.gitignore` 작성

## Phase 2: 콘텐츠 스키마 & 샘플 포스트
- [ ] `src/content/config.ts` — MDX frontmatter 스키마 정의 (zod)
- [ ] 샘플 MDX 포스트 3개 작성 (Phase 테스트용)
- [ ] `draft` 필드 처리 (빌드 시 제외 로직)

## Phase 3: 레이아웃 & 공통 컴포넌트
- [ ] `BaseLayout.astro` — HTML head (SEO, OG 태그), 폰트 로딩
- [ ] `Header.astro` — 로고, 네비게이션, 모바일 메뉴
- [ ] `Footer.astro` — 저작권, 링크
- [ ] `PostCard.astro` — 홈 목록에서 사용하는 카드 컴포넌트
- [ ] Tailwind 기본 Typography 스타일 (`@tailwindcss/typography`)

## Phase 4: 핵심 페이지 구현
- [ ] `src/pages/index.astro` — 포스트 목록 + 페이지네이션
- [ ] `src/pages/posts/[slug].astro` — 포스트 상세 (TOC, 이전/다음)
- [ ] `src/pages/tags/index.astro` — 태그 목록
- [ ] `src/pages/tags/[tag].astro` — 태그별 포스트
- [ ] `src/pages/about.astro` — About 페이지

## Phase 5: MDX 커스텀 컴포넌트
- [ ] `Callout.astro` — info / warn / danger 강조 박스
- [ ] `ImageCaption.astro` — 캡션 이미지
- [ ] 코드 블록 Shiki 테마 설정 (밝은 테마)
- [ ] MDX 컴포넌트 전역 등록

## Phase 6: SEO & 성능
- [ ] `@astrojs/sitemap` 설정
- [ ] `public/robots.txt` 작성
- [ ] Open Graph 이미지 메타태그
- [ ] 예상 읽기 시간 유틸 함수
- [ ] Lighthouse 점검 (Performance 90+, SEO 100)

## Phase 7: Docker + 배포
- [ ] `Dockerfile` 작성 (멀티 스테이지: build → nginx)
- [ ] `docker-compose.yml` 작성
- [ ] `.github/workflows/deploy.yml` — GitHub Actions CI/CD
  - `main` push → 빌드 → Docker Hub/ghcr.io push → SSH 원격 배포
- [ ] 서버 Nginx/Caddy 리버스 프록시 설정 예시 문서화
- [ ] 커스텀 도메인 DNS 연결 가이드

## 의존성

```
Phase 1 → Phase 2 → Phase 3 → Phase 4
                              ↓
                         Phase 5, Phase 6 (병렬 가능)
                              ↓
                         Phase 7
```

## 주요 패키지

```json
{
  "dependencies": {
    "astro": "^4.x",
    "@astrojs/mdx": "^3.x",
    "@astrojs/tailwind": "^5.x",
    "@astrojs/sitemap": "^3.x",
    "@tailwindcss/typography": "^0.5.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.x",
    "typescript": "^5.x",
    "eslint": "^8.x",
    "prettier": "^3.x",
    "prettier-plugin-astro": "^0.x"
  }
}
```
