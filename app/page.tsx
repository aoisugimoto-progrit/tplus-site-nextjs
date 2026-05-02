'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ScrollFade from '@/components/ui/ScrollFade';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* ヒーローセクション */}
      <section
        className="relative min-h-svh bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('${BASE_PATH}/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-[clamp(60px,18vw,120px)] font-bold text-white mb-4">T＋</h1>
          <p className="text-[clamp(14px,3.5vw,28px)] text-white/90 tracking-[0.2em] sm:tracking-[0.3em]">瀧本ゼミ企業分析パート</p>
        </div>

        <div className="absolute bottom-[max(env(safe-area-inset-bottom),24px)] sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
          <p className="text-[10px] tracking-[3px] mb-3 font-light">SCROLL</p>
          <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] border-l-[3px] border-b-[3px] border-white rotate-[-45deg]"></div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-[#0A0F14] to-[#050A0F]">
        <div className="max-w-4xl mx-auto">
          <ScrollFade>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 text-center bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] bg-clip-text text-transparent pb-2 border-b-2 border-gray-700 inline-block w-full">Only outliers can outperform</h2>
          </ScrollFade>

          <ScrollFade delay={100}>
            <div className="text-white/80 space-y-4 text-left leading-relaxed text-base md:text-lg">
              <p>「T+」とは、瀧本ゼミにおける新入生教育の総称です。</p>
              <p>2.0期の城田氏をはじめ、代々のゼミ生によって連綿と受け継がれ、常にブラッシュアップされてきました。</p>
              <p>この度、瀧本ゼミに蓄積された膨大な資料やこれまでの歴史を一つに集約しました。</p>
              <p>本サイトが、未来のゼミ生の手によってさらに発展していくことを願っています。</p>
            </div>
          </ScrollFade>
        </div>

        {/* 本サイトの目的（1列フル幅） */}
        <ScrollFade delay={200}>
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] bg-clip-text text-transparent">本サイトの目的について</h2>
            <div className="text-white/80 space-y-5 text-left leading-relaxed text-base md:text-xl">
              <p>本サイトは「投資について何から勉強すればいいかわからない」という超初心者向けのガイドです。投資の全体像を把握し、将来の見通しを立てる一助となることを目的に、初歩的な全体像を描きました。</p>
              <p>あくまで全体像であり、投資の醍醐味は本来、一社一社や各業界を詳細に分析していくプロセスにあります。本資料は投資の「基礎」としてご活用ください。</p>
            </div>
          </div>
        </ScrollFade>

        {/* ゼミ生の責務 */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
          <ScrollFade delay={300}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center bg-gradient-to-r from-[#4ADE80] to-[#38BDF8] bg-clip-text text-transparent">ゼミ生の責務</h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Take', desc: '投資知識を貪欲に吸収し、\n自己を研鑽せよ' },
              { title: 'Give', desc: '専門領域を極め、\n知見を惜しみなく共有せよ' },
              { title: 'Grow', desc: '組織と共に進化し、\n持続的な価値を生み出せ' }
            ].map((item, i) => (
              <ScrollFade key={i} delay={100 * (i + 1) + 300}>
                <div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10"
                  style={{
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 whitespace-pre-line leading-relaxed text-base md:text-lg">{item.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* ナビゲーションカード */}
        <div className="mt-20 md:mt-32 max-w-7xl mx-auto">
          <ScrollFade delay={400}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">Explore</h2>
            <p className="text-white/60 text-center mb-12 md:mb-16">4 Categories</p>
          </ScrollFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: '創設者と理念', href: '/about-seminar' },
              { title: '教育コンテンツ', href: '/education' },
              { title: '有用資料', href: '/resources' },
              { title: '活動予定', href: '/schedule' }
            ].map((card, i) => (
              <ScrollFade key={i} delay={100 * (i + 1) + 400}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:from-white/10 hover:to-white/15 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{card.title}</h3>
                  <Link href={card.href} className="inline-flex items-center gap-2 min-h-11 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 text-base md:text-lg">
                    <span>Enter</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
