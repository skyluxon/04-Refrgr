export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white"
    >
      {/* 은은한 얼음/냉기 느낌의 배경 그라데이션 포인트 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200">
          1991년부터, 냉장·냉동·온장까지 — Cold&amp;Hot
        </span>

        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
          우리 매장에 딱 맞는 냉장·냉동 쇼케이스,
          <br />
          상담은 무료입니다
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          식당·정육점·카페 사장님을 위한 맞춤 쇼케이스. 매장 규모와 진열 방식에 맞는
          모델을 추천해드리고, 설치부터 A/S까지 한 번에 책임집니다. 손님이
          &ldquo;와!&rdquo; 하고 감탄할 진열, 저희가 만들어 드립니다.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
          >
            설치사례 먼저 보기
          </a>
        </div>
      </div>
    </section>
  );
}
