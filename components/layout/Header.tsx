'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        const opacity = Math.max(0, 1 - (scrollY - 100) / 200);
        setScrolled(opacity === 0);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        isHome
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="max-w-full mx-0 px-8 py-0 flex justify-between items-center h-[70px]">
        {isHome && (
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Image
              src={`${BASE_PATH}/logo.png`}
              alt="瀧本ゼミ T＋"
              width={45}
              height={45}
              className="h-[45px] w-auto"
            />
            <span className={`text-base font-normal tracking-wide whitespace-nowrap ${
              isHome ? 'text-white' : 'text-gray-900'
            }`}>
              瀧本ゼミ企業分析パート
            </span>
          </Link>
        )}

        <nav className={`flex gap-9 items-center ${!isHome ? 'ml-auto' : ''}`}>
          <Link
            href="/"
            className={`text-sm font-normal transition-all duration-300 relative group ${
              isHome ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-[#0A5046]'
            }`}
          >
            ホーム
            <span className={`absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isHome ? 'bg-white' : 'bg-[#0A5046]'
            }`}></span>
          </Link>
          <Link
            href="/about-seminar"
            className={`text-sm font-normal transition-all duration-300 relative group ${
              isHome ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-[#0A5046]'
            }`}
          >
            創設者と理念
            <span className={`absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isHome ? 'bg-white' : 'bg-[#0A5046]'
            }`}></span>
          </Link>
          <Link
            href="/education"
            className={`text-sm font-normal transition-all duration-300 relative group ${
              isHome ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-[#0A5046]'
            }`}
          >
            教育コンテンツ
            <span className={`absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isHome ? 'bg-white' : 'bg-[#0A5046]'
            }`}></span>
          </Link>
          <Link
            href="/schedule"
            className={`text-sm font-normal transition-all duration-300 relative group ${
              isHome ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-[#0A5046]'
            }`}
          >
            活動予定
            <span className={`absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isHome ? 'bg-white' : 'bg-[#0A5046]'
            }`}></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
