'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/* ---------- データ定義 ---------- */

interface Book {
  title: string;
  author: string;
  description: string;
  category: string;
}

interface Website {
  title: string;
  url: string;
  description: string;
  category: string;
}

interface Report {
  title: string;
  source: string;
  description: string;
  url?: string;
}

interface InternalResource {
  title: string;
  description: string;
  url: string;
}

const books: Book[] = [
  // 入門
  { title: '株式投資の未来', author: 'ジェレミー・シーゲル', description: '長期投資のバイブル。過去200年の株式データを基に、配当再投資戦略の有効性を実証した名著。', category: '入門' },
  { title: 'ウォール街のランダム・ウォーカー', author: 'バートン・マルキール', description: 'インデックス投資の古典。効率的市場仮説を軸に、個人投資家が取るべき戦略を解説。', category: '入門' },
  { title: '敗者のゲーム', author: 'チャールズ・エリス', description: '「市場に勝とうとするな」というメッセージを、データと論理で説得力を持って伝える良書。', category: '入門' },
  // ファンダメンタルズ
  { title: '企業価値評価（上・下）', author: 'マッキンゼー・アンド・カンパニー', description: 'DCF法を中心としたバリュエーションの教科書。プロの投資家が参照する定番テキスト。', category: 'ファンダメンタルズ' },
  { title: '財務諸表分析', author: 'K. G. パレプ 他', description: '財務諸表を使って企業の実態を読み解く手法を体系的に学べる。MBAの定番テキスト。', category: 'ファンダメンタルズ' },
  { title: 'バフェットの銘柄選択術', author: 'メアリー・バフェット', description: 'ウォーレン・バフェットの投資手法を具体的な銘柄選定プロセスとして解説。実践的。', category: 'ファンダメンタルズ' },
  { title: '会計クイズを解くだけで財務3表がわかる 世界一楽しい決算書の読み方', author: '大手町のランダムウォーカー', description: 'クイズ形式で財務3表の読み方を学べる入門書。初心者でも楽しみながら理解できる。', category: 'ファンダメンタルズ' },
  // マクロ経済
  { title: '金利を見れば投資はうまくいく', author: '堀井正孝', description: '金利と株式市場の関係を分かりやすく解説。マクロ経済の視点から投資判断を行う方法を学べる。', category: 'マクロ経済' },
  { title: '世界一やさしい米国経済の教科書', author: '田内学', description: '米国経済の仕組みを初心者向けに解説。FRBの金融政策や経済指標の読み方が学べる。', category: 'マクロ経済' },
  // 投資哲学
  { title: '賢明なる投資家', author: 'ベンジャミン・グレアム', description: 'バリュー投資の父による不朽の名著。「安全域」の概念を提唱し、投資の原理原則を説く。', category: '投資哲学' },
  { title: 'ピーター・リンチの株で勝つ', author: 'ピーター・リンチ', description: '伝説的ファンドマネージャーが個人投資家の強みを活かした投資法を伝授。具体例が豊富。', category: '投資哲学' },
  { title: 'マーケットの魔術師', author: 'ジャック・D・シュワッガー', description: 'トップトレーダーたちへのインタビュー集。多様な投資スタイルと共通する成功の法則を学べる。', category: '投資哲学' },
];

const websites: Website[] = [
  // 情報収集
  { title: '日経電子版', url: 'https://www.nikkei.com/', description: '日本経済新聞のオンライン版。マクロ経済から個別企業まで幅広くカバー。投資家必読。', category: '情報収集' },
  { title: 'EDINET', url: 'https://disclosure2.edinet-fsa.go.jp/', description: '金融庁が運営する有価証券報告書の閲覧サイト。企業分析の一次情報源。', category: '情報収集' },
  { title: 'TDnet（適時開示情報閲覧サービス）', url: 'https://www.release.tdnet.info/inbs/I_main_00.html', description: '東証が運営する適時開示システム。決算短信やIR資料をリアルタイムで確認できる。', category: '情報収集' },
  { title: 'Yahoo!ファイナンス', url: 'https://finance.yahoo.co.jp/', description: '株価チャート、財務データ、掲示板など。個人投資家の間で最もよく使われる情報サイト。', category: '情報収集' },
  // スクリーニング・分析
  { title: 'バフェット・コード', url: 'https://www.buffett-code.com/', description: '企業の財務データを視覚的に比較・分析できるツール。スクリーニングにも対応。', category: 'スクリーニング・分析' },
  { title: 'マネックス銘柄スカウター', url: 'https://info.monex.co.jp/news/2019/20190212_01.html', description: '10年以上の財務データをグラフで確認できる。セグメント分析にも強い。口座開設で無料。', category: 'スクリーニング・分析' },
  { title: 'IR BANK', url: 'https://irbank.net/', description: '過去の決算データや財務指標を長期時系列で確認できる。PER・PBR・ROEの推移把握に便利。', category: 'スクリーニング・分析' },
  // 学習
  { title: '投資の森', url: 'https://nikkeiyosoku.com/', description: '日経平均予想や経済指標カレンダーなど、マーケット情報を分かりやすくまとめたサイト。', category: '学習' },
  { title: 'Investopedia', url: 'https://www.investopedia.com/', description: '英語の投資用語辞典・学習サイト。金融知識の国際標準を学べる。', category: '学習' },
];

const reports: Report[] = [
  { title: '日銀金融政策決定会合 議事要旨', source: '日本銀行', description: '金融政策の方向性を読み解くために不可欠な一次資料。金利動向の予測に活用。', url: 'https://www.boj.or.jp/mopo/mpmsche_minu/index.htm' },
  { title: '経済・物価情勢の展望（展望レポート）', source: '日本銀行', description: '日銀が四半期ごとに公表する経済見通し。GDP成長率やインフレ率の予測を掲載。', url: 'https://www.boj.or.jp/mopo/outlook/index.htm' },
  { title: '通商白書', source: '経済産業省', description: '世界経済と日本の通商環境の分析。グローバルなマクロトレンドの把握に有用。', url: 'https://www.meti.go.jp/report/tsuhaku/index.html' },
  { title: '会社四季報', source: '東洋経済新報社', description: '全上場企業の業績・財務データ・記者評価を掲載。スクリーニングの出発点として活用。' },
  { title: 'JPXマーケットレポート', source: '日本取引所グループ', description: '東証の市場動向レポート。売買代金、外国人投資家の動向、IPO情報などを掲載。', url: 'https://www.jpx.co.jp/markets/statistics-equities/index.html' },
  { title: 'FOMC議事録', source: 'FRB（米連邦準備制度理事会）', description: '米国の金融政策を決定するFOMCの議事録。米国金利動向は日本市場にも大きく影響する。', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm' },
];

const internalResources: InternalResource[] = [
  { title: 'IR取材の手法と質問例', description: 'IR取材の進め方、質問リスト、注意点をまとめたスライド。', url: 'https://docs.google.com/presentation/d/1-ZZLOIIIFzPXjef9XRPO4dRPoHXyKlQWWEjRriNk2B0/edit?slide=id.g1f04479e724_0_0#slide=id.g1f04479e724_0_0' },
  { title: 'FIRE制度詳細資料', description: 'FIRE制度、卒業要件、回避基準の詳細をまとめた公式スライド。', url: 'https://docs.google.com/presentation/d/1p8snOK1fEBqLZUEK8IzkrbKrhnxfb6MhTZF2pWhX6y8/edit#slide=id.g1edd7c47d36_1_127' },
];

/* ---------- カテゴリ抽出ヘルパー ---------- */
function uniqueCategories<T extends { category: string }>(items: T[]): string[] {
  return Array.from(new Set(items.map(i => i.category)));
}

/* ---------- コンポーネント ---------- */

export default function ResourcesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    books: true,
    websites: false,
    reports: false,
    internal: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sidebarItems = [
    { title: 'トップ', id: 'hero' },
    { title: '参考書籍', id: 'books' },
    { title: 'おすすめWebサイト', id: 'websites' },
    { title: '業界レポート・公的資料', id: 'reports' },
    { title: 'ゼミ内部資料', id: 'internal' },
  ];

  const bookCategories = uniqueCategories(books);
  const websiteCategories = uniqueCategories(websites);

  return (
    <>
      <Header />

      <Sidebar items={sidebarItems} onToggle={setSidebarOpen} />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-[260px]' : 'ml-0'}`}>
        <div className="pt-[70px]">
          {/* ページヒーロー */}
          <section
            id="hero"
            className="relative h-[260px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
            <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white">Resources</h1>
          </section>

          {/* コンテンツ */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">

            <p className="text-base md:text-lg mb-10 md:mb-14 text-gray-700 leading-relaxed">
              投資学習に役立つ書籍、Webサイト、業界レポート、ゼミ内部資料をまとめました。<br />
              教育コンテンツと併せて活用し、理解を深めてください。
            </p>

            {/* ===== 参考書籍 ===== */}
            <section id="books" className="mb-12 md:mb-16">
              <button
                onClick={() => toggleAccordion('books')}
                className="w-full flex items-center justify-between text-left group"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4535] group-hover:text-[#0A5046] transition-colors">
                  参考書籍
                </h2>
                <span className={`text-2xl text-[#1E4535] transition-transform duration-300 ${openAccordions.books ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${openAccordions.books ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">投資の理論と実践を体系的に学べる書籍を、レベル・テーマ別に厳選しました。</p>

                {bookCategories.map(category => (
                  <div key={category} className="mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#1E4535] border-b-2 border-[#0A5046]/20 pb-2">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {books.filter(b => b.category === category).map((book, i) => (
                        <div
                          key={i}
                          className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                          <h4 className="text-lg font-semibold mb-1 text-gray-900">{book.title}</h4>
                          <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">{book.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== おすすめWebサイト ===== */}
            <section id="websites" className="mb-12 md:mb-16">
              <button
                onClick={() => toggleAccordion('websites')}
                className="w-full flex items-center justify-between text-left group"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4535] group-hover:text-[#0A5046] transition-colors">
                  おすすめWebサイト
                </h2>
                <span className={`text-2xl text-[#1E4535] transition-transform duration-300 ${openAccordions.websites ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${openAccordions.websites ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">企業分析・スクリーニング・マクロ経済の情報収集に役立つサイトです。</p>

                {websiteCategories.map(category => (
                  <div key={category} className="mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#1E4535] border-b-2 border-[#0A5046]/20 pb-2">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {websites.filter(w => w.category === category).map((site, i) => (
                        <a
                          key={i}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 hover:border-[#0A5046]/30 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#0A5046] transition-colors">{site.title}</h4>
                            <span className="text-gray-400 flex-shrink-0 text-sm mt-1">&#8599;</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed mt-3 text-sm md:text-base">{site.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== 業界レポート・公的資料 ===== */}
            <section id="reports" className="mb-12 md:mb-16">
              <button
                onClick={() => toggleAccordion('reports')}
                className="w-full flex items-center justify-between text-left group"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4535] group-hover:text-[#0A5046] transition-colors">
                  業界レポート・公的資料
                </h2>
                <span className={`text-2xl text-[#1E4535] transition-transform duration-300 ${openAccordions.reports ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${openAccordions.reports ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                  外部環境分析に欠かせない公的レポートや統計資料です。一次情報にあたる習慣を身につけましょう。
                </p>

                <div className="space-y-4">
                  {reports.map((report, i) => (
                    <div
                      key={i}
                      className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{report.title}</h4>
                        <span className="inline-block text-xs font-semibold bg-gradient-to-r from-[#0A5046] to-[#1E4535] text-white px-3 py-1 rounded-full whitespace-nowrap">
                          {report.source}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-2">{report.description}</p>
                      {report.url && (
                        <a
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0A5046] hover:text-[#0A5046]/70 font-semibold text-sm transition-colors"
                        >
                          <span>資料を見る</span>
                          <span>&#8599;</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== ゼミ内部資料 ===== */}
            <section id="internal" className="mb-12 md:mb-16">
              <button
                onClick={() => toggleAccordion('internal')}
                className="w-full flex items-center justify-between text-left group"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E4535] group-hover:text-[#0A5046] transition-colors">
                  ゼミ内部資料
                </h2>
                <span className={`text-2xl text-[#1E4535] transition-transform duration-300 ${openAccordions.internal ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${openAccordions.internal ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                  T＋のゼミ活動で使用する内部資料へのリンクです。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {internalResources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-br from-[#0A5046]/5 to-[#1E4535]/10 border-2 border-[#0A5046]/20 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 hover:border-[#0A5046]/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-lg font-semibold text-[#1E4535] group-hover:text-[#0A5046] transition-colors">{resource.title}</h4>
                        <span className="text-[#0A5046]/50 flex-shrink-0 text-sm mt-1">&#8599;</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mt-3 text-sm md:text-base">{resource.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
