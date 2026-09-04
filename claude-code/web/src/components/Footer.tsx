export function Footer() {
  return (
    <footer className="bg-brand-ink py-10 text-white/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <p className="text-base font-bold text-white">(주)세광시앤에치 SEKWANG C&amp;H</p>
          <p className="text-sm">1991년 설립 · 상업용 냉장·냉동 쇼케이스 전문 제조</p>
          <p className="text-sm">경기 파주시 월롱면 · 상담문의 상단 &ldquo;무료 상담 신청&rdquo; 버튼 이용</p>
        </div>
        <p className="mt-6 text-center text-xs text-white/30 sm:text-left">
          © {new Date().getFullYear()} SEKWANG C&amp;H. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
