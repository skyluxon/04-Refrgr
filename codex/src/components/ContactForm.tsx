"use client";
import { useState } from "react";
import { contactSchema } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

type Errors=Record<string,string[]|undefined>;
const fields=[
  ["name","이름","text","홍길동"], ["organization","업체 또는 기관명","text","세광식당"],
  ["phone","연락처","tel","010-0000-0000"], ["region","설치 예정 지역","text","예: 서울 강남구"],
] as const;
export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"loading"|"success"|"error">("idle"); const [errors,setErrors]=useState<Errors>({}); const [started,setStarted]=useState(false);
 function start(){if(!started){setStarted(true);trackEvent("contact_form_start")}}
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();if(status==="loading")return;const form=e.currentTarget;const fd=new FormData(form);const body={...Object.fromEntries(fd),privacy:fd.get("privacy")==="true"};const parsed=contactSchema.safeParse(body);if(!parsed.success){setErrors(parsed.error.flatten().fieldErrors);return}setErrors({});setStatus("loading");try{const res=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(parsed.data)});const json=await res.json();if(!res.ok)throw new Error(json.message);trackEvent("contact_form_submit");setStatus("success");form.reset();}catch{setStatus("error")}}
 return <form onFocus={start} onSubmit={submit} noValidate className="card grid gap-5 md:grid-cols-2">
  {fields.map(([name,label,type,placeholder])=><Field key={name} name={name} label={label} error={errors[name]?.[0]}><input id={name} name={name} type={type} placeholder={placeholder} className="field" aria-invalid={!!errors[name]} aria-describedby={errors[name]?`${name}-error`:undefined}/></Field>)}
  <Field name="industry" label="업종" error={errors.industry?.[0]}><select id="industry" name="industry" className="field" defaultValue="" aria-invalid={!!errors.industry}><option value="" disabled>선택해 주세요</option>{["식당","정육점","카페·베이커리","의료기관","참치·수산물 전문점","기타"].map(x=><option key={x}>{x}</option>)}</select></Field>
  <Field name="product" label="관심 제품" error={errors.product?.[0]}><select id="product" name="product" className="field" defaultValue="" aria-invalid={!!errors.product}><option value="" disabled>선택해 주세요</option>{["냉동 쇼케이스","냉장 쇼케이스","베이커리 쇼케이스","아이스크림 쇼케이스","주문형 쇼케이스","특수 쇼케이스","아직 모름"].map(x=><option key={x}>{x}</option>)}</select></Field>
  <div className="md:col-span-2"><Field name="message" label="문의 내용" error={errors.message?.[0]}><textarea id="message" name="message" className="field" rows={5} placeholder="설치 환경과 궁금한 점을 간단히 알려주세요." aria-invalid={!!errors.message}/></Field></div>
  <div className="md:col-span-2"><label className="flex items-start gap-3"><input name="privacy" value="true" type="checkbox" className="mt-1 h-5 w-5"/><span><strong>(필수) 개인정보 수집에 동의합니다.</strong><span className="mt-1 block text-sm text-slate-600">상담 연락 목적으로 입력 정보를 수집합니다. MVP에서는 서버에 저장하지 않습니다.</span></span></label>{errors.privacy&&<p className="error" role="alert">{errors.privacy[0]}</p>}</div>
  <div className="md:col-span-2"><button type="submit" disabled={status==="loading"} className="btn btn-primary w-full md:w-auto disabled:cursor-not-allowed disabled:opacity-60">{status==="loading"?"문의 확인 중…":"상담 문의 보내기"}</button><p className="mt-3 text-sm" aria-live="polite">{status==="success"&&"입력 내용을 확인했습니다. 현재 MVP는 문의를 저장하거나 담당자에게 전달하지 않습니다."}{status==="error"&&"문의 내용을 확인하지 못했습니다. 잠시 후 다시 시도해 주세요."}</p></div>
 </form>
}
function Field({name,label,error,children}:{name:string;label:string;error?:string;children:React.ReactNode}){return <div><label className="label" htmlFor={name}>{label} <span className="text-red-600">*</span></label>{children}{error&&<p id={`${name}-error`} className="error" role="alert">{error}</p>}</div>}
