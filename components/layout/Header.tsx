'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NAV_ITEMS = [
  { href: '/', label: 'ホーム' },
  { href: '/about-seminar', label: '創設者と理念' },
  { href: '/education', label: '教育コンテンツ' },
  { href: '/resources', label: '有用資料' },
  { href: '/schedule', label: '活動予定' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const linkBase = (active: boolean) =>
    `text-sm font-normal transition-all duration-300 relative group ${
      isHome ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-[#0A5046]'
    } ${active ? 'font-semibold' : ''}`;

  const underline = `absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
    isHome ? 'bg-white' : 'bg-[#0A5046]'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isHome ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-md'}`}
    >
      <div className="max-w-full px-4 sm:px-6 md:px-8 flex justify-between items-center h-[60px] md:h-[70px] pt-[env(safe-area-inset-top)]">
        {isHome ? (
          <Link href="/" className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
            <Image
              src={`${BASE_PATH}/logo.png`}
              alt="瀧本ゼミ T＋"
              width={45}
              height={45}
              className="h-9 md:h-[45px] w-auto"
            />
            <span className={`hidden sm:inline text-sm md:text-base font-normal tracking-wide whitespace-nowrap ${
              isHome ? 'text-white' : 'text-gray-900'
            }`}>
              瀧本ゼミ企業分析パート
            </span>
          </Link>
        ) : (
          <span aria-hidden className="md:hidden" />
        )}

        {/* デスクトップナビ */}
        <nav className={`hidden md:flex gap-6 lg:gap-9 items-center ${!isHome ? 'ml-auto' : ''}`}>
          {NAV_ITEMS.map(({ href, label }) => (
            <Link key={href} href={href} className={linkBase(pathname === href)}>
              {label}
              <span className={underline}></span>
            </Link>
          ))}
        </nav>

        {/* モバイル: ハンバーガーボタン */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="メニューを開く"
          className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md transition-colors ${
            isHome ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* モバイルメニュー オーバーレイ */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden
        className={`md:hidden fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* モバイルメニュー ドロワー */}
      <nav
        id="mobile-nav"
        role="navigation"
        aria-label="メインナビゲーション"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-full bg-white text-gray-900 z-[70] shadow-2xl transition-transform duration-300 pt-[max(env(safe-area-inset-top),16px)] pb-[max(env(safe-area-inset-bottom),24px)] pr-[max(env(safe-area-inset-right),24px)] pl-6 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="メニューを閉じる"
            className="inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center min-h-12 px-4 py-3 rounded-md text-base transition-colors ${
                    active
                      ? 'bg-[#0A5046] text-white font-semibold'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
