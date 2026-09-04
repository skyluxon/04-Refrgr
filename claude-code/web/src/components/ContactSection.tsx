import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-brand-surface py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            상담 신청하기
          </h2>
          <p className="mt-2 text-sm text-neutral-500 sm:text-base">
            매장 상황을 알려주시면 담당자가 견적과 함께 연락드립니다. 정가는
            매장 조건에 따라 달라 상담 후 안내드려요.
          </p>
        </div>

        <div className="mt-8 rounded-[4px] border border-brand-line bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
