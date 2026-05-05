'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Accordion from '@/components/ui/Accordion';
import BackToTop from '@/components/ui/BackToTop';
import ScrollFade from '@/components/ui/ScrollFade';
import BookGrid from '@/components/ui/BookGrid';
import VideoGrid from '@/components/ui/VideoGrid';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/* ---------- データ定義 ---------- */

/* ---------- 教育コンテンツ掲載書籍（画像ベース） ---------- */
const educationBooks = {
  basics: {
    section: '株ってなに？',
    books: [
      { image: '/images/books/IMG_1278.JPG', description: 'テクニカル分析の決定版', priority: 1 as const },
      { image: '/images/books/book_new1.png', description: '株式投資の基礎', priority: 1 as const },
      { image: '/images/books/IMG_1268.JPG', description: 'バフェットの投資哲学', priority: 2 as const },
      { image: '/images/books/IMG_1270.JPG', description: '成長株投資の教科書', priority: 3 as const },
      { image: '/images/books/book_new2.png', description: '応用編', priority: 1 as const },
    ],
  },
  external: {
    section: '外部環境分析編',
    books: [
      { image: '/images/books/IMG_1276.JPG', description: '経済学の基礎を学ぶ', priority: 1 as const },
      { image: '/images/books/IMG_1273.JPG', description: '金利と経済の関係', priority: 2 as const },
      { image: '/images/books/IMG_1287.JPG', description: 'マクロ経済学の教科書①', priority: 3 as const },
      { image: '/images/books/IMG_1288.JPG', description: 'マクロ経済学の教科書②', priority: 1 as const },
      { image: '/images/books/IMG_1291.JPG', description: '業界の全体像を把握', priority: 2 as const },
    ],
  },
  screening: {
    section: 'スクリーニング編',
    books: [
      { image: '/images/books/IMG_1275.JPG', description: '四季報の読み方入門', priority: 2 as const },
      { image: '/images/books/IMG_1281.JPG', description: '最新の企業情報', priority: 1 as const },
      { image: '/images/books/IMG_1290.JPG', description: 'プロが選ぶ注目銘柄', priority: 2 as const },
    ],
  },
  internal: {
    section: '内部環境分析編',
    books: [
      { image: '/images/books/zaimu3.png', description: '財務諸表の基礎', priority: 3 as const },
      { image: '/images/books/IMG_1269.JPG', description: '決算書の読み方', priority: 2 as const },
      { image: '/images/books/IMG_1271.JPG', description: '実践的な分析手法', priority: 1 as const },
      { image: '/images/books/IMG_1272.JPG', description: '業界別の分析', priority: 2 as const },
      { image: '/images/books/IMG_1274.JPG', description: 'ビジネスモデル理解', priority: 3 as const },
      { image: '/images/books/IMG_1289.JPG', description: '収益構造の分析', priority: 3 as const },
    ],
  },
  eventDriven: {
    section: 'イベントドリブン編',
    books: [
      { image: '/images/books/IMG_1279.JPG', description: '粉飾決算の実例', priority: 1 as const },
      { image: '/images/books/IMG_1286.JPG', description: '企業金融の基礎', priority: 1 as const },
    ],
  },
};

/* ---------- 教育コンテンツ掲載YouTube動画 ---------- */
const educationVideos = {
  basics: {
    section: '株ってなに？',
    videos: [
      { id: '1h-oUrtFMeg', title: 'まだ投資を始めていない人、必ず見てください。', duration: '00:11:55' },
      { id: '0rPL8ycM-Cg', title: '「市場価値」を具体的に説明できますか？', duration: '00:10:27' },
      { id: 'Smb-AXFwAfY', title: 'PERとは？プロが使う株価を決める公式を解説します。', duration: '00:24:51' },
      { id: 'B5Rg5sT_TmY', title: '損切り下手よ！早く株初心者から抜けだせ！！', duration: '00:16:34' },
      { id: '0os5k6wBhIs', title: '好決算でも株価が下がる理由について解説します。PEGレシオでPERと成長性のコスパを見極めよう。', duration: '00:21:49' },
      { id: 'nA3NVxG28vQ', title: '好決算でも株価が下がるワケ', duration: '00:31:27' },
      { id: 'ydPKNjSldR4', title: 'グロース株とバリュー株どっちを買うべき？それぞれのメリット・デメリットを解説します。', duration: '00:15:08' },
      { id: 'sb3v8Ytdmng', title: 'スマホで2億円を稼いだ天才ママに「チャート分析」を徹底解説してもらいました。', duration: '00:33:06' },
      { id: 'pr8cPsYQLL4', title: '株式投資１年目に知っておきたかったこと', duration: '00:00:00' },
    ],
  },
  external: {
    section: '外部環境分析編',
    videos: [
      { id: 'jmlpCcqkh5A', title: '日銀: ハト派vsタカ派の意味を理解できない人はダメ投資家です！', duration: '00:16:23' },
      { id: 'YrWrSXIqXW8', title: '【お金の勉強】イマサラ聞けない！日銀ってどういう機関？政策金利と物価の関係性を徹底解説', duration: '00:00:00' },
    ],
  },
  screening: {
    section: 'スクリーニング編',
    videos: [
      { id: '9CoLaONOEyE', title: '【東証が注意】PBR低い株は、なぜダメか？理由を解説します。', duration: '00:29:14' },
      { id: 'TkQPQzEhP1g', title: '超絶わかる！ROEの解説です', duration: '00:44:11' },
      { id: 'aV9cGgu6W2g', title: '【株仙人の道】資産250億円の片山晃が教えるPER活用の極意', duration: '00:45:51' },
      { id: 'duYE2o6ZJMo', title: '株価が上がらない！信用買い残が原因かも【信用買い残・信用売り残とは？影響を解説】', duration: '00:00:00' },
    ],
  },
  internal: {
    section: '内部環境分析編',
    videos: [
      { id: 'gUAlIbSNubM', title: '株価が上がり続けるビジネスモデルは〇〇型です。【ストック型vsフロー型】', duration: '00:19:51' },
      { id: 'dAwE43UaNq8', title: '「利益」と「キャッシュフロー」の違いが分からない人はヤバい', duration: '00:24:12' },
      { id: 'q_QTd293RqY', title: '増資は？配当は？決算直後のリアルゲイトに突撃！株主として根掘り葉掘り聞いてきました。', duration: '00:51:32' },
      { id: 'YiSy4Bjpo0Q', title: 'リアルゲイト岩本社長を直撃！増資は？配当は？リアルゲイト株は今後どうなるのか！？', duration: '01:02:41' },
      { id: 'A8F6q0CJNQI', title: '【そもそも解説】増資とは何なのか？なぜ株価が下がりがちなのか？　語ります', duration: '00:31:58' },
      { id: 'bLIrCEzvwnU', title: 'イケてる企業は決算説明を見れば分かります。〜INFORICHとクックパッドを事例に解説', duration: '00:26:01' },
      { id: 'eaqMFmtDsbU', title: '【株散歩】イケてる銘柄を街中から探せ！！', duration: '00:17:51' },
      { id: 'XHKGXsLi8u0', title: 'ラーメン銘柄「山岡家」を株ど素人カメラマンが推してるので、現地調査してみた。', duration: '00:22:07' },
      { id: 'xlR4tWmN3iU', title: '65万を200億にした伝説の投資家 片山晃（五月）さんに投資哲学と田端の活動への意見を聞いてみました。', duration: '00:14:35' },
      { id: 'r8rx8aB-4dg', title: '【失敗談】3営業日で「全資産」失った《250億円投資家・五月》', duration: '00:00:00' },
    ],
  },
  eventDriven: {
    section: 'イベントドリブン編',
    videos: [
      { id: 'h-vnnOnSpU4', title: '自社株買いが長期で株価を上げる理由を解説します。', duration: '00:27:21' },
      { id: 'hP586FoAp8s', title: 'アクティビストに狙われる銘柄の特徴を「買収防衛のプロ」に教えて貰いました。', duration: '00:23:00' },
      { id: 'Q5Y9OBIFNGM', title: '【クソ粉飾上場ゴール「オルツ」発覚記念】そもそも「良い上場」とは何か、説明できますか？', duration: '00:19:54' },
      { id: '_j04D4zhYYk', title: 'オリオンビールIPOの闇を暴く！初値が爆上がりするのは良いことか？', duration: '00:23:36' },
      { id: 'inp-bEFX4Ks', title: '100%外す最強の「逆神」投資家！岐阜さん登場で株クラについて激論しました。', duration: '00:37:52' },
      { id: 'yL2qE8bpqUY', title: 'Kaihou井村氏の「和製バークシャー宣言」で分かってない奴が多すぎる。', duration: '00:40:13' },
      { id: 'DB2m2DxYeys', title: '【株で大損】危険すぎる「仕手株」とは？【株初心者講座】', duration: '00:00:00' },
      { id: '084JsBANg9k', title: '【不正会計】オルツの売上水増し計上がいくらなんでもヤバすぎる。不正会計の全容と教訓を徹底解説！', duration: '00:00:00' },
    ],
  },
  shortSelling: {
    section: 'ショートという手法',
    videos: [
      { id: '-F-Wt6qz3Bw', title: 'ショート取引の仕組みとリスクについて解説', duration: '' },
    ],
  },
};

/* ---------- コンポーネント ---------- */

export default function ResourcesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarItems = [
    { title: 'トップ', id: 'hero' },
    { title: '参考書籍', id: 'books' },
    { title: 'YouTube動画', id: 'youtube' },
    { title: '有用サイト', id: 'websites' },
    { title: '有用ブログ', id: 'blogs' },
  ];

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

            <ScrollFade>
              <p className="text-base md:text-lg mb-10 md:mb-14 text-gray-700 leading-relaxed">
                投資学習に役立つ書籍・YouTube動画をまとめました。<br />
                教育コンテンツと併せて活用し、理解を深めてください。
              </p>
            </ScrollFade>

            {/* ===== 参考書籍（統合版） ===== */}
            <section id="books">
              <ScrollFade>
                <Accordion title="参考書籍" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    教育コンテンツ（Education）ページの各セクションで紹介されている参考書籍です。<br />
                    星の数（★★★ &gt; ★★☆ &gt; ★☆☆）は優先度を表しています。
                  </p>

                  {Object.entries(educationBooks).map(([key, { section, books: sectionBooks }]) => (
                    <div key={key} className="mb-10">
                      <h4 className="text-lg font-semibold mb-3 text-[#0A5046] border-b-2 border-[#0A5046]/20 pb-2">
                        {section}
                      </h4>
                      <BookGrid books={sectionBooks} />
                    </div>
                  ))}
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== YouTube動画（統合版） ===== */}
            <section id="youtube">
              <ScrollFade delay={200}>
                <Accordion title="YouTube動画" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    教育コンテンツ（Education）ページの各セクションで紹介されている個別のYouTube動画です。<br />
                    各セクションの内容をより深く理解するために活用してください。
                  </p>

                  {Object.entries(educationVideos).map(([key, { section, videos }]) => (
                    <div key={key} className="mb-10">
                      <h4 className="text-lg font-semibold mb-3 text-red-600 border-b-2 border-red-200 pb-2">
                        {section}
                      </h4>
                      <VideoGrid videos={videos} />
                    </div>
                  ))}
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== 有用サイト ===== */}
            <section id="websites">
              <ScrollFade delay={300}>
                <Accordion title="有用サイト" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    企業分析・投資判断に役立つWebサイトをまとめました。<br />
                    それぞれ特徴があるので、用途に応じて使い分けましょう。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'カブタン', url: 'https://kabutan.jp/', desc: '株価情報・チャート分析に強い総合サイト' },
                      { name: 'TDネット', url: 'https://www.release.tdnet.info/inbs/I_main_00.html', desc: '適時開示情報の公式サイト（リアルタイム）' },
                      { name: 'ボトムフィッシャー', url: 'https://bottom-fisher.online/', desc: '割安株・逆張り投資のスクリーニングツール' },
                      { name: 'バフェットコード', url: 'https://www.buffett-code.com/', desc: '財務データの可視化・比較分析に特化' },
                      { name: '日経', url: 'https://www.nikkei.com/', desc: '経済ニュース・市場動向の総合メディア' },
                      { name: 'Yahoo!ファイナンス', url: 'https://finance.yahoo.co.jp/', desc: '株価・掲示板・ニュースの定番サイト' },
                      { name: 'マネックス銘柄スカウター', url: 'https://info.monex.co.jp/market-information/tool/expectation.html', desc: '業績予想・アナリストレポートが充実' },
                      { name: '開示情報速報サービス', url: 'https://post.tokyoipo.com/visitor/news/', desc: 'TDnetの情報をいち早く通知' },
                      { name: '四季報オンライン', url: 'https://shikiho.toyokeizai.net/', desc: '会社四季報のWeb版（一部有料）' },
                      { name: '有報キャッチャー', url: 'https://ufocatch.com', desc: '有価証券報告書の検索・比較ツール' },
                      { name: 'TDnet サーチ', url: 'https://tdnet-search.appspot.com', desc: 'TDnet情報の高速検索エンジン' },
                    ].map((site, i) => (
                      <a
                        key={i}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">{site.name}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{site.desc}</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== 有用ブログ ===== */}
            <section id="blogs">
              <ScrollFade delay={400}>
                <Accordion title="有用ブログ" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    投資・経済分析に役立つ専門家のブログです。<br />
                    質の高い分析や独自の視点から学ぶことができます。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Shen Macro', url: 'https://www.shenmacro.com/', desc: 'マクロ経済分析・金融市場の深い洞察', author: 'Shen' },
                      { name: '春山昇華の株ブログ', url: 'https://haruyama-shoka.blogspot.com/', desc: '企業分析・投資哲学の実践的な解説', author: '春山昇華' },
                    ].map((blog, i) => (
                      <a
                        key={i}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-purple-300 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1 group-hover:text-purple-600 transition-colors">{blog.name}</h4>
                            <p className="text-xs text-gray-500 mb-3">by {blog.author}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{blog.desc}</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </Accordion>
              </ScrollFade>
            </section>

          </div>
        </div>
      </div>

      <BackToTop />
    </>
  );
}
