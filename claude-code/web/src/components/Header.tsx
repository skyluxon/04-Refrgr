export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur supports-[backdrop-filter]:bg-brand-navy/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#hero" className="flex items-baseline gap-2 text-white">
          <span className="text-base font-bold tracking-tight sm:text-lg">세광시앤에치</span>
          <span className="hidden text-xs font-medium tracking-wide text-brand-steel-light sm:inline">
            Cold&amp;Hot
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 sm:flex">
          <a href="#industries" className="transition hover:text-white">업종별 솔루션</a>
          <a href="#cases" className="transition hover:text-white">설치사례</a>
          <a href="#contact" className="transition hover:text-white">상담문의</a>
        </nav>
        <a
          href="#contact"
          className="shrink-0 whitespace-nowrap rounded-[3px] bg-brand-steel px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-steel-dark sm:px-4 sm:text-sm"
        >
          상담 신청
        </a>
      </div>
    </header>
  );
}
