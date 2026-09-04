import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 실제 sekwangcnh.com에서도 사용 중인 Pretendard(가변 폰트) — 브랜드 타이포 톤 유지
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "세광시앤에치 | 매장 냉장·냉동 쇼케이스 상담",
  description:
    "식당·정육점·카페를 위한 맞춤 냉장·냉동 쇼케이스. 1991년 설립, ISO 9001/14001·Inno-Biz·Main-Biz 인증, 설치사례 40건+. 무료 상담 신청하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
