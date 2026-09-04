import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiry-store";
import type { InquiryInput } from "@/types/inquiry";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<InquiryInput>;

  if (!body.name || !body.industry || !body.contact || !body.agreed) {
    return NextResponse.json(
      { ok: false, error: "필수 항목이 누락되었습니다." },
      { status: 400 }
    );
  }

  const record = await saveInquiry({
    name: body.name,
    industry: body.industry,
    contact: body.contact,
    message: body.message ?? "",
    agreed: body.agreed,
  });

  return NextResponse.json({ ok: true, id: record.id });
}
