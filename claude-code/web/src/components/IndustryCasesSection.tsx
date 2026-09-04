"use client";

import { useState } from "react";
import { INDUSTRIES, installationCases, type Industry } from "@/data/cases";

type Filter = Industry | "전체";

export function IndustryCasesSection() {
  const [filter, setFilter] = useState<Filter>("전체");

  function goToCases(next: Filter) {
    setFilter(next);
    document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" });
  }

  const visibleCases =
    filter === "전체"
      ? installationCases
      : installationCases.filter((c) => c.industry === filter);

  return (
    <>
      {/* 업종별 진입 카드 */}
      <section id="industries" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            우리 업종 사례부터 확인하세요
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500 sm:text-base">
            업종을 선택하면 아래 설치사례에서 바로 확인할 수 있어요
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => goToCases(item.key)}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="text-lg font-semibold text-slate-900">
                  {item.label}
                </span>
                <span className="text-sm text-slate-500 group-hover:text-blue-600">
                  설치사례 보기 →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 설치사례 */}
      <section id="cases" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">설치사례</h2>
            <p className="text-sm text-slate-500 sm:text-base">
              실제 매장에 설치된 사례와 사장님들의 이야기입니다
            </p>
          </div>

          {/* 필터 칩 */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setFilter("전체")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === "전체"
                  ? "bg-blue-950 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              전체
            </button>
            {INDUSTRIES.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  filter === item.key
                    ? "bg-blue-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCases.map((c) => (
              <article
                key={c.id}
                className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-md"
              >
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${c.thumbnailTone} text-4xl`}
                  aria-hidden
                >
                  {INDUSTRIES.find((i) => i.key === c.industry)?.icon}
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">{c.title}</h3>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {c.industry}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    &ldquo;{c.review}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
