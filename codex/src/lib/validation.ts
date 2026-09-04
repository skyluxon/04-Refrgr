import { z } from "zod";

const requiredText = (label: string) => z.string().trim().min(1, `${label}을(를) 입력해 주세요.`).max(500);

export const contactSchema = z.object({
  name: requiredText("이름").max(50),
  organization: requiredText("업체 또는 기관명").max(100),
  industry: requiredText("업종"),
  phone: z.string().trim().regex(/^[0-9+()\-\s]{8,20}$/, "연락처 형식을 확인해 주세요."),
  region: requiredText("설치 예정 지역").max(100),
  product: requiredText("관심 제품"),
  message: requiredText("문의 내용").max(1000),
  privacy: z.literal(true, { error: "개인정보 수집에 동의해 주세요." }),
});

export const feedbackSchema = z.object({
  page: z.enum(["general", "special"]),
  ease: z.coerce.number().int().min(1).max(5),
  information: z.array(z.string()).min(1, "필요한 정보를 하나 이상 선택해 주세요."),
  more: z.string().trim().max(1000),
  intent: z.coerce.number().int().min(1).max(5),
});
