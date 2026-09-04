import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request:Request){
 try { const body=await request.json();const parsed=contactSchema.safeParse(body);if(!parsed.success)return NextResponse.json({ok:false,message:"입력값을 확인해 주세요.",errors:parsed.error.flatten().fieldErrors},{status:400});
  // Mock endpoint: intentionally does not persist or forward personal data.
  return NextResponse.json({ok:true,persisted:false,message:"검증 완료. MVP에서는 저장되지 않습니다."});
 } catch { return NextResponse.json({ok:false,message:"요청 형식을 확인해 주세요."},{status:400}) }
}
