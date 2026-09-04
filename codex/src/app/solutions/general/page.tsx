import type { Metadata } from "next";
import { SolutionLayout } from "@/components/SolutionLayout";
export const metadata:Metadata={title:"일반 쇼케이스"};
const segments=[
 {id:"restaurant",name:"식당",concerns:["식재료 신선도 유지","주방·매장 동선에 맞는 크기","청소와 관리 편의"],products:["냉장 쇼케이스","냉동 쇼케이스","주문형 쇼케이스"]},
 {id:"butcher",name:"정육점",concerns:["상품이 잘 보이는 진열","신선도 유지에 적합한 환경","매장 공간 활용"],products:["냉장 쇼케이스","주문형 쇼케이스"]},
 {id:"cafe",name:"카페·베이커리",concerns:["디저트를 돋보이게 하는 진열","매장 분위기와 조화","제품별 보관 조건"],products:["베이커리 쇼케이스","냉장 쇼케이스","아이스크림 쇼케이스"]},
];
export default function Page(){return <SolutionLayout type="general" title="내 업종에 맞는 쇼케이스를 쉽게 찾으세요" lead="복잡한 사양보다 매장 운영의 고민에서 시작합니다. 식당, 정육점, 카페에 필요한 정보를 한눈에 확인하세요." segments={segments}/>}
