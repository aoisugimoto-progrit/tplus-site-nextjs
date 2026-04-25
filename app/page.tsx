import Link from 'next/link';
import Header from '@/components/layout/Header';
import ScrollFade from '@/components/ui/ScrollFade';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-[clamp(60px,8vw,120px)] font-bold text-white mb-4">T＋</h1>
          <p className="text-[clamp(18px,2.5vw,28px)] text-white/90 tracking-[0.3em]">瀧本ゼミ企業分析パート</p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
          <p className="text-[10px] tracking-[3px] mb-3 font-light">SCROLL</p>
          <div className="w-[30px] h-[30px] border-l-[3px] border-b-[3px] border-white rotate-[-45deg]"></div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-24 px-8 md:px-20 bg-gradient-to-br from-[#0A0F14] to-[#050A0F]">
        <div className="max-w-4xl mx-auto">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Only outliers can outperform</h2>
          </ScrollFade>

          <ScrollFade delay={100}>
            <div className="text-white/80 space-y-4 text-center leading-relaxed">
              <p>「T+」とは、瀧本ゼミにおける新入生教育の総称です。</p>
              <p>2.0期の城田氏をはじめ、代々のゼミ生によって連綿と受け継がれ、常にブラッシュアップされてきました。</p>
              <p>この度、瀧本ゼミに蓄積された膨大な資料やこれまでの歴史を一つに集約しました。</p>
              <p>本サイトが、未来のゼミ生の手によってさらに発展していくことを願っています。</p>
            </div>
          </ScrollFade>
        </div>

        {/* ゼミ生の責務 */}
        <div className="mt-24 max-w-6xl mx-auto">
          <ScrollFade delay={200}>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">ゼミ生の責務</h2>
          </ScrollFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Take', desc: '投資知識を貪欲に吸収し、\n自己を研鑽せよ' },
              { title: 'Give', desc: '専門領域を極め、\n知見を惜しみなく共有せよ' },
              { title: 'Grow', desc: '組織と共に進化し、\n持続的な価値を生み出せ' }
            ].map((item, i) => (
              <ScrollFade key={i} delay={100 * (i + 1)}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 whitespace-pre-line leading-relaxed">{item.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* 本サイトの目的 */}
        <ScrollFade delay={300}>
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">本サイトの目的について</h2>
            <div className="text-white/80 space-y-4 text-center leading-relaxed">
              <p>本サイトは「投資について何から勉強すればいいかわからない」という<br/>超初心者向けのガイドです。<br/>投資の全体像を把握し、将来の見通しを立てる一助となることを目的に、<br/>初歩的な全体像を描きました。</p>
              <p>あくまで全体像であり、投資の醍醐味は本来、<br/>一社一社や各業界を詳細に分析していくプロセスにあります。<br/>本資料は投資の「基礎」としてご活用ください。</p>
            </div>
          </div>
        </ScrollFade>

        {/* ナビゲーションカード */}
        <div className="mt-24 max-w-6xl mx-auto">
          <ScrollFade delay={400}>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Explore</h2>
            <p className="text-white/60 text-center mb-12">3 Categories</p>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '創設者と理念', desc: '瀧本先生について、ゼミの理念、OB・OG紹介', href: '/about-seminar' },
              { title: '教育コンテンツ', desc: '投資の原理原則、業界研究、学習ロードマップ', href: '/education' },
              { title: '活動予定', desc: '年間スケジュール、イベント、新歓情報', href: '/schedule' }
            ].map((card, i) => (
              <ScrollFade key={i} delay={100 * (i + 1) + 400}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-white/10 hover:to-white/15 hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{card.desc}</p>
                  <Link href={card.href} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
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
