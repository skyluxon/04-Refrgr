export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="flex items-baseline gap-2 text-white">
          <span className="text-lg font-bold tracking-tight">세광시앤에치</span>
          <span className="hidden text-xs font-medium text-blue-300 sm:inline">
            Cold&amp;Hot
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 sm:flex">
          <a href="#industries" className="hover:text-white">업종별 솔루션</a>
          <a href="#cases" className="hover:text-white">설치사례</a>
          <a href="#contact" className="hover:text-white">상담문의</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          무료 상담 신청
        </a>
      </div>
    </header>
  );
}
