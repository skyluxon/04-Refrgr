import { contact } from "@/data/site";
import { TrackedLink } from "./TrackedLink";

export function MobileActions() { return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 shadow-2xl md:hidden">
  {contact.phoneHref ? <TrackedLink href={contact.phoneHref} event="phone_click" className="btn btn-secondary">전화 상담</TrackedLink> : <span className="btn btn-secondary cursor-not-allowed text-slate-500" title="전화번호 확인 필요">전화번호 준비 중</span>}
  <TrackedLink href="/contact" event="consultation_click" label="mobile_sticky" className="btn btn-primary">상담·견적 문의</TrackedLink>
</div> }
