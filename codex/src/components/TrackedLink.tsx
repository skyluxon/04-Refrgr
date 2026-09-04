"use client";
import Link from "next/link";
import { trackEvent, type EventName } from "@/lib/analytics";

export function TrackedLink({ href, event, label, className, children }: { href:string; event:EventName; label?:string; className?:string; children:React.ReactNode }) {
  return <Link href={href} className={className} onClick={() => trackEvent(event, label ? { label } : {})}>{children}</Link>;
}
