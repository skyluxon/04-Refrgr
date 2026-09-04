export type EventName =
  | "industry_card_click" | "general_solution_view" | "special_solution_view"
  | "consultation_click" | "phone_click" | "contact_form_start"
  | "contact_form_submit" | "feedback_submit";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export function trackEvent(name: EventName, params: Record<string, string | number | boolean> = {}) {
  if (process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
  window.gtag?.("event", name, params);
}
