import { NextResponse } from "next/server";
import { feedbackSchema } from "@/lib/validation";
export async function POST(request:Request){try{const parsed=feedbackSchema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({ok:false,message:"입력값을 확인해 주세요."},{status:400});return NextResponse.json({ok:true,persisted:false,message:"검증 완료. MVP에서는 저장되지 않습니다."})}catch{return NextResponse.json({ok:false,message:"요청 형식을 확인해 주세요."},{status:400})}}
