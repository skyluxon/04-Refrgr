import Link from "next/link";
import { company, contact } from "@/data/site";

export function Footer() { return <footer className="bg-[#06172f] py-12 text-slate-300">
  <div className="container-site grid gap-8 md:grid-cols-2">
    <div><p className="text-xl font-black text-white">{company.name}</p><p className="mt-3 max-w-md text-sm leading-6">{company.summary}</p><p className="mt-3 text-sm">{company.philosophy}</p></div>
    <div className="text-sm md:text-right"><p>{contact.address}</p><p className="mt-1">TEL {contact.phoneLabel} · FAX {contact.fax}</p><p className="mt-1">E-MAIL {contact.email}</p><div className="mt-4 flex gap-4 md:justify-end"><Link href="/contact">상담문의</Link><span>개인정보 처리방침 준비 중</span></div></div>
  </div>
</footer> }
