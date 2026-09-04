// MVP 목업 데이터: 설치사례
// 운영팀이 실제 사례(사진/후기)를 확보하면 이 배열만 교체하면 된다.

export type Industry = "식당" | "정육점" | "카페";

export interface InstallationCase {
  id: string;
  title: string;
  industry: Industry;
  /** 실제 사진 연동 전까지 사용하는 썸네일 톤 (industry별 컬러 그라데이션) */
  thumbnailTone: string;
  review: string;
}

export const INDUSTRIES: { key: Industry; label: string; icon: string }[] = [
  { key: "식당", label: "식당", icon: "🍽️" },
  { key: "정육점", label: "정육점", icon: "🥩" },
  { key: "카페", label: "카페", icon: "☕" },
];

export const installationCases: InstallationCase[] = [
  {
    id: "case-1",
    title: "한촌설렁탕 본점",
    industry: "식당",
    thumbnailTone: "from-[#131721] to-[#2a323f]",
    review: "회전율 높은 홀에서도 소음 없이 조용히 잘 돌아가요. 손님들이 먼저 알아봐요.",
  },
  {
    id: "case-2",
    title: "행복분식",
    industry: "식당",
    thumbnailTone: "from-[#1c2130] to-[#3a4650]",
    review: "반찬 냉장 보관이 편해지니 회전이 빨라졌어요. 설치도 하루 만에 끝났습니다.",
  },
  {
    id: "case-3",
    title: "우리동네 정육점",
    industry: "정육점",
    thumbnailTone: "from-[#131721] to-[#3f5457]",
    review: "고기 색이 살아있다고 손님들이 먼저 알아봐요. 진열 효과가 확실히 다릅니다.",
  },
  {
    id: "case-4",
    title: "다정정육식당",
    industry: "정육점",
    thumbnailTone: "from-[#1c2130] to-[#4f7377]",
    review: "정온 유지가 잘 돼서 육류 손실이 줄었어요. A/S도 빠르게 와주셨습니다.",
  },
  {
    id: "case-5",
    title: "카페 온기",
    industry: "카페",
    thumbnailTone: "from-[#131721] to-[#5c8386]",
    review: "쇼케이스 하나로 매장 분위기가 확 달라졌어요. 디저트 매출도 늘었습니다.",
  },
  {
    id: "case-6",
    title: "브루웍스 카페",
    industry: "카페",
    thumbnailTone: "from-[#1c2130] to-[#94babb]",
    review: "베이커리류 보관·진열이 한 번에 해결됐어요. 크기 추천도 꼼꼼히 해주셨어요.",
  },
];
