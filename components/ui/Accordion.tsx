'use client';

import { useState, useRef, useEffect } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = true }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current && isOpen) {
        setHeight(contentRef.current.scrollHeight);
      }
    });

    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <section className="mb-10 border-[3px] border-[rgba(10,80,70,0.25)] rounded-[20px] overflow-hidden bg-gradient-to-br from-white/98 to-[#FAFCFF] shadow-lg hover:shadow-xl hover:border-[rgba(10,80,70,0.4)] transition-all duration-300">
      <button
        className="w-full border-none border-b-2 border-[rgba(10,80,70,0.15)] text-left cursor-pointer px-9 py-8 bg-gradient-to-br from-white/98 to-[#FAFCFF] hover:from-[#FAFCFF] hover:to-[#F5F8FC] transition-all duration-300 flex items-center justify-between gap-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button"
      >
        <h2 className="flex-1 m-0 bg-gradient-to-r from-[#4ADE80] via-[#22D3EE] to-[#818CF8] bg-clip-text text-transparent text-[clamp(22px,3.5vw,30px)] font-bold">
          {title}
        </h2>
        <div className="flex items-center gap-3 px-7 py-4 bg-gradient-to-br from-[#F5FAFC] to-[#F0F5FA] border-2 border-[rgba(10,80,70,0.3)] rounded-xl text-[#0A5046] text-base font-bold transition-all duration-300 whitespace-nowrap hover:bg-[rgba(10,80,70,0.05)]">
          <span
            className="inline-block text-xl font-black transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}
            aria-hidden="true"
          >
            ▼
          </span>
          <span>{isOpen ? '閉じる' : '開く'}</span>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: height !== undefined ? `${height}px` : 'none'
        }}
      >
        <div ref={contentRef} className="px-9 py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
