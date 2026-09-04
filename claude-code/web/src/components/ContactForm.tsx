"use client";

import { useState, type FormEvent } from "react";
import { submitInquiry } from "@/lib/inquiry-client";
import type { InquiryIndustry } from "@/types/inquiry";

const INDUSTRY_OPTIONS: InquiryIndustry[] = ["식당", "정육점", "카페", "기타"];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const agreed = formData.get("agreed") === "on";
    if (!agreed) {
      setStatus("error");
      setErrorMessage("개인정보 수집·이용에 동의해주세요.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const result = await submitInquiry({
      name: String(formData.get("name") ?? ""),
      industry: (formData.get("industry") as InquiryIndustry) ?? "기타",
      contact: String(formData.get("contact") ?? ""),
      message: String(formData.get("message") ?? ""),
      agreed,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center">
        <p className="text-lg font-semibold text-blue-900">
          문의가 접수되었습니다. 감사합니다!
        </p>
        <p className="mt-2 text-sm text-blue-700">
          담당자가 확인 후 빠르게 연락드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-blue-600 underline underline-offset-2"
        >
          다른 문의 남기기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="홍길동"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-slate-700">
          업종
        </label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="" disabled>
            업종을 선택해주세요
          </option>
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-slate-700">
          연락처
        </label>
        <input
          id="contact"
          name="contact"
          type="tel"
          required
          placeholder="010-0000-0000"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="매장 규모, 희망 설치일 등 자유롭게 남겨주세요"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="agreed"
          name="agreed"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="agreed" className="text-sm text-slate-600">
          (필수) 상담을 위한 개인정보(이름, 연락처) 수집·이용에 동의합니다.
          수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 파기됩니다.
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "제출 중..." : "무료 상담 신청하기"}
      </button>
    </form>
  );
}
