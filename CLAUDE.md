# Shumin's World

## 개요

Astro + MDX 기반 개인 기술 블로그 "Shumin's World". 밝은 테마, 반응형 레이아웃, GitHub Pages 배포 및 GitHub Actions CI/CD를 통해 자동화된 운영을 목표로 한다.

## 기술 스택

- **Framework**: Astro 6.x
- **Content**: MDX (Markdown + JSX 컴포넌트 혼합 가능)
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions (`main` push → 자동 빌드 & 배포)
- **Domain**: 개인 커스텀 DNS 도메인 연결 (`public/CNAME`)

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

## 환경 변수

```bash
# .env (필요 시)
SITE_URL=https://your-domain.com
```

## 배포

### GitHub Pages 자동 배포

1. `main` 브랜치에 push
2. GitHub Actions 트리거 → `npm run build` 실행
3. `dist/` 결과물을 GitHub Pages에 자동 배포

### 최초 설정 (1회만)

1. GitHub 저장소 Settings → Pages → Source: **GitHub Actions** 선택
2. `public/CNAME` 파일에 실제 도메인 입력
3. `astro.config.mjs`의 `site` 값을 실제 도메인으로 변경
4. DNS 설정: 도메인 레지스트리에서 CNAME을 `<username>.github.io`로 지정

### 이미지 관리

저장소 1GB 제한 대응: 이미지는 외부 호스팅 서비스(Cloudinary 등) URL 사용 권장
