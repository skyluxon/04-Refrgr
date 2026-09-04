import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/data/site";
export const metadata:Metadata={title:"상담문의"};
export default function Page(){return <section className="section bg-slate-50"><div className="container-site"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">상담·견적 문의</p><h1 className="title">제품을 몰라도<br/>상담할 수 있습니다</h1><p className="mt-5 leading-7 text-slate-600">업종과 설치 예정 지역, 궁금한 내용을 남겨주세요. 현재는 고객 반응 검증용 MVP로 문의 내용이 저장되거나 실제 담당자에게 전송되지 않습니다.</p><div className="card mt-7"><h2 className="font-black">다른 상담 방법</h2><dl className="mt-4 grid gap-3 text-sm"><div><dt className="text-slate-500">전화</dt><dd className="font-bold">{contact.phoneLabel}</dd></div><div><dt className="text-slate-500">상담 시간</dt><dd className="font-bold">{contact.hours}</dd></div></dl></div></div><ContactForm/></div></div></section>}
