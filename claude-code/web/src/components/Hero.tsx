export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-navy text-white">
      {/* 미세한 격자 텍스처 — 원본 사이트의 절제된 산업적 톤(글로우/네온 없이) 반영 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28">
        <span className="mb-5 inline-flex items-center gap-2 border border-white/20 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-brand-steel-light">
          SINCE 1991 · COLD&amp;HOT
        </span>

        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
          우리 매장에 딱 맞는
          <br />
          냉장·냉동 쇼케이스,
          <br />
          상담은 무료입니다
        </h1>

        <p className="mt-3 max-w-xl text-sm font-medium tracking-wide text-brand-steel-light sm:text-base">
          Unmatched Quality, Absolute Trust
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          식당·정육점·카페 사장님을 위한 맞춤 쇼케이스. 매장 규모와 진열 방식에 맞는
          모델을 추천해드리고, 설치부터 A/S까지 한 번에 책임집니다. 손님이
          &ldquo;와!&rdquo; 하고 감탄할 진열, 저희가 만들어 드립니다.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[3px] bg-brand-steel px-7 py-3 text-base font-semibold text-white transition hover:bg-brand-steel-dark"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center rounded-[3px] border border-white/25 px-7 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10"
          >
            설치사례 먼저 보기
          </a>
        </div>
      </div>
    </section>
  );
}
