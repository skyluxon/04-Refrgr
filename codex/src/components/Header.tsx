"use client";
import Link from "next/link";
import { useState } from "react";
import { TrackedLink } from "./TrackedLink";

const nav = [
  ["일반 쇼케이스", "/solutions/general"], ["특수 쇼케이스", "/solutions/special"],
  ["대표 제품", "/#products"], ["설치사례", "/#cases"], ["회사 신뢰정보", "/#trust"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="container-site flex min-h-18 items-center justify-between gap-4">
      <Link href="/" className="font-black tracking-tight text-[#092a53]">SEKWANG <span className="text-blue-600">C&amp;H</span><span className="block text-[10px] font-semibold tracking-[.12em] text-slate-500">세광시앤에이치</span></Link>
      <button className="rounded-lg border border-slate-300 p-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setOpen(!open)}>
        <span aria-hidden className="block text-xl">{open ? "×" : "☰"}</span>
      </button>
      <nav className="hidden items-center gap-5 text-sm font-bold md:flex" aria-label="주요 메뉴">
        {nav.map(([name, href]) => <Link key={name} href={href} className="hover:text-blue-600">{name}</Link>)}
        <TrackedLink href="/contact" event="consultation_click" label="header" className="btn btn-primary">상담문의</TrackedLink>
      </nav>
    </div>
    {open && <nav id="mobile-nav" className="container-site grid gap-1 border-t border-slate-200 py-3 md:hidden" aria-label="모바일 메뉴">
      {nav.map(([name, href]) => <Link key={name} href={href} className="rounded-lg px-3 py-3 font-bold hover:bg-blue-50" onClick={() => setOpen(false)}>{name}</Link>)}
      <TrackedLink href="/contact" event="consultation_click" label="mobile_menu" className="btn btn-primary mt-2">상담문의</TrackedLink>
    </nav>}
  </header>;
}
