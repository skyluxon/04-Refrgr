import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "세광시앤에치 | 매장 냉장·냉동 쇼케이스 상담",
  description:
    "식당·정육점·카페를 위한 맞춤 냉장·냉동 쇼케이스. 1991년 설립, ISO 9001/14001·Inno-Biz·Main-Biz 인증, 설치사례 40건+. 무료 상담 신청하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
