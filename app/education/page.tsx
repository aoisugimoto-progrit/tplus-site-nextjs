'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Accordion from '@/components/ui/Accordion';
import ProgressBar from '@/components/ui/ProgressBar';
import BackToTop from '@/components/ui/BackToTop';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import CompletionPopup from '@/components/ui/CompletionPopup';
import VideoGrid from '@/components/ui/VideoGrid';
import BookGrid from '@/components/ui/BookGrid';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function EducationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarItems = [
    { title: 'トップ', id: 'hero' },
    {
      title: '株ってなに？',
      id: 'basics',
      children: [
        { title: '① 株とは何か？', id: 'basics' },
        { title: '② どうやって儲けるのか？', id: 'basics' },
        { title: '③ なぜ株価は動くのか？', id: 'basics' },
      ]
    },
    {
      title: '企業分析の流れ',
      id: 'flow',
      children: [
        { title: 'STEP1:外部環境の分析', id: 'flow' },
        { title: 'STEP2:スクリーニング', id: 'flow' },
        { title: 'STEP3:内部環境の分析', id: 'flow' },
        { title: 'STEP4:イベントドリブン', id: 'flow' },
      ]
    },
    { title: '外部環境分析編', id: 'external' },
    { title: 'スクリーニング編', id: 'screening' },
    { title: '内部環境分析編', id: 'internal' },
    { title: 'イベントドリブン編', id: 'event-driven' },
    { title: '19の隠れたインサイト', id: 'insights' },
    { title: 'ちなみに：ショートという手法', id: 'short-selling' },
    { title: '理解度チェックテスト', id: 'quiz' },
    { title: 'おすすめの映画', id: 'movies' },
  ];

  return (
    <>
      <ProgressBar />
      <Header />
      <Sidebar items={sidebarItems} onToggle={setSidebarOpen} />
      <GlossaryTooltip />
      <CompletionPopup />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-[260px]' : 'ml-0'}`}>
        <div className="pt-[70px]">
          {/* ページヒーロー */}
          <section
            id="hero"
            className="relative h-[260px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
            <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white">Education</h1>
          </section>

          {/* コンテンツ */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
            <section id="basics">
              <Accordion title="株ってなに？ 読了時間 5分">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">① 株とは何か？ ー 所有権という本質</h3>
                <p className="mb-4">まず、「株」が一体何なのかを理解しましょう。<br/>株を買うということは、会社の一部を所有するということです。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">株式＝会社の所有権</h4>
                  <p className="mb-2"><span className="glossary-term" data-definition="会社の所有権を小口化したもの。1株を持つことは、その会社の一部を所有することを意味します。">株式</span>とは、会社の所有権を細かく分割したもの。</p>
                  <p><strong>例：</strong>トヨタの株を1株買う＝トヨタ自動車の一部を所有する</p>
                </div>

                <p className="mb-4"><strong>株式の誕生：東インド会社の物語</strong></p>
                <p className="mb-6">株式の起源は17世紀初頭のオランダ東インド会社に遡ります。当時、アジアとの貿易は莫大な利益を生む一方で、航海には難破や海賊といった巨大なリスクが伴いました。そこで生まれたのが「株式」という仕組み。複数の投資家から資金を集め、リスクを分散。航海が成功すれば利益を分配し、失敗しても損失を分散する。これが、現代の株式会社の原型です。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <p className="font-semibold mb-2">補足</p>
                  <p className="mb-2"><strong>会社の利益は誰のものか？</strong></p>
                  <p>「会社の純利益は社長が受け取る」と考えている方も多いかもしれません。しかし、実際には<strong>会社の利益は株主のもの</strong>です。非上場会社であれば社長が株を100%保有していることも多いため、結果的に社長が利益を受け取ります。しかし、上場会社の場合、株主が分散しているため、利益は株主全員に分配されます。</p>
                </div>

                <p className="mb-4"><strong>配当：今後生み出される利益</strong></p>
                <p className="mb-6">株を保有していれば、その会社が今後生み出す純利益を<span className="glossary-term" data-definition="企業が利益の一部を株主に分配するお金。年1〜2回支払われることが多いです。">配当</span>という形で受け取ることができます。株を保有し続ける限り、その会社が存在する限り、配当が出続けると考えることができます。</p>

                <p className="mb-2"><strong>株価とは何か？</strong></p>
                <p className="mb-6"><span className="glossary-term" data-definition="株式市場で取引される株式1株あたりの価格。需要と供給で決まります。">株価</span>とは、<strong>今後その会社が生み出す利益の現在価値</strong>です。今後生み出す利益が増えそうだと判断されれば株価は上がり、そうでない場合は株価は下がります。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">② どうやって儲けるのか？ ー 2つの方法</h3>
                <p className="mb-4">株の本質を理解したところで、次は「どうやって儲けるのか？」を学びましょう。</p>
                <p className="mb-6">
                  <strong>株式投資で利益を得る2つの方法：</strong><br/>
                  <strong>①キャピタルゲイン（株価の値上がり益）</strong> - 株を安く買って高く売ることで得られる利益。<br/>
                  <strong>②インカムゲイン（配当金）</strong> - 企業が利益の一部を株主に分配する配当金による利益。
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">③ なぜ株価は動くのか？ ー 市場との差</h3>
                <p className="mb-4">株価がどのように動くのかを理解することが、投資で成功する鍵です。<br/>ここが最も重要なポイントです。</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <span className="section-label label-essence">本質</span>
                  <h4 className="text-xl font-semibold mb-2 mt-2">成長が予想されていれば、すでに織り込み済み</h4>
                  <p className="mb-2">株価がどのように上がるのか？例えば、会社が成長したとしても、その成長が以前から予想されていたものであれば、<strong>それはすでに株価に織り込まれています</strong>。</p>
                  <p><strong>具体例：</strong>新型iPhoneの発表が決まっている場合、発表日にAppleの株価は上がるでしょうか？答えはNOです。なぜなら、新型iPhoneが出ることは誰もが知っているため、すでに株価に反映されているからです。</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">市場とのギャップこそが利益</h4>
                  <p className="mb-2">要するに、<strong>市場との差が重要</strong>です。</p>
                  <p className="mb-2">「この会社は伸びるから株価が上がります」というだけでは不十分です。</p>
                  <p className="mb-2"><strong>「この会社は市場がそこまで伸びるとは思っていないが、実際には伸びる」</strong></p>
                  <p className="mb-2">という市場とのギャップが、株価にすべて反映されてきます。</p>
                  <p><strong>具体例：</strong>みんなが「売上10%増」と予想している中、実際には「売上30%増」になる企業を見つける。このギャップが利益になります。</p>
                </div>

                <p className="mb-6"><strong>市場との差分をどう見つけるか？</strong><br/>
                市場との差分を見つけるためには、<strong>事業を他のどの投資家よりも完全に理解し、真相にたどり着くこと</strong>が必要です。表面的な部分を見るのではなく、本当に何が重要なのかを見極めることが非常に大切になります。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">株価予想の二つの手段</h3>
                <p className="mb-6">株価を予想する手法は大きく2つに分かれます。<strong>どちらも重要であり、ヘッジファンドは両方を見ています</strong>。</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card-with-icon card-icon-chart card-pulse relative bg-white border-2 border-gray-200 rounded-xl p-6 pt-8 hover:shadow-sm transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-3">①ファンダメンタルズ分析</h4>
                    <p className="mb-2"><strong>会社の未来を予想していくもの</strong></p>
                    <p className="mb-2">どのような未来を描くかがファンダメンタルズです。企業の財務状況、ビジネスモデル、市場環境などを分析して本質的な価値を見極める手法。</p>
                    <p className="mb-2"><strong>例：</strong>「この会社の新製品は市場を席巻するだろう」「この業界は今後10年伸びる」といった未来予測。</p>
                    <p><strong>T＋ではこちらを主に扱います。</strong></p>
                  </div>
                  <div className="card-with-icon card-icon-trend card-pulse relative bg-white border-2 border-gray-200 rounded-xl p-6 pt-8 hover:shadow-sm transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-3">②テクニカル分析</h4>
                    <p className="mb-2"><strong>数値的な確率論に基づくもの</strong></p>
                    <p className="mb-2">過去の株価や出来高の動きから将来の株価を予測する手法。チャートのパターンや指標を使って売買タイミングを判断する。</p>
                    <p className="mb-2"><strong>例：</strong>「株価が移動平均線を上抜けたから買い」「RSIが70を超えたから売り」といったテクニカル指標。</p>
                    <p><strong>短期トレード向き。</strong></p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1278.JPG', description: 'テクニカル分析の決定版', priority: 1 },
                    { image: '/images/books/book_new1.png', description: '株式投資の基礎', priority: 1 },
                    { image: '/images/books/IMG_1268.JPG', description: 'バフェットの投資哲学', priority: 2 },
                    { image: '/images/books/IMG_1270.JPG', description: '成長株投資の教科書', priority: 3 },
                    { image: '/images/books/book_new2.png', description: '応用編', priority: 1 },
                  ]} />

                  <VideoGrid videos={[
                    { id: '1h-oUrtFMeg', title: 'まだ投資を始めていない人、必ず見てください。', duration: '00:11:55' },
                    { id: '0rPL8ycM-Cg', title: '「市場価値」を具体的に説明できますか？', duration: '00:10:27' },
                    { id: 'Smb-AXFwAfY', title: 'PERとは？プロが使う株価を決める公式を解説します。', duration: '00:24:51' },
                    { id: 'B5Rg5sT_TmY', title: '損切り下手よ！早く株初心者から抜けだせ！！', duration: '00:16:34' },
                    { id: '0os5k6wBhIs', title: '好決算でも株価が下がる理由について解説します。PEGレシオでPERと成長性のコスパを見極めよう。', duration: '00:21:49' },
                    { id: 'nA3NVxG28vQ', title: '好決算でも株価が下がるワケ', duration: '00:31:27' },
                    { id: 'ydPKNjSldR4', title: 'グロース株とバリュー株どっちを買うべき？それぞれのメリット・デメリットを解説します。', duration: '00:15:08' },
                    { id: 'sb3v8Ytdmng', title: 'スマホで2億円を稼いだ天才ママに「チャート分析」を徹底解説してもらいました。', duration: '00:33:06' },
                    { id: 'pr8cPsYQLL4', title: '株式投資１年目に知っておきたかったこと', duration: '00:00:00' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="flow">
              <Accordion title="企業分析の流れ 読了時間 4分">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">なぜこの順番なのか？</h3>
                <p className="mb-6">企業分析には正しい順番があります。効率的に、かつ見逃しなく投資対象を見つけるためには、<strong>外から内へ、広く浅くから狭く深く</strong>という流れが重要です。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">STEP1: 外部環境の分析 ー 良い土壌を選ぶ</h3>
                <p className="mb-6"><strong>目的：</strong>順張りで良い環境を選ぶ<br/>
                市場全体が伸びていく中で、その市場で伸びていく企業は基本的にその流れに乗ることができます。そのため、基本的には<strong>良い環境の上場企業を選びたい</strong>です。市場規模、成長率、<span className="glossary-term" data-definition="業界の競争環境を5つの要素で分析するフレームワーク。新規参入の脅威、代替品の脅威、買い手の交渉力、売り手の交渉力、既存競合の強さを評価します。">5フォース</span>（競争環境）などを調査し、企業が成長できる土壌があるかを見極めます。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">STEP2: スクリーニング ー 悪い企業を省く</h3>
                <p className="mb-6"><strong>目的：</strong>財務指標で機械的に絞り込む<br/>
                4000社の中から良い企業を見つけたいのですが、逆に<strong>悪い企業をスクリーニングすることで省く</strong>ことができます。<span className="glossary-term" data-definition="大量のデータから特定の条件に合う対象を抽出すること。投資では財務指標や成長率などの条件で銘柄を絞り込みます。">スクリーニング</span>とは、様々な株価指標（PER、PBR、ROEなど）を見ていくことです。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">STEP3: 内部環境の分析 ー 企業の本質を見抜く</h3>
                <p className="mb-6"><strong>目的：</strong>ビジネスモデルと収益構造を深掘りする<br/>
                企業の<span className="glossary-term" data-definition="企業がどのように価値を生み出し、顧客に提供し、収益を得るかの仕組み。誰に・何を・どうやって売るかの全体像です。">ビジネスモデル</span>を見ていきます。上流、競合、下流といった形で、<strong>一体誰からお金をもらって誰に売っているのか</strong>というビジネスモデルをしっかり理解することが重要です。</p>

                <p className="mb-6"><strong>収益構造を深く分析する</strong><br/>
                次に、収益構造を深く分析します。例えば、この会社が成長していくとなったとしても、売上が成長していくのか、それとも売上原価が下がったり、販管費が下がっていくのか、という点です。純利益は株価に非常にダイレクトに影響しますが、その純利益が<strong>何がきっかけで、どの収益構造が変わって伸びるのか</strong>を見ていきたいです。</p>

                <p className="mb-6"><strong>良いマクロトレンドの中で一番良い企業を見つける</strong><br/>
                外部環境の分析をした後、その外部環境の中でもさらにどの企業が強いか、<strong>良いマクロトレンドの中でどの企業が一番良いのか</strong>を見ていきたいです。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">STEP4: イベントドリブン ー タイミングを見極める</h3>
                <p className="mb-6"><strong>目的：</strong>短期的な株価変動の機会を捉える<br/>
                企業の特定のイベントを契機とした投資機会を捉えます。<span className="glossary-term" data-definition="企業の合併（Merger）と買収（Acquisition）。企業が成長戦略として他社を統合・買収すること。">M&A</span>、TOB、MBO、粉飾決算の見極め、政治イベント、金利動向など、様々なイベントドリブンな要素を見ていくことが重要です。</p>
              </Accordion>
            </section>

            <section id="external">
              <Accordion title="企業分析詳細編①外部環境分析編 読了時間 8分">
                <p className="mb-6">市場全体の動きや業界構造を理解することで、企業を取り巻く外部環境を分析します。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">順張りの考え方</h3>
                  <p className="mb-2">投資には「順張り」と「逆張り」があります。</p>
                  <p className="mb-2"><strong>順張り：</strong>市場全体が伸びている中で、その流れに乗る企業に投資する<br/><strong>逆張り：</strong>市場が低迷している中で、割安な企業を見つけて投資する</p>
                  <p>T＋では基本的に<strong>順張り</strong>を推奨します。なぜなら、順張りで成功する確率が逆張りで成功する確率よりも圧倒的に高いからです。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">マクロトレンドの例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-300 smooth-border">
                    <h4 className="text-lg font-semibold mb-3">国策による成長</h4>
                    <p><strong>例：</strong>政府が「再生可能エネルギー推進」を掲げた場合、太陽光発電関連企業が一気に成長する可能性があります。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-300 smooth-border">
                    <h4 className="text-lg font-semibold mb-3">技術革新</h4>
                    <p><strong>例：</strong>AI技術の発展により、関連する半導体企業やクラウドサービス企業が成長しています。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-300 smooth-border">
                    <h4 className="text-lg font-semibold mb-3">人口動態の変化</h4>
                    <p><strong>例：</strong>高齢化社会が進むことで、介護関連企業や医療機器メーカーの需要が増加します。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-300 smooth-border">
                    <h4 className="text-lg font-semibold mb-3">グローバル化</h4>
                    <p><strong>例：</strong>新興国の経済成長により、そこに進出する企業や物流企業が恩恵を受けます。</p>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">5フォース分析</h3>
                <p className="mb-4">業界の競争環境を5つの要素で分析するフレームワーク。</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-500 p-4 rounded hover-lift smooth-border transition-all duration-300">
                    <h4 className="font-semibold mb-2">①新規参入の脅威</h4>
                    <p>新しい競合が市場に入りやすいか？参入障壁が高い業界は既存企業に有利。</p>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-4 rounded hover-lift smooth-border transition-all duration-300">
                    <h4 className="font-semibold mb-2">②代替品の脅威</h4>
                    <p>他の製品・サービスで代替できるか？代替品が少ないほど価格決定力が高い。</p>
                  </div>
                  <div className="bg-white border-l-4 border-yellow-500 p-4 rounded hover-lift smooth-border transition-all duration-300">
                    <h4 className="font-semibold mb-2">③買い手の交渉力</h4>
                    <p>顧客が価格交渉で有利な立場か？買い手が少数の大口顧客だと不利。</p>
                  </div>
                  <div className="bg-white border-l-4 border-orange-500 p-4 rounded hover-lift smooth-border transition-all duration-300">
                    <h4 className="font-semibold mb-2">④売り手の交渉力</h4>
                    <p>仕入先が価格を決める力を持っているか？原材料供給が限られていると不利。</p>
                  </div>
                  <div className="bg-white border-l-4 border-red-500 p-4 rounded hover-lift smooth-border transition-all duration-300">
                    <h4 className="font-semibold mb-2">⑤既存競合の強さ</h4>
                    <p>業界内の競争は激しいか？競合が多く価格競争が激しいと利益率が低下。</p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1276.JPG', description: '経済学の基礎を学ぶ', priority: 1 },
                    { image: '/images/books/IMG_1273.JPG', description: '金利と経済の関係', priority: 2 },
                    { image: '/images/books/IMG_1287.JPG', description: 'マクロ経済学の教科書①', priority: 3 },
                    { image: '/images/books/IMG_1288.JPG', description: 'マクロ経済学の教科書②', priority: 1 },
                    { image: '/images/books/IMG_1291.JPG', description: '業界の全体像を把握', priority: 2 },
                  ]} />

                  <VideoGrid videos={[
                    { id: 'jmlpCcqkh5A', title: '日銀: ハト派vsタカ派の意味を理解できない人はダメ投資家です！', duration: '00:16:23' },
                    { id: 'YrWrSXIqXW8', title: '【お金の勉強】イマサラ聞けない！日銀ってどういう機関？政策金利と物価の関係性を徹底解説', duration: '00:00:00' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="screening">
              <Accordion title="企業分析詳細編②スクリーニング編 読了時間 15分">
                <p className="mb-6">4000社の中から良い企業を見つけたいのですが、<br/>逆に<strong>悪い企業をスクリーニングすることで省く</strong>ことができます。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">財務指標によるスクリーニング</h3>
                <p className="mb-6">スクリーニングとは、様々な株価指標を使って機械的に銘柄を絞り込むことです。<br/>ここでは、最も重要な3つの指標「PER」「PBR」「ROE」について、YouTube文字起こしの内容を詳細に反映しながら解説します。</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6">
                  <span className="section-label label-essence">本質</span>
                  <h4 className="text-xl font-semibold mb-2">大前提：100%信じられる指標は存在しない</h4>
                  <p className="mb-2">これから解説するPER、PBR、ROEは、どれも非常に有用な指標です。しかし、<strong>100%信じられる指標は存在しません</strong>。</p>
                  <p className="mb-2">重要なのは、<strong>指標の構造を理解すること</strong>です。なぜその指標が高いのか？なぜ低いのか？その背景にある企業の実態を見抜く力が必要です。</p>
                  <p><strong>ケースバイケース</strong>であることを常に意識しましょう。指標は「道具」であり、使い方次第で見える景色が変わります。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">PER（株価収益率）：利益の何倍で買われているか？</h3>

                <h4 className="text-xl font-semibold mb-3">① PERとは何か？ ー トヨタと日産の比較で理解する</h4>
                <p className="mb-4"><strong>PER（Price Earnings Ratio：株価収益率）</strong>は、株価が1株あたり利益（EPS）の何倍になっているかを示す指標です。</p>

                <p className="mb-4">まず、こんな質問から始めましょう。<br/><strong>「トヨタの株が今日5,000円、日産の株が今日3,000円だとしたら、どっちの株価が割安か？」</strong></p>

                <p className="mb-6">多くの人は「日産の方が安いから割安では？」と考えます。しかし、これは<strong>大きな間違い</strong>です。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">株価だけでは割安・割高は決まらない</h4>
                  <p className="mb-2">株価が5,000円だろうが3,000円だろうが、それだけでは割安とも割高とも言えません。</p>
                  <p className="mb-2"><strong>例えば：</strong>牛肉がグラム3,000円、鶏肉がグラム100円だとして、どっちが割安か比べられますか？<br/>→ 比べられません。そもそも違うものだからです。</p>
                  <p>株価も同じ。トヨタの発行済み株数と日産の発行済み株数が違うため、株価だけでは比較できないのです。</p>
                </div>

                <p className="mb-2"><strong>時価総額で考える</strong></p>
                <p className="mb-2">会社の「大きさ」を測るには、<strong>時価総額</strong>を見る必要があります。<br/>時価総額 = 株価 × 発行済み株数</p>

                <p className="mb-4"><strong>例：</strong>トヨタの時価総額が50兆円、日産の時価総額が5兆円だとしたら、<br/>→ トヨタの方が10倍大きい会社です。</p>

                <p className="mb-6">そして、この時価総額と利益の関係を見るのが<strong>PER</strong>です。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PERの計算式</h4>
                  <p className="formula-inline mb-2">
                    <strong>PER = </strong>
                    <span className="fraction">
                      <span className="numerator">株価</span>
                      <span className="denominator">1株あたり利益（EPS）</span>
                    </span>
                  </p>
                  <p className="mb-2">または</p>
                  <p className="formula-inline mb-4">
                    <strong>PER = </strong>
                    <span className="fraction">
                      <span className="numerator">時価総額</span>
                      <span className="denominator">純利益</span>
                    </span>
                  </p>
                  <p><strong>例：</strong>トヨタの時価総額が50兆円、利益が5兆円だとすると、<br/>→ PER = 50兆 ÷ 5兆 = 10倍<br/>→ 「利益の10年分で買われている」という意味です。</p>
                </div>

                <p className="mb-2"><strong>PERの本質：投資回収年数</strong></p>
                <p className="mb-6">PER10倍とは、「今の利益水準が続けば、10年で投資を回収できる」という意味です。<br/>不動産投資に例えると、1,000万円のアパートを買って、年間家賃100万円（利回り10%）であれば、10年で回収できる。これがPER10倍です。</p>

                <p className="mb-2"><strong>トヨタと日産の比較（続き）</strong></p>
                <p className="mb-6">仮に、トヨタの時価総額50兆円、利益5兆円でPER10倍。<br/>日産の時価総額3兆円、利益1,000億円でPER30倍。<br/>→ この場合、<strong>トヨタの方が割安</strong>です。なぜなら、利益の10年分で買えるトヨタに対し、日産は利益の30年分を払う必要があるからです。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>PERの目安</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>10〜15倍：</strong>標準的な水準（日本企業の平均は15倍前後）</li>
                    <li><strong>10倍以下：</strong>割安または利益が持続不可能と見られている</li>
                    <li><strong>20倍以上：</strong>成長期待が高い、または割高</li>
                    <li><strong>100倍以上：</strong>超高成長期待、またはバブル</li>
                  </ul>
                  <p className="mt-3"><strong>重要：</strong>業界によって適正PERは大きく異なります。単純にPERが低いから買う、という判断は危険です。</p>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">② 株価 = EPS × PER：プロが使う公式</h4>
                <p className="mb-4">株価を決める要素を分解すると、次の式になります。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">株価 = EPS × PER</h4>
                  <p className="mb-2"><strong>EPS（1株あたり利益）</strong>と<strong>PER（倍率）</strong>の掛け算で株価が決まる。</p>
                  <p><strong>例：</strong>EPS250円、PER20倍なら、株価 = 250円 × 20 = 5,000円</p>
                </div>

                <p className="mb-2"><strong>株価が上がる2つの方法</strong></p>
                <ol className="list-decimal ml-6 mb-4 space-y-1">
                  <li><strong>EPS（利益）が増える</strong> → 会社の実力が上がる</li>
                  <li><strong>PER（倍率）が上がる</strong> → 市場の評価が上がる</li>
                </ol>

                <p className="mb-4">プロの投資家は、この2つを常に分解して考えます。<br/>「この銘柄が上がるとしたら、EPSが上がるからか？PERが上がるからか？」</p>

                <p className="mb-4"><strong>株価が上昇する時の最大の動力は、マルチプル（PER）の拡大</strong>です。EPSが爆発的に伸びる会社もありますが、マルチプルが上がることの方が大きいインパクトを持ちます。</p>

                <p className="mb-2"><strong>具体例：PERの拡大で株価が3倍になる</strong></p>
                <p className="mb-6">EPS100円、PER10倍の株（株価1,000円）があるとします。<br/>→ 3年後、EPSが140円に成長（年率12%成長）。<br/>→ 同時に、市場がこの会社を再評価し、PERが30倍に拡大。<br/>→ 株価 = 140円 × 30 = 4,200円（4倍以上）</p>

                <p className="mb-6">このように、EPSの成長だけでなく、<strong>PERが上がるかどうか</strong>が株価上昇の鍵を握ります。</p>

                <h4 className="text-xl font-semibold mb-3 mt-8">③ PEGレシオ：成長率とのバランスを見る</h4>
                <p className="mb-6">PERだけでは、成長企業を正しく評価できません。<br/>そこで登場するのが<strong>PEGレシオ</strong>です。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PEGレシオ = PER ÷ 利益成長率（%）</h4>
                  <p className="mb-2"><strong>目安：</strong></p>
                  <ul className="list-disc ml-6 space-y-1 mb-4">
                    <li><strong>1.0以下：</strong>割安（成長率に対してPERが低い）</li>
                    <li><strong>1.0〜2.0：</strong>適正水準</li>
                    <li><strong>2.0以上：</strong>割高（成長率に対してPERが高い）</li>
                  </ul>
                  <p><strong>例：</strong>PER50倍、利益成長率50%の企業 → PEGレシオ = 50 ÷ 50 = 1.0（適正）<br/>PER50倍、利益成長率20%の企業 → PEGレシオ = 50 ÷ 20 = 2.5（割高）</p>
                </div>

                <p className="mb-2"><strong>PEGレシオの使い方</strong></p>
                <p className="mb-6">例えば、弁護士ドットコムという会社がPER50倍だとします。<br/>これは一見割高に見えますが、利益成長率が50%なら、PEGレシオは1.0で適正です。<br/>しかし、利益成長率が20%しかないなら、PEGレシオは2.5で割高と判断されます。</p>

                <p className="mb-2"><strong>具体例：インフォリッチ</strong></p>
                <p className="mb-6">インフォリッチの場合、PER26.8倍。<br/>一方、利益成長率は100%以上で増益。<br/>→ PEGレシオ = 26.8 ÷ 100 = 0.27（超割安）<br/>→ この銘柄は、PERだけ見ると「普通」ですが、成長率を考慮すると「超割安」だと分かります。</p>

                <h4 className="text-xl font-semibold mb-3 mt-8">④ PERの落とし穴：高PERの罠と低PERの罠</h4>

                <p className="mb-2"><strong>高PER株の「がっかり売り」リスク</strong></p>
                <p className="mb-6">PER100倍の株は、「毎年100%成長する」という期待が織り込まれています。<br/>しかし、実際には50%しか成長しなかった場合、<strong>期待外れで売られる</strong>のです。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-4">PER50倍以上の株は、常に<strong>100点満点を取り続けないといけない優等生</strong>のようなものです。<br/>85点を取っただけで、期待を下回ったとして売られることがあります。</p>
                  <p>好決算なのに株価が下がる理由は、<strong>市場の期待値を下回ったから</strong>です。<br/>決算前に株価が上昇していた場合、それは期待が織り込まれた結果である可能性があります。</p>
                </div>

                <p className="mb-4"><strong>高PERが正当化されるケース</strong></p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">①超高成長企業</h4>
                    <p className="mb-2">利益が毎年2倍になる企業なら、PER100倍でも3年後には事後的にPER12.5倍になる。</p>
                    <p><strong>例：</strong>Amazon初期、Facebook上場直後、弁護士ドットコム</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">②ディフェンシブ銘柄</h4>
                    <p>景気に左右されず安定利益を出す企業（P&G、ユニ・チャームなど）は、リスクが低いためPERが高くても正当化される。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">③ネットワーク効果がある企業</h4>
                    <p>GoogleやFacebookのように、ユーザーが増えるほど価値が高まる企業は、将来の成長余地が大きいためPERが高くても許容される。</p>
                  </div>
                </div>

                <p className="mb-4"><strong>低PER株の罠：なぜPER5倍の株は危険なのか？</strong></p>
                <p className="mb-6">PER5倍は一見「超割安」に見えますが、実は<strong>市場が「この利益は続かない」と判断している</strong>証拠です。</p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">①利益が一時的</h4>
                    <p>不動産売却や政府補助金など、一過性の利益でPERが低く見えるだけ。翌年には元に戻る。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">②赤字スレスレ</h4>
                    <p className="mb-2">利益100万円の企業は、PERが数百倍になることもあり、指標として機能しない。</p>
                    <p><strong>例：</strong>スノーピークが直近で利益100万円しか出せなかった時、PERは無限大に近い数字になった。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">③衰退産業</h4>
                    <p className="mb-2">市場が縮小している業界は、利益があってもPERが低い。</p>
                    <p><strong>例：</strong>グリー、DeNAなどガラケー時代のゲーム会社は、PER10倍を切っていたが、スマホ時代に利益が激減した。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>業界ごとのPER水準の違い</strong></p>
                  <p className="mb-3">業界によって「適正PER」は大きく異なります。</p>
                  <ul className="list-disc ml-6 space-y-2 mb-4">
                    <li><strong>ディフェンシブ銘柄（食品、日用品）：</strong>PER15〜25倍 → 業績が安定しているため、投資家は高いPERを払っても安心して保有できる</li>
                    <li><strong>景気敏感株（自動車、鉄鋼、海運）：</strong>PER5〜10倍 → 業績が大きく変動するため、リスクを織り込んでPERが低い</li>
                    <li><strong>グロース株（IT、バイオ）：</strong>PER30〜100倍以上 → 高成長期待があるため、高PERが許容される</li>
                  </ul>
                  <p><strong>重要：</strong>業界平均と比較せずに、PERだけで割安・割高を判断してはいけません。</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-12">PBR（株価純資産倍率）：「財布の値段」理論</h3>

                <h4 className="text-xl font-semibold mb-3">① PBRとは何か？ ー 「8,000円の財布に1万円入っていた」</h4>
                <p className="mb-6"><strong>PBR（Price Book-value Ratio：株価純資産倍率）</strong>は、株価が1株あたり純資産（BPS）の何倍になっているかを示す指標です。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PBRの計算式</h4>
                  <p className="formula-inline mb-2">
                    <strong>PBR = </strong>
                    <span className="fraction">
                      <span className="numerator">株価</span>
                      <span className="denominator">1株あたり純資産（BPS）</span>
                    </span>
                  </p>
                  <p className="mb-2">または</p>
                  <p className="mb-4"><strong>PBR = 時価総額 ÷ 純資産</strong></p>
                  <p><strong>例：</strong>株価800円、BPS1,000円の場合、PBR = 800 ÷ 1,000 = 0.8倍</p>
                </div>

                <p className="mb-2"><strong>PBRの本質：「財布の値段」理論</strong></p>
                <p className="mb-6">PBRは「財布理論」で理解できます。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">8,000円の財布に1万円入っていた</h4>
                  <p className="mb-2">PBR0.8倍とは、「8,000円で売られている財布を買ったら、中に現金1万円入っていた」状態です。<br/>財布（会社）はどうでもいいから捨てて、中の1万円（純資産）をビッと取ってポイ。<br/>これで2,000円の利益が出ます。</p>
                  <p>これがPBR1倍割れの意味です。</p>
                </div>

                <p className="mb-2"><strong>札幌ビールの例</strong></p>
                <p className="mb-4">札幌ビールは、恵比寿ガーデンプレースなどの不動産を保有しています。<br/>帳簿上の純資産（簿価）は控えめに計上されていますが、実際の時価は4,000億円規模。<br/>しかし、札幌ビールの時価総額は1,000〜2,000億円程度。<br/>→ つまり、<strong>「会社を丸ごと買って、不動産を売れば儲かる」</strong>状態です。</p>

                <p className="mb-6">アクティビストファンドが目をつけて、「不動産を売って株主に配当しろ」とプレッシャーをかけています。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>PBRの目安</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>PBR1倍：</strong>株価 = 解散価値（会社を解散して資産を売却した場合の価値）</li>
                    <li><strong>PBR1倍以下：</strong>割安、または経営が評価されていない</li>
                    <li><strong>PBR1〜2倍：</strong>標準的な水準</li>
                    <li><strong>PBR3倍以上：</strong>高い成長性や収益性が評価されている</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">② 東証改革：PBR1倍割れ企業への圧力</h4>
                <p className="mb-6">2023年、東京証券取引所は<strong>「PBR1倍割れ企業に対し、改善計画を開示するよう要請」</strong>しました。<br/>これは、日本の株式市場にとって画期的な出来事です。</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PBR1倍割れが問題な理由</h4>
                  <p className="mb-2">PBR1倍割れとは、<strong>「経営陣がいない方が価値がある」</strong>と市場が判断している状態です。</p>
                  <p className="mb-3"><strong>例：</strong>純資産100億円の会社の時価総額が80億円の場合、<br/>→ 会社を解散して資産を売却すれば100億円になるのに、今の株価は80億円。<br/>→ つまり、経営陣の存在がマイナス20億円の価値しかない。</p>
                  <p>PBR1倍割れは、<strong>野球チームの監督が「うちのチーム弱くて応援できない」と言っているようなもの</strong>です。経営陣が自社の成長を信じていないことの表れとも言えます。</p>
                </div>

                <p className="mb-4"><strong>なぜ外資系ファンドや村上ファンドが騒いでいたのに、今まで変わらなかったのか？</strong></p>
                <p className="mb-4">日本企業は、株の持ち合いで「お互いに賛成票を入れ合う」文化がありました。<br/>外資系ファンドが5%の株を買って株主総会でワーワー言っても、残り95%が「まあまあ」と言って否決。<br/>→ 結果、何も変わらなかった。</p>

                <p className="mb-6">しかし、<strong>東証（お上）が言い出したことで、企業は一斉に動き始めました</strong>。<br/>日本企業はお上に弱いのです。</p>

                <p className="mb-4"><strong>PBRを上げる3つの方法</strong></p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">①ROEを上げる</h4>
                    <p>純資産を有効活用して利益を増やす。<br/>PBR = PER × ROE の関係があるため、ROEを上げればPBRも上がる。</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">②配当・自社株買い</h4>
                    <p>余剰資金を株主に還元することで、純資産を減らし、PBRを上げる。<br/>この春、日本企業は16兆円の配当を出す予定（10年前の2倍以上）。</p>
                  </div>
                  <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">③不要資産の売却</h4>
                    <p>持ち合い株式や不動産など、本業に不要な資産を売却し、株主に還元する。<br/><strong>例：</strong>東急電鉄のオリエンタルランド株売却</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">③ PBRの落とし穴：1倍割れ≠割安</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">PBR1倍割れでも割安とは限らない</h4>
                    <p className="mb-2"><strong>①簿価と時価の乖離：</strong>不動産や有価証券の簿価が、実際の時価より高い場合、見かけ上PBRが低く見えるだけ。</p>
                    <p className="mb-2"><strong>②低ROE企業：</strong>純資産はあるが、利益を生み出せない企業は、PBR1倍割れでも割安ではない。<br/>地銀の多くがこのパターン。</p>
                    <p><strong>③衰退産業：</strong>市場が縮小している業界では、資産があっても評価されない。</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">PBR高い ≠ 割高とは限らない</h4>
                    <p className="mb-2"><strong>①高ROE企業：</strong>少ない資本で大きな利益を生む企業（ソフトウェア、プラットフォーム企業など）は、PBR10倍でも割安なことがある。</p>
                    <p><strong>②無形資産：</strong>ブランド、技術、特許などはBSに計上されないため、PBRが高くなる。<br/><strong>例：</strong>AppleのブランドはBS上ゼロだが、実際には数兆円の価値がある。</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">④ PBR = PER × ROE：3兄弟の美しい関係</h4>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PBR = PER × ROE</h4>
                  <p className="mb-2">この式は、PBR、PER、ROEの3つが密接に関係していることを示しています。</p>
                  <p className="mb-3"><strong>例：</strong>PER20倍、ROE10%の企業 → PBR = 20 × 0.1 = 2倍</p>
                  <p className="mb-3"><strong>重要：</strong>PBRを上げたければ、ROEを上げるか、PERを上げる（市場の評価を高める）必要がある。</p>
                  <p>この3つの関係は、<strong>数学的に常に成り立つ</strong>美しい式です。<br/>PBRが低い会社は、PERが低いか、ROEが低いかのどちらか。<br/>経営的にPBRを上げるには、ROEを上げるしかありません。</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-12">ROE（自己資本利益率）：バフェットが最重視する指標</h3>

                <h4 className="text-xl font-semibold mb-3">① ROEとは何か？</h4>
                <p className="mb-6"><strong>ROE（Return On Equity：自己資本利益率）</strong>は、純利益が純資産（自己資本）の何%になっているかを示す指標です。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">レンタカー会社の例</h4>
                  <p className="mb-2"><strong>資本金500万円</strong>でレンタカー会社を立ち上げました。<br/>政策金融公庫から<strong>500万円を借金</strong>して、合計1,000万円で<strong>レンタカー5台</strong>（1台200万円）を購入。</p>
                  <p className="mb-3">1年後、<strong>純利益50万円</strong>を出しました。</p>
                  <p className="mb-3"><strong>ROE = 純利益 ÷ 自己資本 = 50万円 ÷ 500万円 = 10%</strong></p>
                  <p>つまり、<strong>株主が出した500万円を使って、年間10%のリターンを生み出した</strong>ということです。</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">ROEの計算式</h4>
                  <p className="mb-4"><strong>ROE = 純利益 ÷ 純資産（自己資本）</strong></p>
                  <p><strong>例：</strong>純利益50万円、純資産500万円の場合、ROE = 50 ÷ 500 = 10%</p>
                </div>

                <p className="mb-2"><strong>ROEの本質：投資効率</strong></p>
                <p className="mb-6">ROE10%とは、「株主が出資した資本を使って、年間10%のリターンを生み出している」という意味です。<br/>より少ない資本でより多くの利益を生む企業ほど、ROEが高くなります。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>なぜROE8%が基準なのか？</strong></p>
                  <p className="mb-3">S&P500のインデックスファンドに投資すれば、平均年率約8%のリターンが得られます。<br/>→ つまり、<strong>ROE8%未満の企業は、インデックスファンド以下のリターン</strong>です。<br/>→ わざわざ個別株のリスクを取る意味がありません。</p>
                  <p><strong>ROE8%の企業が、ずっとROE8%のままなら、それは債券や不動産と変わりません。<br/>株式投資のリスクを取っているのに、ROEがインデックス以下なら投資妙味がないと言えます。</strong></p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>ROEの目安</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>8%以上：</strong>優良企業（S&P500の平均リターンが約8%のため、これを上回る必要がある）</li>
                    <li><strong>10%以上：</strong>非常に優良（日本企業の平均は8%前後）</li>
                    <li><strong>15%以上：</strong>超優良（バフェットの投資基準）</li>
                    <li><strong>30%以上：</strong>異常値（ZOZOのROE60%など、特殊なビジネスモデル）</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold mb-3 mt-8">② ROEの分解：デュポン分析で構造を理解する</h4>
                <p className="mb-6">ROEは以下の3つの要素に分解できます。これを「デュポン分析」と呼びます。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="formula-inline mb-4">
                    <strong>ROE = </strong>
                    <span className="fraction">
                      <span className="numerator">純利益</span>
                      <span className="denominator">自己資本</span>
                    </span>
                  </p>

                  <p className="text-center text-xl mb-4">↓</p>

                  <p className="formula-inline">
                    <strong>ROE = </strong>
                    <span className="fraction">
                      <span className="numerator">純利益</span>
                      <span className="denominator">売上高</span>
                    </span>
                    {" × "}
                    <span className="fraction">
                      <span className="numerator">売上高</span>
                      <span className="denominator">総資産</span>
                    </span>
                    {" × "}
                    <span className="fraction">
                      <span className="numerator">総資産</span>
                      <span className="denominator">自己資本</span>
                    </span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6">
                  <span className="section-label label-essence">本質</span>
                  <h4 className="text-xl font-semibold mb-2">この式は何を意味するのか？</h4>
                  <p className="mb-3">分子と分母で「売上高」と「総資産」が約分されるため、最終的に「純利益 ÷ 自己資本」に戻ります。</p>

                  <p className="mb-2"><strong>計算例：</strong></p>
                  <ul className="list-disc ml-6 space-y-1 mb-4">
                    <li>純利益：100億円</li>
                    <li>売上高：1000億円</li>
                    <li>総資産：2000億円</li>
                    <li>自己資本：500億円</li>
                  </ul>

                  <p className="mb-2"><strong>①売上高純利益率 = 100 ÷ 1000 = 10%</strong><br/>
                  売上に対してどれだけ利益を出せるか（収益性）</p>

                  <p className="mb-2"><strong>②総資産回転率 = 1000 ÷ 2000 = 0.5回</strong><br/>
                  資産をどれだけ効率的に使って売上を生んでいるか（効率性）</p>

                  <p className="mb-2"><strong>③財務レバレッジ = 2000 ÷ 500 = 4倍</strong><br/>
                  自己資本に対してどれだけ総資産（借入含む）を使っているか（安全性）</p>

                  <p className="mb-3"><strong>ROE = 10% × 0.5 × 4 = 20%</strong></p>

                  <p>直接計算：ROE = 100 ÷ 500 = 20%（一致）</p>
                </div>

                <p className="mb-6"><strong>デュポン分析の意義</strong><br/>
                ROEが高い企業は、①利益率が高いか、②資産効率が良いか、③借入を活用しているか、のいずれか（または複数）が優れています。この分解により、企業の強みがどこにあるのかを見極められます。</p>

                <h4 className="text-xl font-semibold mb-3 mt-8">③ ROEの落とし穴：借金で膨らませたROE</h4>

                <p className="mb-4"><strong>財務レバレッジの罠</strong></p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">借金を増やせばROEは上がる</h4>
                  <p className="mb-2">レンタカー会社が、資本金100万円、借金900万円でスタートしたとします。<br/>同じく純利益50万円を出した場合、<br/><strong>ROE = 50万円 ÷ 100万円 = 50%</strong></p>
                  <p className="mb-2">一見すごいですが、実際は借金に依存しているだけ。<br/>景気悪化時に返済できなくなるリスクが高い。</p>
                  <p><strong>対策：</strong>自己資本比率もチェックする。40%以上なら安全。</p>
                </div>

                <p className="mb-4"><strong>自社株買いの罠</strong></p>
                <p className="mb-6">自社株買いで自己資本を減らせば、ROEは機械的に上がります。しかし、これは本質的な成長ではありません。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>例：</strong>純利益50万円、純資産500万円（ROE10%）<br/>→ 自社株買いで純資産を250万円に削減<br/>→ ROE = 50 ÷ 250 = 20%</p>
                  <p><strong>対策：</strong>ROEが上がった理由を確認する。利益が増えたのか、資本が減っただけなのか。</p>
                </div>

                <p className="mb-6">ROEが急に上がった会社を見たら、<strong>「借金を増やしたのか？自社株買いをしたのか？それとも本当に利益が増えたのか？」</strong>を必ずチェックする必要があります。<br/>財務レバレッジやかさ上げでROEを高めても、リスクが高まるだけです。</p>

                <h4 className="text-xl font-semibold mb-3 mt-8">④ ROEの具体例：ZOZOとセブンイレブン</h4>

                <p className="mb-4"><strong>ケース1：ZOZO（ROE60%）</strong></p>
                <p className="mb-6">ZOZOは、ROE60%という異常値を達成しています。なぜか？</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">ZOZOのビジネスモデル：在庫を持たない</h4>
                  <p className="mb-2">ZOZOは、ブランドから商品を<strong>預かって販売</strong>する「コンシグメント型」ビジネスモデル。<br/>→ 在庫リスクがなく、少ない資本で大きな利益を生む。<br/>→ 結果、ROE60%という異常値を達成。</p>
                  <p>外部から資金を調達しないで済むビジネスモデルを構築することで、<strong>自己資本が膨らまず、ROEが異常に高くなる</strong>という好循環を生み出しています。</p>
                </div>

                <p className="mb-4"><strong>ケース2：セブンイレブンのFCモデル</strong></p>
                <p className="mb-6">セブンイレブンは、フランチャイズチェーン（FC）モデルでROEを高めています。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>FCモデルの仕組み</strong></p>
                  <p className="mb-3">店舗を自分で持たず、FC加盟店に運営を任せる。<br/>→ 店舗の資産はBS（貸借対照表）に乗らない。<br/>→ 少ない資本で、大きな利益を得られる。</p>
                  <p>一方、店長は「自分の店」だと思って一生懸命掃除をする。<br/>→ 直営店より、FCの方が効率が良い。</p>
                </div>

                <p className="mb-2"><strong>ケース3：地銀（ROE2〜3%）</strong></p>
                <p className="mb-4">地方銀行は、低成長・過当競争で、ROEが非常に低い。<br/>→ 市場から「資本を有効活用できていない」と評価される。<br/>→ PBR1倍割れの企業が多い。</p>

                <p className="mb-6">地銀の場合、儲からないビジネスでも撤退できない場合があります。<br/>地域に根ざしたサービスを提供する責任がある一方で、それが株主にとっての価値向上と一致しないこともあります。</p>

                <h3 className="text-2xl font-semibold mb-4 mt-12">まとめ：指標は「道具」であり、100%信じてはいけない</h3>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">PBR = PER × ROE</h4>
                  <p className="mb-2">この式は、3つの指標が密接に関係していることを示しています。</p>
                  <p className="mb-2"><strong>良い企業の条件：</strong></p>
                  <ul className="list-disc ml-6 space-y-1 mb-4">
                    <li>PER：適正水準（15〜25倍）で、成長性が評価されている</li>
                    <li>PBR：1倍以上で、経営が評価されている</li>
                    <li>ROE：8%以上で、資本を効率的に使っている</li>
                  </ul>
                  <p><strong>重要：</strong>指標は「道具」であり、使い方次第。複数指標を組み合わせて総合的に判断することが重要です。</p>
                </div>

                <p className="mb-6">指標は「道具」です。100%信じられる指標は存在しません。<br/>PERが低いから買う、というだけでは勝てません。<br/>重要なのは、<strong>指標の構造を理解し、なぜその指標が高いのか・低いのかを見抜く力</strong>です。<br/>ケースバイケースで判断する。それが株式投資の本質です。</p>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1275.JPG', description: '四季報の読み方入門', priority: 2 },
                    { image: '/images/books/IMG_1281.JPG', description: '最新の企業情報', priority: 1 },
                    { image: '/images/books/IMG_1290.JPG', description: 'プロが選ぶ注目銘柄', priority: 2 },
                  ]} />

                  <VideoGrid videos={[
                    { id: '9CoLaONOEyE', title: '【東証が注意】PBR低い株は、なぜダメか？理由を解説します。', duration: '00:29:14' },
                    { id: 'TkQPQzEhP1g', title: '超絶わかる！ROEの解説です', duration: '00:44:11' },
                    { id: 'aV9cGgu6W2g', title: '【株仙人の道】資産250億円の片山晃が教えるPER活用の極意', duration: '00:45:51' },
                    { id: 'duYE2o6ZJMo', title: '株価が上がらない！信用買い残が原因かも【信用買い残・信用売り残とは？影響を解説】', duration: '00:00:00' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="internal">
              <Accordion title="企業分析詳細編③内部環境分析編 読了時間 10分" defaultOpen={false}>
                <p className="mb-6">企業のビジネスモデル、競争優位性、収益構造を深く分析します。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3">財務3表の基本：PL・BS・CSとは？</h3>
                  <p className="mb-2"><strong>そもそも財務諸表って何？</strong></p>
                  <p className="mb-3">財務諸表とは、企業の経営状態を数字で表した報告書です。<strong>上場企業はすべて財務諸表を公開する義務</strong>があります。</p>
                  <p className="mb-3"><strong>なぜ公開するのか？</strong><br/>株主や投資家を守るためです。企業がどれだけ儲けているのか、財務状況は健全か、お金の流れはどうかを透明にすることで、投資家が正しい判断をできるようにしています。<br/>上場していない企業は公開義務がありませんが、上場企業は四半期ごとに必ず公開します。</p>
                  <p className="mb-2">企業の実態を理解するには、3つの財務諸表を読む必要があります。</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4">
                    <li><strong>PL（損益計算書）</strong>：1年間でいくら儲けたか？稼ぐ力を見る</li>
                    <li><strong>BS（貸借対照表）</strong>：今どれだけの資産・負債があるか？財務の健全性を見る</li>
                    <li><strong>CS（キャッシュフロー計算書）</strong>：実際にお金が増えたか減ったか？お金の流れを見る</li>
                  </ul>
                  <p><strong>重要：</strong>この3つは独立しているのではなく、<strong>繋がっています</strong>。<br/>PLで利益が出れば、BSの純資産が増える。<br/>PLで利益が出ても、CSで営業CFがマイナスなら「儲かっているのにお金がない」状態。<br/>財務3表を一体で見ることで、企業の本当の姿が見えてきます。</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6">
                  <span className="section-label label-essence">本質</span>
                  <h3 className="text-xl font-semibold mb-2">ビジネスモデルの理解：誰からお金をもらっているのか？</h3>
                  <p className="mb-2">ビジネスモデルとは、<strong>「誰に・何を・どうやって売るか」</strong>の全体像です。</p>
                  <p>上流（仕入先）→ 自社 → 下流（顧客）という流れで理解します。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">ビジネスモデルの具体例</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">トヨタ自動車</h4>
                    <p className="mb-2"><strong>上流：</strong>部品メーカー（デンソー、アイシンなど）<br/><strong>自社：</strong>自動車の組み立て<br/><strong>下流：</strong>ディーラー経由で一般消費者</p>
                    <p><strong>儲けのポイント：</strong>大量生産によるコスト削減、ブランド力</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">Amazon</h4>
                    <p className="mb-2"><strong>上流：</strong>出品者（個人・企業）<br/><strong>自社：</strong>ECプラットフォーム<br/><strong>下流：</strong>一般消費者</p>
                    <p><strong>儲けのポイント：</strong>手数料収入、物流インフラ、データ活用</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">Google</h4>
                    <p className="mb-2"><strong>上流：</strong>広告主（企業）<br/><strong>自社：</strong>検索エンジン・広告プラットフォーム<br/><strong>下流：</strong>一般ユーザー（無料）</p>
                    <p><strong>儲けのポイント：</strong>広告収入、ユーザーデータ</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-6">
                  <span className="section-label label-essence">本質</span>
                  <h3 className="text-xl font-semibold mb-2">収益構造の深掘り：どこで儲けているのか？（PL分析）</h3>
                  <p>売上が伸びているだけでは不十分です。<strong>どの収益構造が変わって純利益が伸びるのか</strong>を見極める必要があります。</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>成長の質を見分ける：一口に「成長」と言っても質が違う</strong></p>
                  <p className="mb-3">企業が成長する方法は大きく分けて3つあります。そして、<strong>成長の質には大きな差があります</strong>。</p>
                  <ul className="list-disc ml-6 space-y-2 mb-4">
                    <li><strong>①売上が伸びる型</strong>：市場拡大、新製品ヒット、シェア拡大。<br/>→ 成長は早いが、競合に追随されやすい。</li>
                    <li><strong>②原価が下がる型</strong>：量産効果、内製化、仕入れ交渉力の向上。<br/>→ 売上が変わらなくても利益率が大幅改善。持続性が高い。</li>
                    <li><strong>③販管費が下がる型</strong>：広告費削減、効率化、固定費削減。<br/>→ 売上が変わらなくても営業利益が大幅改善。</li>
                  </ul>
                  <p><strong>質の良い成長</strong>：売上増加と原価削減が同時に起こり、限界利益率が高い状態。<br/>こういう企業は、売上が2倍になると利益が3倍、4倍になることもある。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">収益構造の改善パターン</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">①売上が伸びる</h4>
                    <p className="mb-2"><strong>パターンA：数量増加</strong><br/>新製品のヒット、市場拡大、シェア拡大などで販売数量が伸びる。</p>
                    <p className="mb-2"><strong>パターンB：値上げ（価格転嫁）</strong><br/>製品価格を引き上げることで、販売数量が変わらなくても売上が伸びる。ブランド力や独占的地位がある企業ほど値上げしやすい。</p>
                    <p><strong>注意：</strong>売上が伸びても原価率が上がれば利益は増えない。値上げは数量増加より利益率改善効果が高い。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">②売上原価が下がる</h4>
                    <p className="mb-2"><strong>パターンA：内部要因</strong><br/>量産効果、内製化、仕入れ交渉力の向上、生産効率化などで自社努力によりコストが下がる。</p>
                    <p className="mb-2"><strong>パターンB：原材料価格下落</strong><br/>石油、鉄鉱石、小麦などの原材料市況が下落することで、仕入れコストが下がる。外部環境の恩恵を受ける形で利益率が改善する。</p>
                    <p><strong>効果：</strong>売上が変わらなくても利益率が大幅に改善する。原材料価格下落は一時的だが、内製化などの構造改善は持続性が高い。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">③販管費が下がる</h4>
                    <p className="mb-4">広告費削減、効率化、固定費の削減などで販管費が下がる。</p>
                    <p><strong>効果：</strong>売上が変わらなくても営業利益が大幅に改善する。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>限界利益率とは？</strong></p>
                  <p className="mb-3"><strong>限界利益率 = (売上 - 変動費) ÷ 売上</strong></p>
                  <p>限界利益率が高いほど、売上が伸びたときに利益が急激に増えます。ソフトウェア業界は限界利益率が非常に高く（80%以上）、売上が2倍になれば利益は3倍、4倍になることもあります。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">競争優位性の源泉</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">コスト優位性</h4>
                    <p>他社よりも安く作れる。量産効果、内製化、技術力など。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">差別化</h4>
                    <p>他社にはない独自の価値。ブランド力、技術力、ネットワーク効果など。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">ニッチ戦略</h4>
                    <p>特定の市場に集中する。大手が参入しにくい領域で独占する。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">健全性を見る：BS・CS分析</h3>
                  <p className="mb-3">PLで稼ぐ力を見たら、次は<strong>BS（貸借対照表）</strong>と<strong>CS（キャッシュフロー計算書）</strong>で健全性を見ます。</p>
                  <p><strong>どれだけ儲かっていても、倒産する企業はあります。</strong><br/>借金が多すぎたり、お金が回らなくなったり、投資しすぎたり。<br/>BS・CSを見ることで、企業の「安全性」と「持続性」を判断できます。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">BS・CSで見るべき指標</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">自己資本比率（BS）</h4>
                    <p className="mb-2"><strong>自己資本 ÷ 総資産</strong></p>
                    <p className="mb-2">企業の財務安全性を示す指標。<br/>40%以上：安全<br/>20%以下：倒産リスク高</p>
                    <p><strong>意味：</strong>借金に頼らず、自分の資本でどれだけ事業を回しているか。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">流動比率（BS）</h4>
                    <p className="mb-2"><strong>流動資産 ÷ 流動負債</strong></p>
                    <p className="mb-2">短期的な支払能力を示す指標。<br/>150%以上：安全<br/>100%以下：資金繰りリスク</p>
                    <p><strong>意味：</strong>1年以内に現金化できる資産が、1年以内に支払う負債を上回っているか。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">営業CF（CS）</h4>
                    <p className="mb-2">本業でどれだけ現金を稼いだか。</p>
                    <p className="mb-2">プラス：本業で現金を稼いでいる<br/>マイナス：本業で現金が流出している</p>
                    <p><strong>重要：</strong>PLで黒字でも営業CFがマイナスなら危険。売掛金の回収遅延や在庫増加が原因。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">フリーCF（CS）</h4>
                    <p className="mb-2"><strong>営業CF - 投資CF</strong></p>
                    <p className="mb-2">企業が自由に使える現金。</p>
                    <p><strong>意味：</strong>フリーCFがプラスなら、配当や自社株買い、借金返済に使える。マイナスなら借入や増資が必要。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6 mt-8">
                  <p className="mb-2"><strong>財務3表が繋がっている例</strong></p>
                  <p className="mb-3">例：ある企業が1億円の利益を出した（PL）。</p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>PLの純利益1億円が、BSの純資産に加算される。</li>
                    <li>しかし、売掛金が増えて現金化されていないと、CSの営業CFはマイナスになることもある。</li>
                    <li>つまり、「利益は出ているが、手元に現金がない」状態。</li>
                  </ul>
                  <p>このように、3つの財務諸表を一体で見ることで、企業の本当の姿が見えてきます。</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <span className="section-label label-column">補足</span>
                  <h3 className="text-xl font-semibold mb-3 mt-2">減価償却：3表の繋がりを最もよく示す概念</h3>
                  <p className="mb-3"><strong>減価償却とは？</strong><br/>建物や機械などの固定資産は、時間とともに価値が減っていきます。<br/>その価値の減少分を、毎年費用として計上する会計処理が「減価償却」です。</p>
                  <p className="mb-3"><strong>例：</strong>1億円の機械を買って、10年で償却する場合、<br/>毎年1000万円ずつ減価償却費として費用計上します。</p>
                  <p className="mb-2 mt-4"><strong>なぜ一気に費用計上しないのか？</strong></p>
                  <p className="mb-3">もし1億円の機械を買った年に全額費用計上すると、その年だけPLが大赤字になり、翌年以降は費用ゼロになります。<br/>しかし実際には、その機械は10年間使い続けて利益を生み出します。</p>
                  <p className="mb-2"><strong>会計の基本原則：費用と収益の対応</strong></p>
                  <p className="mb-3">機械が10年間で生み出す収益に対応させて、費用も10年間で分散させる。<br/>これにより、<strong>毎年のPLが企業の実態を正しく反映</strong>します。<br/>もし一気に費用計上してしまうと、投資家が企業の本当の収益力を判断できなくなるため、減価償却という仕組みが存在します。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">減価償却が財務3表に与える影響</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">PL（損益計算書）</h4>
                    <p className="mb-2"><strong>費用として計上される</strong></p>
                    <p className="mb-2">減価償却費1000万円が費用として引かれ、営業利益が減る。<br/>しかし、<strong>実際にお金が出ていくわけではない</strong>。<br/>（お金が出たのは機械を買った時）</p>
                  </div>

                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">BS（貸借対照表）</h4>
                    <p className="mb-2"><strong>固定資産の簿価が減少する</strong></p>
                    <p className="mb-2">機械の帳簿上の価値が毎年1000万円ずつ減っていく。<br/>1年目：9000万円<br/>2年目：8000万円<br/>10年目：0円</p>
                  </div>

                  <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">CS（キャッシュフロー計算書）</h4>
                    <p className="mb-2"><strong>営業CFに戻される</strong></p>
                    <p className="mb-2">減価償却費は「費用だが現金が出ていない」ので、営業CFの計算では利益に加算し直す。<br/><strong>純利益 + 減価償却費 = 営業CF（簡易版）</strong></p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>なぜ減価償却を理解すべきなのか？</strong></p>
                  <p className="mb-3">減価償却費が大きい企業（製造業、インフラ企業など）は、<strong>PLの利益が少なく見えても、実際のキャッシュ創出力は高い</strong>ことがあります。</p>
                  <p className="mb-2"><strong>具体例：</strong></p>
                  <ul className="list-disc pl-6 mb-3 space-y-1">
                    <li>PL：営業利益1億円、減価償却費5000万円</li>
                    <li>CS：営業CF = 1億円 + 5000万円 = 1億5000万円</li>
                  </ul>
                  <p className="mb-3">→ 利益は1億円だが、<strong>実際に手元に残るお金は1億5000万円</strong>。<br/>この差を理解していないと、「利益が少ないから割安」と勘違いすることがある。</p>
                  <p><strong>逆に：</strong>減価償却費が少ないソフトウェア企業などは、PLの利益とCSの営業CFがほぼ一致します。</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3">IR取材：企業の生の声を聞く</h3>
                  <p className="mb-3">財務諸表だけでは見えない企業の戦略や経営者の考えを、IR取材を通じて直接聞くことができます。</p>
                  <p className="mb-3">IR担当者や経営者と対話することで、<strong>決算書には載っていない「なぜ？」</strong>を深掘りできます。</p>
                  <p className="mb-2"><strong>参考資料：</strong></p>
                  <p><a href="https://docs.google.com/presentation/d/1-ZZLOIIIFzPXjef9XRPO4dRPoHXyKlQWWEjRriNk2B0/edit?slide=id.g1f04479e724_0_0#slide=id.g1f04479e724_0_0" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">IR取材の手法と質問例（Googleスライド）</a></p>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/zaimu3.png', description: '財務諸表の基礎', priority: 3 },
                    { image: '/images/books/IMG_1269.JPG', description: '決算書の読み方', priority: 2 },
                    { image: '/images/books/IMG_1271.JPG', description: '実践的な分析手法', priority: 1 },
                    { image: '/images/books/IMG_1272.JPG', description: '業界別の分析', priority: 2 },
                    { image: '/images/books/IMG_1274.JPG', description: 'ビジネスモデル理解', priority: 3 },
                    { image: '/images/books/IMG_1289.JPG', description: '収益構造の分析', priority: 3 },
                  ]} />

                  <VideoGrid videos={[
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
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="event-driven">
              <Accordion title="企業分析詳細編④イベントドリブン編 読了時間 6分" defaultOpen={false}>
                <p className="mb-6">企業の特定のイベントを契機とした投資機会を捉える手法です。</p>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3">イベントドリブンとは？</h3>
                  <p className="mb-2">企業に起こる特定のイベントをきっかけに、短期的な株価変動を狙う投資手法です。</p>
                  <p><strong>ファンダメンタルズ分析</strong>が「長期的な企業価値」を見るのに対し、<br/><strong>イベントドリブン</strong>は「短期的な株価変動」を狙います。</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">主なイベントの種類</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">M&A（合併・買収）</h4>
                    <p className="mb-2">企業が他社を買収すると、買収される側の株価は急騰することが多い。買収する側の株価は下がることも。</p>
                    <p><strong>例：</strong>A社がB社を買収すると発表。B社の株価は買収価格に向かって上昇する。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">TOB（株式公開買付）</h4>
                    <p className="mb-2">特定の価格で株を買い取るオファー。TOB価格は通常、市場価格より高く設定される。</p>
                    <p><strong>例：</strong>1株1000円の株に対し、1株1200円でTOBが発表されると、株価は1200円に向かって上昇。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">MBO（経営陣による買収）</h4>
                    <p className="mb-2">経営陣が自社の株を買い取って非上場化する。株主にプレミアムが支払われる。</p>
                    <p><strong>例：</strong>創業者が「会社を非上場にしたい」と考え、株主から株を買い取る。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">株式分割</h4>
                    <p className="mb-2">1株を複数株に分割することで、株価が下がり流動性が向上。個人投資家が買いやすくなる。</p>
                    <p><strong>例：</strong>1株10,000円の株を1:10に分割すると、1株1,000円になり買いやすくなる。分割発表後に株価が上昇することも。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">増配・減配</h4>
                    <p className="mb-2">配当金の増額は好材料、減額は悪材料として株価に影響する。</p>
                    <p><strong>例：</strong>配当を年間100円から150円に増やすと発表すると、配当目当ての投資家が買いを入れ株価が上昇。逆に減配発表は売りを誘う。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">指数組入</h4>
                    <p className="mb-2">日経平均やTOPIXなどの指数に新たに組み入れられると、インデックスファンドの買いが入り株価が上昇。</p>
                    <p><strong>例：</strong>東証プライム市場に昇格した企業がTOPIXに組み入れられると、機械的な買いが発生する。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">親子上場解消</h4>
                    <p className="mb-2">親会社が子会社株を完全取得して非上場化。子会社株主にプレミアムが支払われる。</p>
                    <p><strong>例：</strong>トヨタが子会社のダイハツを完全子会社化すると発表。ダイハツ株主には市場価格より高い価格で株を買い取る提案がなされる。</p>
                  </div>

                  <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow hover:shadow-sm transition-all">
                    <h4 className="text-lg font-semibold mb-2">株主提案</h4>
                    <p className="mb-2">株主が経営陣に対して提案を行う。配当増額や自社株買い、経営陣の交代などが含まれる。</p>
                    <p><strong>例：</strong>アクティビスト（物言う株主）が「配当性向を50%に引き上げよ」と提案し、実現すれば株価が上昇する。</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>粉飾決算の見極め方</strong></p>
                  <p className="mb-3">粉飾決算（会計不正）を見抜くことも重要なスキルです。以下のサインに注意：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>売上が急増しているのに、キャッシュフローが増えていない</li>
                    <li>売掛金や在庫が異常に増えている</li>
                    <li>営業キャッシュフローがマイナスなのに、利益は黒字</li>
                    <li>監査法人が交代している</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-3">イベントドリブンの活用法</h3>
                  <p className="mb-2">イベントドリブンは短期トレード向きですが、<strong>ファンダメンタルズ分析と組み合わせる</strong>ことで威力を発揮します。</p>
                  <p><strong>例：</strong>良い企業を見つけた後、決算発表のタイミングで買うことで、より高いリターンを狙えます。</p>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1279.JPG', description: '粉飾決算の実例', priority: 1 },
                    { image: '/images/books/IMG_1286.JPG', description: '企業金融の基礎', priority: 1 },
                  ]} />

                  <VideoGrid videos={[
                    { id: 'h-vnnOnSpU4', title: '自社株買いが長期で株価を上げる理由を解説します。', duration: '00:27:21' },
                    { id: 'hP586FoAp8s', title: 'アクティビストに狙われる銘柄の特徴を「買収防衛のプロ」に教えて貰いました。', duration: '00:23:00' },
                    { id: 'Q5Y9OBIFNGM', title: '【クソ粉飾上場ゴール「オルツ」発覚記念】そもそも「良い上場」とは何か、説明できますか？', duration: '00:19:54' },
                    { id: '_j04D4zhYYk', title: 'オリオンビールIPOの闇を暴く！初値が爆上がりするのは良いことか？', duration: '00:23:36' },
                    { id: 'inp-bEFX4Ks', title: '100%外す最強の「逆神」投資家！岐阜さん登場で株クラについて激論しました。', duration: '00:37:52' },
                    { id: 'yL2qE8bpqUY', title: 'Kaihou井村氏の「和製バークシャー宣言」で分かってない奴が多すぎる。', duration: '00:40:13' },
                    { id: 'DB2m2DxYeys', title: '【株で大損】危険すぎる「仕手株」とは？【株初心者講座】', duration: '00:00:00' },
                    { id: '084JsBANg9k', title: '【不正会計】オルツの売上水増し計上がいくらなんでもヤバすぎる。不正会計の全容と教訓を徹底解説！', duration: '00:00:00' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="insights">
              <Accordion title="まとめ：19の隠れたインサイト 読了時間 5分" defaultOpen={false}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">外部環境×内部環境の統合フレームワーク</h3>
                  <p className="mb-2">これまで学んだ「外部環境分析（STEP1）」と「内部環境分析（STEP3）」を統合し、企業の成長パターンを19種類に分類したフレームワークです。</p>
                  <p className="mb-2">このフレームワークを使うことで、<strong>「隠れたインサイト」＝まだ市場が気づいていない企業の本当の強み</strong>を体系的に見つけることができます。</p>
                  <p><strong>横軸：</strong>外部環境・ビジネスモデル・経営資源<br/><strong>縦軸：</strong>市場拡大・シェア拡大・利益率向上</p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">「隠れたインサイト」を知り、いい銘柄の見逃しを防ぐ</h3>
                <p className="mb-6">「隠れたインサイト」とは、まだ多くの人が知らないその会社の本当の強みのこと。<br/>「実は○○」と説明できるストーリーです。</p>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  <span
                    className="inline-block text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mr-2"
                    style={{
                      animation: 'countUp 2s ease-out forwards'
                    }}
                  >
                    19
                  </span>
                  <span>の「隠れたインサイト」マトリックス</span>
                </h3>
                <p className="mb-6">利益成長（市場拡大・シェア拡大・利益率向上）と、<br/>分析の切り口（外部環境・ビジネスモデル・経営資源）を組み合わせた<strong className="text-xl text-blue-600">19</strong>のパターンを理解することで、<br/>銘柄の見逃しを防ぎます。</p>
                <style jsx>{`
                  @keyframes countUp {
                    0% {
                      opacity: 0;
                      transform: scale(0.5) translateY(20px);
                    }
                    50% {
                      transform: scale(1.2);
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                  }
                `}</style>

                {/* マトリックス図解 */}
                <div className="insight-matrix-v4">
                  {/* ヘッダー行 */}
                  <div className="mx-cell mx-empty" style={{gridColumn: '1', gridRow: '1'}}></div>
                  <div className="mx-cell mx-col-header" style={{gridColumn: '2 / 5', gridRow: '1'}}>外部環境</div>
                  <div className="mx-cell mx-col-header" style={{gridColumn: '5 / 13', gridRow: '1'}}>ビジネスモデル</div>
                  <div className="mx-cell mx-col-header" style={{gridColumn: '13 / 19', gridRow: '1'}}>経営資源</div>

                  {/* 市場拡大 行ヘッダー */}
                  <div className="mx-cell mx-row-header" style={{gridColumn: '1', gridRow: '2'}}>市場拡大</div>
                  <div className="mx-cell mx-item" style={{gridColumn: '2', gridRow: '2'}}><span className="mx-title">市場の構造的な伸び</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '3', gridRow: '2'}}><span className="mx-title">成長企業のコバンザメ</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '4', gridRow: '2'}}><span className="mx-title">国策との強いリンク</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '5', gridRow: '2 / 4'}}><span className="mx-title">成長市場・過当競争市場の武器商人</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '13', gridRow: '2 / 5'}}><span className="mx-title">巨大市場を創出しうる新技術</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '14', gridRow: '2 / 5'}}><span className="mx-title">有能な経営者</span></div>

                  {/* シェア拡大 行ヘッダー */}
                  <div className="mx-cell mx-row-header" style={{gridColumn: '1', gridRow: '3'}}>シェア拡大</div>
                  <div className="mx-cell mx-item" style={{gridColumn: '2', gridRow: '3'}}><span className="mx-title">デカいダメ競合</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '6', gridRow: '3 / 5'}}><span className="mx-title">ストック化</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '7', gridRow: '3 / 5'}}><span className="mx-title">構造的な参入障壁</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '8', gridRow: '3 / 5'}}><span className="mx-title">資産の負債化</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '9', gridRow: '3 / 5'}}><span className="mx-title">業態転換によるバリューチェーン切り上げ</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '15', gridRow: '3 / 5'}}><span className="mx-title">商流の中の属人的・地縁的なつながり</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '16', gridRow: '3'}}><span className="mx-title">強烈な営業力</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '17', gridRow: '3'}}><span className="mx-title">特殊技術</span></div>

                  {/* 利益率向上 行ヘッダー */}
                  <div className="mx-cell mx-row-header" style={{gridColumn: '1', gridRow: '4'}}>利益率向上</div>
                  <div className="mx-cell mx-item" style={{gridColumn: '2', gridRow: '4'}}><span className="mx-title">原材料価格下落</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '10', gridRow: '4'}}><span className="mx-title">内製化でコスト削減</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '11', gridRow: '4'}}><span className="mx-title">紅ショウガ理論</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '12', gridRow: '4'}}><span className="mx-title">構造的な収益率向上</span></div>
                  <div className="mx-cell mx-item" style={{gridColumn: '16', gridRow: '4'}}><span className="mx-title">徹底的な仕組み化</span></div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">
                  <span
                    className="inline-block text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mr-2"
                    style={{
                      animation: 'countUp 2s ease-out 0.5s forwards',
                      opacity: 0
                    }}
                  >
                    19
                  </span>
                  <span>の成長戦略</span>
                </h3>
                <style jsx>{`
                  @keyframes countUp {
                    0% {
                      opacity: 0;
                      transform: scale(0.5) translateY(20px);
                    }
                    50% {
                      transform: scale(1.2);
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                  }
                `}</style>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { num: '①', title: '市場の構造的な伸び', desc: '外部環境の変化により、市場全体が成長している' },
                    { num: '②', title: '成長企業のコバンザメ', desc: '取引先や親会社の成長に乗じて成長する' },
                    { num: '③', title: '国策との強いリンク', desc: '国の政策に乗ったビジネスで成長機会を得る' },
                    { num: '④', title: 'デカいダメ競合', desc: '大手企業の弱点を突いてシェアを奪う' },
                    { num: '⑤', title: '原材料価格下落', desc: 'コスト減少により利益率が向上する' },
                    { num: '⑥', title: '成長市場の武器商人', desc: '成長市場に対してツールを提供する' },
                    { num: '⑦', title: 'ストック化', desc: 'フロー型からストック型ビジネスへ転換' },
                    { num: '⑧', title: '構造的な参入障壁', desc: '新規参入が困難な構造で優位性を維持' },
                    { num: '⑨', title: '資産の負債化', desc: '競合の資産を負債に変えて優位に立つ' },
                    { num: '⑩', title: '業態転換', desc: 'バリューチェーン上の高収益ポジションへ移動' },
                    { num: '⑪', title: '内製化でコスト削減', desc: '外注していた業務を内製化してコスト減' },
                    { num: '⑫', title: '紅ショウガ理論', desc: '原価率の低い商品で利益率を向上' },
                    { num: '⑬', title: '構造的な収益率向上', desc: 'ビジネスモデル変革で収益性が改善' },
                    { num: '⑭', title: '巨大市場を創出しうる新技術', desc: '革新的技術で新しい市場を創造' },
                    { num: '⑮', title: '有能な経営者', desc: '優れた経営者による企業価値向上' },
                    { num: '⑯', title: '属人的・地縁的なつながり', desc: '人的ネットワークや地域性が競争優位に' },
                    { num: '⑰', title: '強烈な営業力', desc: '圧倒的な営業力でシェアを奪い続ける' },
                    { num: '⑱', title: '特殊技術', desc: '独自の技術で競合優位を確立' },
                    { num: '⑲', title: '徹底的な仕組み化', desc: '業務プロセスの標準化で利益率向上' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all duration-300 smooth-border slide-up">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {item.num}
                        </span>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion>
            </section>

            <section id="short-selling" className="mt-16">
              <Accordion title="ちなみに：ショートという手法" defaultOpen={false}>
                <p className="mb-8 text-lg">ここまで株式投資の基本として「買い」（ロング）について学んできましたが、実は株価が下がると予想したときに利益を得る「ショート」という手法も存在します。</p>

                {/* ========== 1. ショートの仕組み（最重要） ========== */}
                <h3 className="text-3xl font-bold mb-6 text-[#1E4535]">1. ショート（空売り）の仕組み</h3>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8">
                  <p className="mb-4 text-lg"><strong>ショート＝株を借りて売り、後で買い戻す取引</strong></p>
                  <p className="mb-3 text-lg">通常の株式投資は「安く買って高く売る」ことで利益を得ますが、ショートは<strong>「高く売って安く買い戻す」</strong>ことで利益を得る手法です。</p>
                  <p className="text-lg">株を持っていないのに売る、というと不思議に聞こえますが、証券会社から株を借りて売却し、後で買い戻して返却する仕組みです。</p>
                </div>

                <h4 className="text-xl font-semibold mb-4">取引の流れ</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-bold text-lg">STEP 1</div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-center">株を借りて売る</h4>
                    <p className="text-gray-600">証券会社から株を借りて、現在の価格（例：1000円）で売却する</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-lg">STEP 2</div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-center">株価が下落</h4>
                    <p className="text-gray-600">予想通り株価が下がる（例：1000円 → 800円）</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-bold text-lg">STEP 3</div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-center">買い戻して返却</h4>
                    <p className="text-gray-600">安くなった株（800円）を買い戻して証券会社に返却。差額（200円）が利益</p>
                  </div>
                </div>

                {/* ========== 2. ショートのリスク（重要） ========== */}
                <h3 className="text-3xl font-bold mb-6 text-[#1E4535]">2. ショートのリスク</h3>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-lg mb-8">
                  <p className="font-bold mb-6 text-xl text-red-700">通常の買い（ロング）よりリスクが高い</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">① 損失が無限大</h4>
                      <p className="text-gray-700">買いの場合、最大損失は投資額までですが、ショートの場合、株価が上昇すれば損失は理論上無限大になります。</p>
                      <p className="text-sm text-gray-600 mt-2"><strong>例：</strong>1000円で空売り → 株価が2000円に上昇 → 1000円の損失。さらに3000円、4000円と上がれば損失も拡大し続ける。</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">② 借株コスト</h4>
                      <p className="text-gray-700">株を借りるため、貸株料や逆日歩などのコストがかかります。保有期間が長いほどコストがかさみます。</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">③ 踏み上げリスク</h4>
                      <p className="text-gray-700">多くの投資家がショートしている銘柄で株価が急騰すると、ショート勢が一斉に買い戻し（損切り）を行い、さらに株価が上がる「踏み上げ」が発生することがあります。</p>
                      <p className="text-sm text-gray-600 mt-2"><strong>例：</strong>悪材料で空売りが集中 → 予想外の好材料で株価急騰 → ショート勢がパニック買戻し → 株価がさらに暴騰</p>
                    </div>
                  </div>
                </div>

                {/* ========== 3. ロングショート戦略（重要） ========== */}
                <h3 className="text-3xl font-bold mb-6 text-[#1E4535]">3. ロングショート戦略</h3>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-8 rounded-lg mb-8">
                  <p className="mb-4 text-lg"><strong>ロングショート＝ベータを打ち消し、アルファのみを掬う</strong></p>
                  <p className="mb-6 text-lg">ロングショート戦略は、ヘッジファンドなどのプロ投資家が多用する手法で、<strong>同じ業界内で優良株を買い（ロング）、ダメな株を売る（ショート）</strong>ことで、<strong>市場全体の動き（ベータ）をB社のショートで打ち消し、銘柄選択の優位性（アルファ）のみ</strong>で利益を狙う戦略です。</p>

                  <div className="bg-white rounded-lg p-6 mb-6 border-2 border-gray-200">
                    <h5 className="font-bold text-lg mb-3">投資用語の解説</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="font-bold text-blue-700">ベータ（β）= 市場全体の動き</p>
                        <p className="text-sm text-gray-600">市場全体が上がれば個別株も上がり、市場全体が下がれば個別株も下がる。この<strong>市場に連動する部分</strong>をベータと呼ぶ。</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-700">アルファ（α）= 銘柄選択のスキル</p>
                        <p className="text-sm text-gray-600">市場全体の動きとは無関係に、<strong>その銘柄固有の強さ</strong>で得られる超過リターン。「良い銘柄を選んだ」ことによる利益。</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-4">基本的な考え方</h4>
                  <p className="mb-4">通常の株式投資（ロングのみ）では、どんなに良い銘柄を選んでも、市場全体が下落すると保有株も連れ安して損失を被ります。つまり、<strong>アルファ（銘柄選択のスキル）とベータ（市場リスク）が混ざっている</strong>状態です。</p>
                  <p className="mb-4">しかし、ロングショート戦略では：</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li className="text-lg"><strong>同じ業界内で2社を選ぶ</strong></li>
                    <li className="text-lg"><strong>A社（優良株）をロング</strong> - 業界内で相対的に強い企業</li>
                    <li className="text-lg"><strong>B社（問題株）をショート</strong> - 業界内で相対的に弱い企業</li>
                  </ul>
                  <p className="text-lg mb-4"><strong>重要：</strong>同じ業界なので、A社とB社は市場全体の動き（ベータ）に対して<strong>同じように反応</strong>します。つまり、<strong>B社のショートでA社のベータを打ち消す</strong>ことができます。</p>
                  <p className="text-lg">結果として、「A社がB社より優れている」という<strong>相対的な強さ（アルファ）のみ</strong>を掬い取ることができます。</p>
                </div>

                <h4 className="text-xl font-semibold mb-4">具体例：小売業界でのロングショート</h4>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
                  <p className="mb-4 text-lg"><strong>同じ小売業界で2社を比較：</strong></p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative">
                    <div
                      className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 transition-all duration-700"
                      style={{
                        animation: 'slideInLeft 0.8s ease-out, float 3s ease-in-out 0.8s infinite'
                      }}
                    >
                      <h5 className="font-bold text-lg mb-2 text-blue-800">A社（ロング）</h5>
                      <p className="mb-2">✓ EC事業で売上拡大中</p>
                      <p className="mb-2">✓ 新規出店も好調</p>
                      <p className="text-sm text-gray-600">→ 業界内で<strong>相対的に強い</strong></p>
                    </div>
                    <div
                      className="bg-red-50 p-4 rounded-lg border-2 border-red-300 transition-all duration-700"
                      style={{
                        animation: 'slideInRight 0.8s ease-out, float 3s ease-in-out 1.3s infinite'
                      }}
                    >
                      <h5 className="font-bold text-lg mb-2 text-red-800">B社（ショート）</h5>
                      <p className="mb-2">✗ 既存店舗の売上減少</p>
                      <p className="mb-2">✗ 経営陣の刷新なし</p>
                      <p className="text-sm text-gray-600">→ 業界内で<strong>相対的に弱い</strong></p>
                    </div>
                    {/* 対比を示す矢印 */}
                    <div
                      className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-400 font-bold"
                      style={{
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    >
                      ⇄
                    </div>
                  </div>
                  <style jsx>{`
                    @keyframes slideInLeft {
                      from {
                        opacity: 0;
                        transform: translateX(-50px);
                      }
                      to {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                    @keyframes slideInRight {
                      from {
                        opacity: 0;
                        transform: translateX(50px);
                      }
                      to {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                    @keyframes float {
                      0%, 100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-4px);
                      }
                    }
                    @keyframes pulse {
                      0%, 100% {
                        opacity: 0.4;
                        transform: translate(-50%, -50%) scale(1);
                      }
                      50% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.1);
                      }
                    }
                  `}</style>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4">
                    <p className="font-bold mb-3 text-lg">パターン①：市場全体が下落した場合</p>
                    <div className="space-y-2">
                      <p>小売業界全体が不調 → 両社とも株価下落</p>
                      <p>• A社：-5%（業界平均より下落幅が<strong>小さい</strong>）→ <span className="text-red-600 font-bold">-50万円の損失</span></p>
                      <p>• B社：-15%（業界平均より下落幅が<strong>大きい</strong>）→ <span className="text-green-600 font-bold">+150万円の利益</span></p>
                      <p className="text-lg font-bold mt-4">→ <span className="text-green-600">合計 +100万円の利益</span></p>
                      <p className="text-sm text-gray-600 mt-2"><strong>ポイント：</strong>市場全体が下落しても、B社のショートでA社の<strong>ベータ（市場リスク）を打ち消し</strong>、<strong>アルファ（相対的な強さ）のみ</strong>で利益が出る</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                    <p className="font-bold mb-3 text-lg">パターン②：市場全体が上昇した場合</p>
                    <div className="space-y-2">
                      <p>小売業界全体が好調 → 両社とも株価上昇</p>
                      <p>• A社：+15%（業界平均より上昇幅が<strong>大きい</strong>）→ <span className="text-green-600 font-bold">+150万円の利益</span></p>
                      <p>• B社：+5%（業界平均より上昇幅が<strong>小さい</strong>）→ <span className="text-red-600 font-bold">-50万円の損失</span></p>
                      <p className="text-lg font-bold mt-4">→ <span className="text-green-600">合計 +100万円の利益</span></p>
                      <p className="text-sm text-gray-600 mt-2"><strong>ポイント：</strong>市場全体が上昇しても、B社のショートで<strong>ベータを打ち消し</strong>、<strong>アルファ（相対的な差）のみ</strong>で利益が出る</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg mb-8">
                  <p className="font-bold mb-3 text-xl">ロングショート戦略の本質</p>
                  <div className="space-y-3">
                    <p className="text-lg"><strong>ベータ（市場全体の動き）を打ち消す</strong></p>
                    <p className="text-gray-700">→ B社のショートでA社のベータを相殺</p>

                    <p className="text-lg mt-4"><strong>アルファ（銘柄選択のスキル）のみを掬う</strong></p>
                    <p className="text-gray-700">→ 「A社がB社より優れている」という相対的な強さだけで利益を得る</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-700"><strong>結果：</strong>市場が上がっても下がっても関係なく、A社とB社の<strong>差分（スプレッド）</strong>さえ広がれば利益が出る。これが「ベータを打ち消し、アルファのみを掬う」という意味です。</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3">メリット</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>市場リスクの低減：</strong>市場全体の上げ下げに左右されにくい</li>
                      <li><strong>相対評価で利益化：</strong>「A社がB社より良い」という判断で利益を狙える</li>
                      <li><strong>下落相場でも利益機会：</strong>ショート側で利益を出せる</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-4 md:p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3">デメリット</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>複雑性：</strong>ロングとショートの比率調整、銘柄選定が難しい</li>
                      <li><strong>コスト：</strong>ショートには貸株料、逆日歩などのコストがかかる</li>
                      <li><strong>両建てリスク：</strong>想定と逆に動けば両方で損失が出る可能性</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 md:p-6 rounded-lg mb-12">
                  <h4 className="text-xl font-semibold mb-3">マーケットニュートラル戦略</h4>
                  <p className="mb-3"><strong>マーケットニュートラル＝ベータを完全にゼロにする</strong></p>
                  <p className="mb-4">ロングショート戦略の一種で、<strong>ロングポジションとショートポジションの金額を同じにする</strong>ことで、<strong>ベータ（市場リスク）を完全に排除し、アルファ（銘柄選択のスキル）のみ</strong>で利益を狙う戦略です。</p>
                  <p className="text-sm text-gray-600"><strong>例：</strong>100万円分のA社株を買い（ロング）、100万円分のB社株を売り（ショート）→ 市場全体が±10%動いても、ロングとショートが相殺されてベータの影響を受けない</p>
                </div>

                {/* ========== 4. その他の知識（補足） ========== */}
                <h3 className="text-3xl font-bold mb-6 text-[#1E4535]">4. その他の知識（補足）</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">逆日歩（ぎゃくひぶ）</h4>
                    <p className="text-gray-700 mb-2">ショートが集中して貸せる株が不足すると発生する追加コスト。株主優待が近い銘柄は逆日歩が高騰しやすい。</p>
                    <p className="text-sm text-gray-600"><strong>例：</strong>1日あたり10円の逆日歩が10日間発生 → 100円/株のコスト</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">配当の支払い義務</h4>
                    <p className="text-gray-700 mb-2">ショートポジションを配当権利日をまたいで保有すると、配当相当額を支払う義務が発生する。</p>
                    <p className="text-sm text-gray-600"><strong>例：</strong>配当50円の銘柄を1000株ショート → 50,000円を支払う</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">株主優待の扱い</h4>
                    <p className="text-gray-700 mb-2">ショートでは優待を受け取れない。優待クロス取引（ロング+ショート）で優待だけ取得する手法もあるが、逆日歩コストが優待価値を上回ることもあるため注意。</p>
                    <p className="text-sm text-gray-600"><strong>例：</strong>3000円の優待狙いで逆日歩が3500円かかり損失</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">ショートが使われる場面</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li><strong>下落相場での利益確保：</strong>業績悪化企業や構造的問題を抱える業界で株価下落を予想</li>
                      <li><strong>ヘッジ（リスク回避）：</strong>保有株のリスク軽減のため、別銘柄や指数をショート</li>
                    </ul>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <VideoGrid videos={[
                    { id: '-F-Wt6qz3Bw', title: 'ショート取引の仕組みとリスク', duration: '00:00:00' },
                  ]} />
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-6">
                  <p className="font-semibold mb-2">T＋では主にロング（買い）を扱います</p>
                  <p>ショートやロングショート戦略は高度な手法であり、初心者にはリスクが高いため、まずは企業の成長を見極めて「買い」で利益を得るファンダメンタルズ分析に集中することをおすすめします。</p>
                </div>
              </Accordion>
            </section>

            <section id="quiz" className="mt-16">
              <Accordion title="理解度チェックテスト" defaultOpen={false}>
                <p className="mb-6">学んだ内容の理解度を確認するためのテストです。挑戦してみましょう！</p>

                <div className="quiz-container">
                  <div className="quiz-card">
                    <h3>小テスト①</h3>
                    <p>市場の基礎知識と四季報の読み方、簡単なスクリーニング手法の理解度が問われています。</p>
                    <a href={`${basePath}/quiz1.pdf`} target="_blank" className="quiz-button">
                      テストを受ける
                    </a>
                  </div>

                  <div className="quiz-card">
                    <h3>小テスト②</h3>
                    <p>財務諸表の読み方とスクリーニング手法の本質的な理解度が問われています。</p>
                    <a href={`${basePath}/quiz2.pdf`} target="_blank" className="quiz-button">
                      テストを受ける
                    </a>
                  </div>
                </div>
              </Accordion>
            </section>

            <section id="movies" className="mt-16 mb-16">
              <Accordion title="おすすめの映画" defaultOpen={false}>
                <p className="mb-6">企業分析やビジネスの理解を深めるために、実際の事例を描いた映画を観ることもおすすめです。<br/>エンターテイメントとして楽しみながら、投資家の視点やビジネスの裏側を学べます。</p>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div key={num} className="relative aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-sm transition-shadow">
                      <img
                        src={`${basePath}/images/movie${num}.png`}
                        alt={`映画${num}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="flex items-center justify-center h-full text-gray-400">映画${num}</div>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Accordion>
            </section>
          </div>
        </div>
      </div>

      <BackToTop />
    </>
  );
}
