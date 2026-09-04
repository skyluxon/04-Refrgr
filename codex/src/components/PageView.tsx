"use client";
import { useEffect } from "react";
import { trackEvent, type EventName } from "@/lib/analytics";
export function PageView({ event }:{event:EventName}) { useEffect(()=>trackEvent(event),[event]); return null; }
