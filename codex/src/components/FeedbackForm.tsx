"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const infoOptions = ["가격", "제품 사양", "설치 방법·기간", "A/S", "인증·시험자료", "설치사례"];
export function FeedbackForm({ page }: { page:"general"|"special" }) {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); if(status === "loading") return; setStatus("loading"); const form = new FormData(e.currentTarget); const body = { page, ease:Number(form.get("ease")), information:form.getAll("information"), more:form.get("more"), intent:Number(form.get("intent")) }; try { const res=await fetch("/api/feedback",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)}); if(!res.ok) throw new Error(); trackEvent("feedback_submit",{page}); setStatus("success"); e.currentTarget.reset(); } catch { setStatus("error"); } }
  return <section className="section bg-[#f3f6fa] text-slate-900"><div className="container-site"><div className="max-w-2xl"><p className="eyebrow">MVP · 1분 피드백</p><h2 className="title">더 나은 제품 탐색을 위해 알려주세요</h2><p className="mt-3 text-slate-500">현재 응답은 MVP 검증용이며 저장되지 않습니다.</p></div>
    <form className="mt-8 grid max-w-3xl gap-7" onSubmit={submit}>
      <Scale name="ease" label="원하는 제품을 쉽게 찾을 수 있었나요?"/><fieldset><legend className="font-bold">제품 선택에 가장 필요했던 정보는 무엇인가요? (복수 선택)</legend><div className="mt-3 flex flex-wrap gap-3">{infoOptions.map(x=><label key={x} className="rounded-lg border border-blue-300/40 px-3 py-2"><input required type="checkbox" name="information" value={x} className="mr-2"/>{x}</label>)}</div></fieldset>
      <label><span className="label">추가로 확인하고 싶은 내용은 무엇인가요?</span><textarea name="more" className="field text-slate-900" rows={3} placeholder="자유롭게 적어주세요"/></label><Scale name="intent" label="홈페이지를 보고 상담할 의향이 생겼나요?"/>
      <button disabled={status==="loading"} className="btn btn-primary w-fit disabled:opacity-60">{status==="loading"?"보내는 중…":"피드백 보내기"}</button>
      <p aria-live="polite" className="text-sm">{status==="success"&&"의견을 확인했습니다. MVP에서는 서버에 저장하지 않습니다."}{status==="error"&&"전송하지 못했습니다. 잠시 후 다시 시도해 주세요."}</p>
    </form></div></section>;
}
function Scale({name,label}:{name:string;label:string}) { return <fieldset><legend className="font-bold">{label}</legend><div className="mt-3 flex gap-2">{[1,2,3,4,5].map(n=><label key={n} className="grid h-11 w-11 place-items-center border border-slate-300 bg-white"><input className="sr-only peer" required type="radio" name={name} value={n}/><span className="peer-checked:font-black peer-checked:text-blue-600">{n}</span></label>)}</div><p className="mt-2 text-xs text-slate-500">1 전혀 그렇지 않다 · 5 매우 그렇다</p></fieldset> }
