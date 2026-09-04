import { promises as fs } from "fs";
import path from "path";
import type { InquiryInput, InquiryRecord } from "@/types/inquiry";

// 서버 전용 저장 로직. MVP 단계에서는 콘솔 로그 + 로컬 JSON 파일 저장만 한다.
// 추후 이메일 발송 / CRM(예: 구글시트, HubSpot 등) 연동으로 교체할 때는
// 이 함수의 구현부만 바꾸면 되고, 호출부(API 라우트)는 그대로 둔다.

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "inquiries.json");

async function readAll(): Promise<InquiryRecord[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as InquiryRecord[];
  } catch {
    return [];
  }
}

export async function saveInquiry(input: InquiryInput): Promise<InquiryRecord> {
  const record: InquiryRecord = {
    ...input,
    id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    submittedAt: new Date().toISOString(),
  };

  // 1) 콘솔 로그 (운영 초기 임시 확인용)
  console.log("[상담 문의 접수]", record);

  // 2) 로컬 JSON 파일 저장 (임시 저장소 — 프로덕션에서는 DB/CRM으로 교체)
  await fs.mkdir(DATA_DIR, { recursive: true });
  const all = await readAll();
  all.push(record);
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf-8");

  return record;
}
