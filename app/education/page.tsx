'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Accordion from '@/components/ui/Accordion';
import ProgressBar from '@/components/ui/ProgressBar';
import BackToTop from '@/components/ui/BackToTop';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import CompletionPopup from '@/components/ui/CompletionPopup';
import VideoGrid from '@/components/ui/VideoGrid';
import BookGrid from '@/components/ui/BookGrid';

export default function EducationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

      <div className="transition-all duration-300" style={{ marginLeft: sidebarOpen ? '260px' : '0' }}>
        <div className="pt-[70px]">
          {/* ページヒーロー */}
          <section id="hero" className="relative h-[400px] bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)] flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">Education</h1>
          </section>

          {/* コンテンツ */}
          <div className="max-w-5xl mx-auto px-8 py-16">
            <section id="basics">
              <Accordion title="株ってなに？ 読了時間 5分">
                <h3 className="text-2xl font-semibold mb-4">① 株とは何か？ ー 所有権という本質</h3>
                <p className="mb-4">まず、「株」が一体何なのかを理解しましょう。<br/>株を買うということは、会社の一部を所有するということです。</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">株式＝会社の所有権</h4>
                  <p className="mb-2"><span className="glossary-term" data-definition="会社の所有権を小口化したもの。1株を持つことは、その会社の一部を所有することを意味します。">株式</span>とは、会社の所有権を細かく分割したもの。</p>
                  <p><strong>例：</strong>トヨタの株を1株買う＝トヨタ自動車の一部を所有する</p>
                </div>

                <p className="mb-4"><strong>株式の誕生：東インド会社の物語</strong></p>
                <p className="mb-6">株式の起源は17世紀初頭のオランダ東インド会社に遡ります。当時、アジアとの貿易は莫大な利益を生む一方で、航海には難破や海賊といった巨大なリスクが伴いました。そこで生まれたのが「株式」という仕組み。複数の投資家から資金を集め、リスクを分散。航海が成功すれば利益を分配し、失敗しても損失を分散する。これが、現代の株式会社の原型です。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <p className="font-semibold mb-2">補足</p>
                  <p className="mb-2"><strong>会社の利益は誰のものか？</strong></p>
                  <p>「会社の純利益は社長が受け取る」と考えている方も多いかもしれません。しかし、実際には<strong>会社の利益は株主のもの</strong>です。非上場会社であれば社長が株を100%保有していることも多いため、結果的に社長が利益を受け取ります。しかし、上場会社の場合、株主が分散しているため、利益は株主全員に分配されます。</p>
                </div>

                <p className="mb-4"><strong>配当：今後生み出される利益</strong></p>
                <p className="mb-6">株を保有していれば、その会社が今後生み出す純利益を配当という形で受け取ることができます。株を保有し続ける限り、その会社が存在する限り、配当が出続けると考えることができます。</p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">② どうやって儲けるのか？ ー 2つの方法</h3>
                <p className="mb-4">株の本質を理解したところで、次は「どうやって儲けるのか？」を学びましょう。</p>
                <p className="mb-6">
                  <strong>株式投資で利益を得る2つの方法：</strong><br/>
                  <strong>①キャピタルゲイン（株価の値上がり益）</strong> - 株を安く買って高く売ることで得られる利益。<br/>
                  <strong>②インカムゲイン（配当金）</strong> - 企業が利益の一部を株主に分配する配当金による利益。
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">③ なぜ株価は動くのか？ ー 市場との差</h3>
                <p className="mb-4">株価がどのように動くのかを理解することが、投資で成功する鍵です。<br/>ここが最も重要なポイントです。</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">成長が予想されていれば、すでに織り込み済み</h4>
                  <p className="mb-2">株価がどのように上がるのか？例えば、会社が成長したとしても、その成長が以前から予想されていたものであれば、<strong>それはすでに株価に織り込まれています</strong>。</p>
                  <p><strong>具体例：</strong>新型iPhoneの発表が決まっている場合、発表日にAppleの株価は上がるでしょうか？答えはNOです。なぜなら、新型iPhoneが出ることは誰もが知っているため、すでに株価に反映されているからです。</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">市場とのギャップこそが利益</h4>
                  <p className="mb-2">要するに、<strong>市場との差が重要</strong>です。</p>
                  <p className="mb-2">「この会社は伸びるから株価が上がります」というだけでは不十分です。</p>
                  <p className="mb-2"><strong>「この会社は市場がそこまで伸びるとは思っていないが、実際には伸びる」</strong></p>
                  <p className="mb-2">という市場とのギャップが、株価にすべて反映されてきます。</p>
                  <p><strong>具体例：</strong>みんなが「売上10%増」と予想している中、実際には「売上30%増」になる企業を見つける。このギャップが利益になります。</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">株価予想の二つの手段</h3>
                <p className="mb-6">株価を予想する手法は大きく2つに分かれます。<strong>どちらも重要であり、ヘッジファンドは両方を見ています</strong>。</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card-with-icon card-icon-chart card-pulse relative bg-white border-2 border-gray-200 rounded-xl p-6 pt-8 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-3">①ファンダメンタルズ分析</h4>
                    <p className="mb-2"><strong>会社の未来を予想していくもの</strong></p>
                    <p className="mb-2">どのような未来を描くかがファンダメンタルズです。企業の財務状況、ビジネスモデル、市場環境などを分析して本質的な価値を見極める手法。</p>
                    <p className="mb-2"><strong>例：</strong>「この会社の新製品は市場を席巻するだろう」「この業界は今後10年伸びる」といった未来予測。</p>
                    <p><strong>T＋ではこちらを主に扱います。</strong></p>
                  </div>
                  <div className="card-with-icon card-icon-trend card-pulse relative bg-white border-2 border-gray-200 rounded-xl p-6 pt-8 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-3">②テクニカル分析</h4>
                    <p className="mb-2"><strong>数値的な確率論に基づくもの</strong></p>
                    <p className="mb-2">過去の株価や出来高の動きから将来の株価を予測する手法。チャートのパターンや指標を使って売買タイミングを判断する。</p>
                    <p className="mb-2"><strong>例：</strong>「株価が移動平均線を上抜けたから買い」「RSIが70を超えたから売り」といったテクニカル指標。</p>
                    <p><strong>短期トレード向き。</strong></p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1278.JPG', description: 'テクニカル分析の決定版', priority: 1 },
                    { image: '/images/books/book_new1.png', description: '株式投資の基礎', priority: 1 },
                    { image: '/images/books/IMG_1268.JPG', description: 'バフェットの投資哲学', priority: 2 },
                    { image: '/images/books/IMG_1270.JPG', description: '成長株投資の教科書', priority: 2 },
                    { image: '/images/books/book_new2.png', description: '応用編', priority: 3 },
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
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="flow">
              <Accordion title="企業分析の流れ 読了時間 4分">
                <h3 className="text-2xl font-semibold mb-4">なぜこの順番なのか？</h3>
                <p className="mb-6">企業分析には正しい順番があります。効率的に、かつ見逃しなく投資対象を見つけるためには、<strong>外から内へ、広く浅くから狭く深く</strong>という流れが重要です。</p>

                <h3 className="text-2xl font-semibold mb-4">STEP1: 外部環境の分析 ー 良い土壌を選ぶ</h3>
                <p className="mb-6"><strong>目的：</strong>順張りで良い環境を選ぶ<br/>
                市場全体が伸びていく中で、その市場で伸びていく企業は基本的にその流れに乗ることができます。そのため、基本的には<strong>良い環境の上場企業を選びたい</strong>です。市場規模、成長率、5フォース（競争環境）などを調査し、企業が成長できる土壌があるかを見極めます。</p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">STEP2: スクリーニング ー 悪い企業を省く</h3>
                <p className="mb-6"><strong>目的：</strong>財務指標で機械的に絞り込む<br/>
                4000社の中から良い企業を見つけたいのですが、逆に<strong>悪い企業をスクリーニングすることで省く</strong>ことができます。スクリーニングとは、様々な株価指標（PER、PBR、ROEなど）を見ていくことです。</p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">STEP3: 内部環境の分析 ー 企業の本質を見抜く</h3>
                <p className="mb-6"><strong>目的：</strong>ビジネスモデルと収益構造を深掘りする<br/>
                企業のビジネスモデルを見ていきます。上流、競合、下流といった形で、<strong>一体誰からお金をもらって誰に売っているのか</strong>というビジネスモデルをしっかり理解することが重要です。</p>

                <p className="mb-6"><strong>収益構造を深く分析する</strong><br/>
                次に、収益構造を深く分析します。例えば、この会社が成長していくとなったとしても、売上が成長していくのか、それとも売上原価が下がったり、販管費が下がっていくのか、という点です。純利益は株価に非常にダイレクトに影響しますが、その純利益が<strong>何がきっかけで、どの収益構造が変わって伸びるのか</strong>を見ていきたいです。</p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">STEP4: イベントドリブン ー タイミングを見極める</h3>
                <p className="mb-6"><strong>目的：</strong>短期的な株価変動の機会を捉える<br/>
                企業の特定のイベントを契機とした投資機会を捉えます。M&A、TOB、MBO、粉飾決算の見極め、政治イベント、金利動向など、様々なイベントドリブンな要素を見ていくことが重要です。</p>
              </Accordion>
            </section>

            <section id="external">
              <Accordion title="企業分析詳細編①外部環境分析編 読了時間 8分">
                <p className="mb-6">市場全体の動きや業界構造を理解することで、企業を取り巻く外部環境を分析します。</p>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">順張りの考え方</h3>
                  <p className="mb-2">投資には「順張り」と「逆張り」があります。</p>
                  <p className="mb-2"><strong>順張り：</strong>市場全体が伸びている中で、その流れに乗る企業に投資する<br/><strong>逆張り：</strong>市場が低迷している中で、割安な企業を見つけて投資する</p>
                  <p>T＋では基本的に<strong>順張り</strong>を推奨します。なぜなら、順張りで成功する確率が逆張りで成功する確率よりも圧倒的に高いからです。</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">マクロトレンドの例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift scale-hover smooth-border">
                    <h4 className="text-lg font-semibold mb-3">国策による成長</h4>
                    <p><strong>例：</strong>政府が「再生可能エネルギー推進」を掲げた場合、太陽光発電関連企業が一気に成長する可能性があります。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift scale-hover smooth-border">
                    <h4 className="text-lg font-semibold mb-3">技術革新</h4>
                    <p><strong>例：</strong>AI技術の発展により、関連する半導体企業やクラウドサービス企業が成長しています。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift scale-hover smooth-border">
                    <h4 className="text-lg font-semibold mb-3">人口動態の変化</h4>
                    <p><strong>例：</strong>高齢化社会が進むことで、介護関連企業や医療機器メーカーの需要が増加します。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift scale-hover smooth-border">
                    <h4 className="text-lg font-semibold mb-3">グローバル化</h4>
                    <p><strong>例：</strong>新興国の経済成長により、そこに進出する企業や物流企業が恩恵を受けます。</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">5フォース分析</h3>
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
                  <h3 className="text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1276.JPG', description: '経済学の基礎を学ぶ', priority: 1 },
                    { image: '/images/books/IMG_1273.JPG', description: '金利と経済の関係', priority: 2 },
                    { image: '/images/books/IMG_1287.JPG', description: 'マクロ経済学の教科書①', priority: 2 },
                    { image: '/images/books/IMG_1288.JPG', description: 'マクロ経済学の教科書②', priority: 2 },
                    { image: '/images/books/IMG_1291.JPG', description: '業界の全体像を把握', priority: 3 },
                  ]} />

                  <VideoGrid videos={[
                    { id: 'jmlpCcqkh5A', title: '日銀: ハト派vsタカ派の意味を理解できない人はダメ投資家です！', duration: '00:16:23' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="screening">
              <Accordion title="企業分析詳細編②スクリーニング編 読了時間 6分">
                <p className="mb-6">財務指標を使って、投資対象となる企業を効率的に絞り込みます。</p>

                <h3 className="text-2xl font-semibold mb-4">財務指標によるスクリーニング</h3>
                <p className="mb-6">4000社以上ある上場企業の中から、<strong>悪い企業を機械的に除外</strong>することで、分析対象を絞り込みます。</p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">PER（株価収益率）</h4>
                    <p className="mb-2"><strong>計算式：</strong>株価 ÷ 1株あたり利益（EPS）</p>
                    <p className="mb-2"><strong>意味：</strong>株価が利益の何倍で評価されているか</p>
                    <p className="mb-2"><strong>目安：</strong>一般的に15倍前後が適正とされる</p>
                    <p><strong>注意点：</strong>業界によって水準が異なる。成長企業は高PERでも正当化される場合がある。</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">PBR（株価純資産倍率）</h4>
                    <p className="mb-2"><strong>計算式：</strong>株価 ÷ 1株あたり純資産（BPS）</p>
                    <p className="mb-2"><strong>意味：</strong>株価が純資産の何倍で評価されているか</p>
                    <p className="mb-2"><strong>目安：</strong>1倍を下回ると割安とされる</p>
                    <p><strong>注意点：</strong>1倍未満でも業績が悪化している企業は要注意。資産価値の裏付けを確認。</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">ROE（自己資本利益率）</h4>
                    <p className="mb-2"><strong>計算式：</strong>純利益 ÷ 自己資本 × 100（%）</p>
                    <p className="mb-2"><strong>意味：</strong>株主資本をどれだけ効率的に利益に変えているか</p>
                    <p className="mb-2"><strong>目安：</strong>10%以上が優良、15%以上が非常に優秀</p>
                    <p><strong>注意点：</strong>借入を増やすことでROEを高く見せることも可能。財務健全性も確認。</p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1275.JPG', description: '四季報の読み方入門', priority: 1 },
                    { image: '/images/books/IMG_1281.JPG', description: '最新の企業情報', priority: 2 },
                    { image: '/images/books/IMG_1290.JPG', description: 'プロが選ぶ注目銘柄', priority: 2 },
                  ]} />

                  <VideoGrid videos={[
                    { id: '9CoLaONOEyE', title: '【東証が注意】PBR低い株は、なぜダメか？理由を解説します。', duration: '00:29:14' },
                    { id: 'TkQPQzEhP1g', title: '超絶わかる！ROEの解説です', duration: '00:44:11' },
                    { id: 'aV9cGgu6W2g', title: '【株仙人の道】資産250億円の片山晃が教えるPER活用の極意', duration: '00:45:51' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="internal">
              <Accordion title="企業分析詳細編③内部環境分析編 読了時間 10分" defaultOpen={false}>
                <p className="mb-6">企業のビジネスモデルと収益構造を深く理解し、競争優位性を見極めます。</p>

                <h3 className="text-2xl font-semibold mb-4">ビジネスモデルの具体例</h3>
                <p className="mb-4">企業がどのように価値を生み出し、収益を得ているかを理解することが重要です。</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">サブスクリプション型</h4>
                    <p className="mb-2"><strong>例：</strong>Netflix、Spotify</p>
                    <p>月額課金で安定した収益。解約率（チャーンレート）が重要指標。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">プラットフォーム型</h4>
                    <p className="mb-2"><strong>例：</strong>メルカリ、Airbnb</p>
                    <p>売り手と買い手をマッチング。ネットワーク効果で価値が増大。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">フリーミアム型</h4>
                    <p className="mb-2"><strong>例：</strong>Dropbox、Zoom</p>
                    <p>基本無料で有料プランに誘導。コンバージョン率が収益の鍵。</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3">広告収入型</h4>
                    <p className="mb-2"><strong>例：</strong>Google、Meta</p>
                    <p>無料サービスでユーザーを集め、広告で収益化。ユーザー数と滞在時間が重要。</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">収益構造の改善パターン</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-semibold mb-2">①売上の増加</h4>
                    <p>新規顧客獲得、既存顧客の単価アップ、新製品投入など</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold mb-2">②原価率の改善</h4>
                    <p>仕入コスト削減、生産効率向上、規模の経済によるコストダウン</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <h4 className="font-semibold mb-2">③販管費の削減</h4>
                    <p>広告効率化、オペレーション自動化、間接部門のスリム化</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">競争優位性の源泉</h3>
                <p className="mb-4">長期的に高い収益を維持できる企業は、何らかの「モート（堀）」を持っています。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-indigo-300 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-700">ブランド力</h4>
                    <p>AppleApple、コカ・コーラなど、消費者の心に強く刻まれた企業は価格決定力を持つ。</p>
                  </div>
                  <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-700">ネットワーク効果</h4>
                    <p>ユーザーが増えるほど価値が高まる。LINE、Facebookなどのプラットフォーム企業。</p>
                  </div>
                  <div className="bg-white border-2 border-pink-300 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3 text-pink-700">コスト優位性</h4>
                    <p>規模の経済や効率的なオペレーションで競合より低コストを実現。Amazonなど。</p>
                  </div>
                  <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-3 text-red-700">スイッチングコスト</h4>
                    <p>乗り換えコストが高く、顧客が離れにくい。SalesforceなどのBtoB SaaS。</p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
                  <BookGrid books={[
                    { image: '/images/books/IMG_1274.JPG', description: 'ビジネスモデル理解', priority: 3 },
                    { image: '/images/books/IMG_1289.JPG', description: '収益構造の分析', priority: 3 },
                    { image: '/images/books/book_new1.png', description: '応用編①', priority: 3 },
                    { image: '/images/books/book_new2.png', description: '応用編②', priority: 3 },
                  ]} />

                  <VideoGrid videos={[
                    { id: 'gUAlIbSNubM', title: '株価が上がり続けるビジネスモデルは〇〇型です。【ストック型vsフロー型】', duration: '00:19:51' },
                    { id: 'dAwE43UaNq8', title: '「利益」と「キャッシュフロー」の違いが分からない人はヤバい', duration: '00:24:12' },
                    { id: 'q_QTd293RqY', title: '増資は？配当は？決算直後のリアルゲイトに突撃！株主として根掘り葉掘り聞いてきました。', duration: '00:51:32' },
                    { id: 'YiSy4Bjpo0Q', title: 'リアルゲイト岩本社長を直撃！増資は？配当は？リアルゲイト株は今後どうなるのか！？', duration: '01:02:41' },
                    { id: 'A8F6q0CJNQI', title: '【そもそも解説】増資とは何なのか？なぜ株価が下がりがちなのか？　語ります', duration: '00:31:58' },
                    { id: 'bLIrCEzvwnU', title: 'イケてる企業は決算説明を見れば分かります。〜INFORICHとクックパッドを事例に解説', duration: '00:26:01' },
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="event-driven">
              <Accordion title="企業分析詳細編④イベントドリブン編 読了時間 5分" defaultOpen={false}>
                <p className="mb-6">企業の特定のイベントをきっかけとした、短期的な株価変動の機会を捉える手法です。</p>

                <h3 className="text-2xl font-semibold mb-4">主なイベントの種類</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">M&A（合併・買収）</h4>
                    <p className="mb-2"><strong>買収される側：</strong>通常、株価が上昇（買収プレミアム）</p>
                    <p className="mb-2"><strong>買収する側：</strong>短期的には下落することも（高値掴みのリスク）</p>
                    <p><strong>注目ポイント：</strong>シナジー効果、統合コスト、文化の違いによる失敗リスク</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">決算発表</h4>
                    <p className="mb-2"><strong>サプライズ決算：</strong>市場予想を大きく上回る/下回ると急騰/急落</p>
                    <p className="mb-2"><strong>ガイダンス修正：</strong>業績予想の上方/下方修正で株価が動く</p>
                    <p><strong>注目ポイント：</strong>コンセンサス予想との乖離、経営陣のコメント</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">株式分割・自社株買い</h4>
                    <p className="mb-2"><strong>株式分割：</strong>流動性向上で個人投資家が買いやすくなる</p>
                    <p className="mb-2"><strong>自社株買い：</strong>1株あたり利益が増加、株主還元姿勢の表明</p>
                    <p><strong>注目ポイント：</strong>規模、タイミング、経営陣の意図</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-3">政治・規制イベント</h4>
                    <p className="mb-2"><strong>政策変更：</strong>補助金、規制緩和/強化が業界全体に影響</p>
                    <p className="mb-2"><strong>金利変動：</strong>中央銀行の政策金利決定で市場全体が動く</p>
                    <p><strong>注目ポイント：</strong>政治的リスク、法改正の影響、国際情勢</p>
                  </div>
                </div>

                {/* 参考書籍 */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-4">もっと詳しく学びたい方へ</h3>
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
                  ]} />
                </div>
              </Accordion>
            </section>

            <section id="insights">
              <Accordion title="まとめ：19の隠れたインサイト 読了時間 5分" defaultOpen={false}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6 hover-lift smooth-shadow smooth-border transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">外部環境×内部環境の統合フレームワーク</h3>
                  <p className="mb-2">これまで学んだ「外部環境分析（STEP1）」と「内部環境分析（STEP3）」を統合し、企業の成長パターンを19種類に分類したフレームワークです。</p>
                  <p className="mb-2">このフレームワークを使うことで、<strong>「隠れたインサイト」＝まだ市場が気づいていない企業の本当の強み</strong>を体系的に見つけることができます。</p>
                  <p><strong>横軸：</strong>外部環境・ビジネスモデル・経営資源<br/><strong>縦軸：</strong>市場拡大・シェア拡大・利益率向上</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4">「隠れたインサイト」を知り、いい銘柄の見逃しを防ぐ</h3>
                <p className="mb-6">「隠れたインサイト」とは、まだ多くの人が知らないその会社の本当の強みのこと。<br/>「実は○○」と説明できるストーリーです。</p>

                <h3 className="text-2xl font-semibold mb-4">19の「隠れたインサイト」マトリックス</h3>
                <p className="mb-6">利益成長（市場拡大・シェア拡大・利益率向上）と、<br/>分析の切り口（外部環境・ビジネスモデル・経営資源）を組み合わせた19のパターンを理解することで、<br/>銘柄の見逃しを防ぎます。</p>

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

                <h3 className="text-2xl font-semibold mb-4 mt-8">19の成長戦略</h3>
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
                    <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover-lift scale-hover smooth-border slide-up">
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

            <section id="quiz" className="mt-16">
              <Accordion title="理解度チェックテスト" defaultOpen={false}>
                <p className="mb-6">学んだ内容の理解度を確認するためのテストです。挑戦してみましょう！</p>

                <div className="quiz-container">
                  <div className="quiz-card">
                    <h3>小テスト①</h3>
                    <p>市場の基礎知識と四季報の読み方、簡単なスクリーニング手法の理解度が問われています。</p>
                    <a href="/quiz1.pdf" target="_blank" className="quiz-button">
                      テストを受ける
                    </a>
                  </div>

                  <div className="quiz-card">
                    <h3>小テスト②</h3>
                    <p>財務諸表の読み方とスクリーニング手法の本質的な理解度が問われています。</p>
                    <a href="/quiz2.pdf" target="_blank" className="quiz-button">
                      テストを受ける
                    </a>
                  </div>
                </div>
              </Accordion>
            </section>

            <section id="movies" className="mt-16 mb-16">
              <Accordion title="おすすめの映画" defaultOpen={false}>
                <p className="mb-6">企業分析やビジネスの理解を深めるために、実際の事例を描いた映画を観ることもおすすめです。<br/>エンターテイメントとして楽しみながら、投資家の視点やビジネスの裏側を学べます。</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="relative aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <img
                        src={`/images/movie${num}.png`}
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
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-lg mb-2">マネー・ショート</h3>
                    <p className="text-sm text-gray-600">2008年金融危機の裏側を描く実話ベースの傑作</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-lg mb-2">ウルフ・オブ・ウォールストリート</h3>
                    <p className="text-sm text-gray-600">株式ブローカーの栄華と転落を描いた衝撃作</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold text-lg mb-2">マージン・コール</h3>
                    <p className="text-sm text-gray-600">金融危機直前の投資銀行の24時間を描くリアルな作品</p>
                  </div>
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
