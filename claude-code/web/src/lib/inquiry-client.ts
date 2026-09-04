import type { InquiryInput } from "@/types/inquiry";

// 클라이언트에서 호출하는 제출 함수. 지금은 내부 API 라우트(/api/inquiries)를
// 호출해 콘솔 로그 + 로컬 JSON 저장으로 처리한다. 이메일/CRM 연동으로 바꿀 때도
// 이 함수의 시그니처(입력 InquiryInput → 결과)는 그대로 유지하면 된다.
export async function submitInquiry(
  input: InquiryInput
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const data = await res.json();

    if (!res.ok) {
      return { ok: false, error: data.error ?? "제출 중 오류가 발생했습니다." };
    }

    return { ok: true, id: data.id };
  } catch {
    return { ok: false, error: "네트워크 오류로 제출하지 못했습니다. 잠시 후 다시 시도해주세요." };
  }
}
