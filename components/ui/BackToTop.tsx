'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[max(env(safe-area-inset-bottom),16px)] right-4 sm:right-6 md:right-8 sm:bottom-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#0A5046] text-white rounded-full shadow-lg hover:bg-[#1E4535] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center text-xl sm:text-2xl z-50 ripple-effect ${
        isVisible ? 'opacity-100 pointer-events-auto zoom-in' : 'opacity-0 pointer-events-none scale-0'
      }`}
      aria-label="ページトップへ戻る"
      style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <span className="animate-bounce">↑</span>
    </button>
  );
}
