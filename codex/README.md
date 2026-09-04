# 세광시앤에이치 홈페이지 MVP

업종 중심 제품 탐색과 상담 의향을 검증하기 위한 Next.js MVP입니다. 제품 상세, 관리자, 실제 데이터 저장 기능은 포함하지 않습니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 환경 변수

`.env.example`을 참고해 운영 환경에만 `NEXT_PUBLIC_GA_MEASUREMENT_ID`를 설정하세요. 개발 환경에서는 GA4 이벤트를 전송하지 않습니다.

## 콘텐츠 수정

회사, 연락처, 업종, 제품, 사례, 인증, FAQ는 `src/data/site.ts`에서 관리합니다. `확인 필요`, `샘플 콘텐츠`, `관련 자료 확인 중` 표시는 운영 전 검증된 자료로 교체해야 합니다.

## Mock API

`/api/contact`와 `/api/feedback`은 입력 검증만 수행하며 데이터를 저장하거나 외부로 전달하지 않습니다. 실제 연동 시 각 route의 검증 이후 부분을 이메일, Google Sheets, CRM 또는 DB 어댑터로 교체하세요.
