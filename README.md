# 안상문 · Frontend Engineer Portfolio

신입 프론트엔드 개발자 안상문의 포트폴리오 페이지입니다.  
프레임워크 없이 **Vanilla HTML · CSS · JS** 만으로 구현했습니다.

---

## 라이브 데모

> [https://ansm0403.github.io/](https://ansm0403.github.io/)

---

## 주요 기능

| 기능 | 설명 |
|---|---|
| 고정 헤더 내비게이션 | 스크롤 위치 기반으로 현재 섹션 자동 활성화 (active bar) |
| 프로젝트 카드 아코디언 | `<details>` / `<summary>` 로 개요·기능·트러블슈팅·성능 탭 전환 |
| 라이트박스 모달 | 아키텍처 다이어그램·GIF 클릭 시 확대 (Vanilla JS, ESC/backdrop 닫기) |
| 코드 구문 강조 | Prism.js (`language-tsx`) — 코드 블록 복사 버튼 포함 |
| 반응형 레이아웃 | 620 px 이하 모바일 대응 |

---

## 기술 스택

- **HTML5 / CSS3** — CSS 변수, Flexbox, Grid, `@media` 반응형
- **Vanilla JS (ES5+)** — `requestAnimationFrame` 스크롤 최적화, `IntersectionObserver` 미사용
- **Prism.js 1.29** — CDN, autoloader 플러그인으로 언어 자동 로드
- **Pretendard** · **JetBrains Mono** — CDN 웹폰트

---

## 파일 구조

```
portfolio_page/
├── index.html          # 마크업 전체
├── style.css           # 전체 스타일 (CSS 변수 기반)
├── script.js           # 탭 전환 · 네비 동기화 · 라이트박스 · 복사 버튼
└── public/
    └── images/
        ├── favicon.ico
        ├── 안상문_이력서사진.png
        ├── architec/               # 프로젝트 아키텍처 다이어그램
        │   ├── E-commerce_아키텍쳐.png
        │   ├── E-commerce_아키텍쳐_요약.png
        │   ├── AID_아키텍쳐.png
        │   └── AID_아키텍쳐_요약.png
        └── func/                   # 기능 GIF 스크린샷
            ├── E-commerce_dashboard_screenshot.gif
            ├── E-commerce-login-sync.gif
            ├── AID_source_of_truth.gif
            ├── AID_3D_viewer.gif
            ├── hotel_reservation.gif
            └── hotel_detail.gif
```
---


## 색상 변수 (CSS Custom Properties)

| 변수 | 값 | 용도 |
|---|---|---|
| `--p` | `#534AB7` | 주 포인트 (보라) |
| `--t` | `#0F6E56` | 보조 포인트 (초록) |
| `--ink` | `#1A1A19` | 본문 텍스트 |
| `--sub` | `#5C5B55` | 보조 텍스트 |
| `--hint` | `#908F86` | 힌트·레이블 |
| `--line` | `#E7E6E0` | 구분선·테두리 |
| `--code-bg` | `#201F1D` | 코드 블록 배경 |
