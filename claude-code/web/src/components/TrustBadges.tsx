import type { ReactNode } from "react";

interface Badge {
  icon: ReactNode;
  value: string;
  label: string;
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5 7.5 21l4.5-2.5 4.5 2.5-1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" strokeLinecap="round" />
    </svg>
  );
}

const badges: Badge[] = [
  { icon: <CalendarIcon />, value: "1991년 설립", label: "35년+ 업력" },
  { icon: <CertificateIcon />, value: "ISO 9001 · 14001", label: "품질·환경경영 인증" },
  { icon: <CertificateIcon />, value: "Inno-Biz · Main-Biz", label: "기술·경영혁신형 인증" },
  { icon: <BuildingIcon />, value: "40건+", label: "설치 실적" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
        {badges.map((badge) => (
          <div key={badge.value} className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-blue-200">
              {badge.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">{badge.value}</p>
              <p className="text-xs text-slate-500">{badge.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
