'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FAQS } from '@/libs/utils';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-primary-b w-full" id="about">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2 gap-8 pt-12 lg:pt-20">
        <div className="mx-auto max-w-2xl divide-y divide-border px-6 md:px-0">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-main text-lg text-text-primary">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-text-muted transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-text-secondary">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative min-h-104 lg:min-h-104">
          <Image
            src="/images/about-interior.jpg"
            alt="Interior staircase of an Edmel Architect project"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
