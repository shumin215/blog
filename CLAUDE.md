# Shumin's World

## 개요

Astro + MDX 기반 개인 기술 블로그 "Shumin's World". 밝은 테마, 반응형 레이아웃, GitHub Pages 배포 및 GitHub Actions CI/CD를 통해 자동화된 운영을 목표로 한다.

## 기술 스택

- **Framework**: Astro 6.x
- **Content**: MDX (Markdown + JSX 컴포넌트 혼합 가능)
- **Styling**: Tailwind CSS v4
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions (`main` push → 자동 빌드 & Cloudflare 배포)
- **Domain**: 개인 커스텀 DNS 도메인 연결 (Cloudflare 대시보드)

## 빌드 & 테스트

```bash
# 개발 서버
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

## 디렉토리 구조

```
blog/
├── src/
│   ├── content/             # MDX 포스트 파일 (.mdx)
│   │   └── posts/
│   ├── components/          # 재사용 Astro 컴포넌트
│   │   ├── Callout.astro
│   │   ├── ImageCaption.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/               # 라우트 페이지
│   │   ├── index.astro      # 홈 (포스트 목록)
│   │   ├── about.astro
│   │   ├── rss.xml.ts
│   │   ├── posts/[slug].astro
│   │   └── tags/
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── readingTime.ts
│   └── content.config.ts    # 콘텐츠 스키마 (Astro v6)
├── public/
│   ├── CNAME                # 커스텀 도메인 설정
│   ├── robots.txt
│   └── favicon.svg
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages 자동 배포
├── astro.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── prettier.config.mjs
```

## 코딩 컨벤션

- TypeScript 사용 (strict mode)
- 컴포넌트 파일명: PascalCase (`PostCard.astro`)
- 페이지 파일명: kebab-case (`about-me.astro`)
- MDX frontmatter 필수 필드: `title`, `date`, `tags`, `description`
- Tailwind 클래스: 모바일 퍼스트 (`sm:`, `md:`, `lg:` 순서)
- 이미지: `public/images/` 하위 폴더 관리
- 커밋: Conventional Commits 형식 (`feat:`, `fix:`, `docs:` 등)
- **브랜치/태그명: 반드시 영어만 사용** (한글, 특수문자 금지, kebab-case 권장)
- **커밋 전 필수 검토**: `npm run lint` 및 `npm run build` 실행하여 문법 오류 없는지 확인 후 커밋

## 환경 변수

```bash
# .env (필요 시)
SITE_URL=https://your-domain.com
```

## 배포

### Cloudflare Pages 자동 배포

1. `main` 브랜치에 push
2. GitHub Actions 트리거 → `npm run build` 실행
3. `dist/` 결과물을 Cloudflare Pages에 자동 배포

### 최초 설정 (1회만)

1. Cloudflare Pages 대시보드에서 프로젝트 생성 (이름: `blog`)
2. GitHub 저장소 Settings → Secrets에 추가:
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API 토큰
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare 계정 ID
3. `astro.config.mjs`의 `site` 값을 실제 도메인으로 변경
4. `public/robots.txt` Sitemap URL을 실제 도메인으로 변경
5. 커스텀 도메인: Cloudflare Pages 대시보드 → Custom domains

### 이미지 관리

저장소 1GB 제한 대응: 이미지는 외부 호스팅 서비스(Cloudinary 등) URL 사용 권장
