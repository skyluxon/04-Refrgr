export type InquiryIndustry = "식당" | "정육점" | "카페" | "기타";

export interface InquiryInput {
  name: string;
  industry: InquiryIndustry;
  contact: string;
  message: string;
  agreed: boolean;
}

export interface InquiryRecord extends InquiryInput {
  id: string;
  submittedAt: string;
}
