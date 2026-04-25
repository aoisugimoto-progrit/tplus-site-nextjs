'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#0A5046] via-[#0F1E50] to-[#1E4535] z-[9999] pointer-events-none transition-opacity duration-[350ms] ${
        isTransitioning ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
