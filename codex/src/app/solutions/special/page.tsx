import type { Metadata } from "next";
import { SolutionLayout } from "@/components/SolutionLayout";
export const metadata:Metadata={title:"특수 쇼케이스"};
const segments=[
 {id:"medical",name:"의료기관",concerns:["용도에 맞는 정밀한 온도관리","인증·시험자료 확인","시설 환경과 운영 요구조건"],products:["의료기관용 특수 쇼케이스 — 관련 사양 확인 중"]},
 {id:"seafood",name:"참치·수산물 전문점",concerns:["취급 품목에 적합한 보관 환경","연속 운영 시 안정성","현장 규모와 작업 동선"],products:["참치·수산물용 특수 쇼케이스 — 관련 사양 확인 중"]},
];
export default function Page(){return <SolutionLayout type="special" special title="정밀한 온도관리는 확인된 자료에서 시작합니다" lead="의료기관과 참치·수산물 전문점의 요구는 일반 매장과 다릅니다. 용도와 현장을 먼저 확인하고 검증된 정보만 안내합니다." segments={segments}/>}
