import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { GaScript } from "@/components/GaScript";

export const metadata: Metadata = { title: { default: "세광시앤에이치 | 상업용 쇼케이스", template: "%s | 세광시앤에이치" }, description: "상업용 냉장·냉동·온장 쇼케이스 전문기업 세광시앤에이치" };

export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="ko"><body><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:bg-white focus:p-3">본문으로 건너뛰기</a><GaScript/><Header/><main id="main">{children}</main><Footer/><MobileActions/><div className="h-16 md:hidden"/></body></html> }
