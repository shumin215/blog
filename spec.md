# Shumin's World - 기능 명세

## Feature 1: 포스트 목록 (홈)

### 요구사항
1. 전체 포스트를 최신순으로 나열
2. 각 포스트 카드에 제목, 날짜, 태그, 짧은 설명(description) 표시
3. 페이지네이션 또는 무한 스크롤 (초기: 페이지네이션)
4. 반응형: 모바일 1열, 태블릿 2열, 데스크탑 2~3열

### 데이터 모델 (MDX Frontmatter)
```yaml
---
title: "포스트 제목"
date: 2024-01-01
description: "짧은 설명 (SEO meta description 겸용)"
tags: ["tag1", "tag2"]
draft: false          # true면 빌드에서 제외
cover: "/images/posts/cover.png"   # 선택
---
```

---

## Feature 2: 포스트 상세

### 요구사항
1. MDX 렌더링 (Markdown + JSX 컴포넌트)
2. 코드 블록 신택스 하이라이팅 (Shiki)
3. 목차(TOC) 자동 생성 — h2, h3 기준
4. 이전/다음 포스트 네비게이션
5. 예상 읽기 시간 표시
6. 소셜 공유 버튼 (선택)

### MDX 내 사용 가능 컴포넌트
- `<Callout type="info|warn|danger">` — 강조 박스
- `<ImageCaption src="" alt="" caption="">` — 캡션 이미지
- (추후 확장) 차트, 코드 플레이그라운드 등

---

## Feature 3: 태그 시스템

### 요구사항
1. 태그 목록 페이지 (`/tags`) — 전체 태그와 포스트 수 표시
2. 태그별 포스트 목록 페이지 (`/tags/[tag]`)
3. 포스트 상세에서 태그 클릭 시 해당 태그 페이지로 이동

---

## Feature 4: About 페이지

### 요구사항
1. 간단한 자기소개
2. 기술 스택 목록
3. GitHub / SNS 링크

---

## Feature 5: 반응형 레이아웃 & 테마

### 요구사항
1. 기본 테마: 밝은 색상 (Light mode 기본)
2. 다크모드 토글 버튼 제공 (선택적으로 추후 추가)
3. 모바일(< 640px) / 태블릿(640~1024px) / 데스크탑(> 1024px) 대응
4. 폰트: 가독성 좋은 sans-serif (Pretendard 또는 Inter)

---

## Feature 6: SEO & 메타데이터

### 요구사항
1. 각 페이지별 `<title>`, `<meta description>` 자동 생성
2. Open Graph 태그 (SNS 공유 미리보기)
3. sitemap.xml 자동 생성 (`@astrojs/sitemap`)
4. robots.txt

---

## Feature 7: Docker + CI/CD 배포

### 요구사항
1. `Dockerfile` — Nginx 기반 정적 파일 서빙
2. `docker-compose.yml` — 포트 매핑, 볼륨 설정
3. GitHub Actions workflow — `main` push 시 자동 빌드 & 배포
4. 배포 흐름:
   - 빌드 → Docker 이미지 생성 → 레지스트리 push → 서버 SSH 접속 → `docker-compose up -d`
5. 커스텀 도메인 연결 (Nginx/Caddy 리버스 프록시 설정 예시 포함)

---

## 비기능 요구사항

| 항목 | 목표 |
|------|------|
| Lighthouse Performance | 90점 이상 |
| Lighthouse SEO | 100점 |
| Lighthouse Accessibility | 90점 이상 |
| 첫 페이지 로드 (LCP) | < 2.5초 |
| 모바일 가독성 | 최소 폰트 16px, 충분한 줄간격 |
