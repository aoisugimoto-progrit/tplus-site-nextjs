'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSeminarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { title: 'トップ', id: 'hero' },
    { title: '瀧本先生について', id: 'takimoto' },
    { title: 'Only Outliers Can Outperform', id: 'outliers' },
    { title: 'ゼミの沿革', id: 'history' },
  ];

  return (
    <>
      <Header />

      <Sidebar
        items={sidebarItems}
        onToggle={setSidebarOpen}
      />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-[260px]' : 'ml-0'}`}>
        <div className="pt-[70px]">
          {/* ページヒーロー */}
          <section
            id="hero"
            className="relative h-[260px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
            <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white">Founder</h1>
          </section>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
            {/* 瀧本先生について */}
            <section id="takimoto" className="mb-12 md:mb-16">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 左側：画像 */}
                <div className="md:w-1/3">
                  <div className="mb-6">
                    <img
                      src={`${basePath}/takimoto.png`}
                      alt="瀧本哲史先生"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <img src={`${basePath}/images/books/takimoto_weapon.png`} alt="僕は君たちに武器を配りたい" className="w-full h-auto rounded shadow" />
                    <img src={`${basePath}/images/books/takimoto_friends.png`} alt="君に友達はいらない" className="w-full h-auto rounded shadow" />
                    <img src={`${basePath}/images/books/takimoto_2020.png`} alt="2020年6月30日にまたここで会おう" className="w-full h-auto rounded shadow" />
                  </div>
                </div>

                {/* 右側：プロフィール */}
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E4535] mb-2">瀧本 哲史</h2>
                  <p className="text-lg md:text-xl text-gray-600 mb-1">Tetsufumi Takimoto</p>
                  <p className="text-base md:text-lg text-gray-500 mb-6">創設者</p>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed">
                    <p>東京大学法学部卒業後、マッキンゼー・アンド・カンパニーでコンサルタントとして活躍。</p>
                    <p>その後、独立してエンジェル投資家として数々のベンチャー企業を支援。2007年より京都大学客員准教授として教鞭をとり、瀧本ゼミを主宰。</p>
                    <p>「自分の頭で考え、決断し、行動する」ことの重要性を説き続け、次世代のリーダー育成に情熱を注いだ。</p>
                    <p>著書に『武器としての決断思考』『僕は君たちに武器を配りたい』『君に友達はいらない』など。2019年8月10日逝去。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Only Outliers Can Outperform */}
            <section id="outliers" className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#1E4535]">Only Outliers Can Outperform</h2>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">Tゼミは何のための組織なのか？</h3>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">ゼミの存在目的</h3>
                <p className="text-lg">Tゼミ生とTゼミ関係者の有機的つながり「Tゼミマフィア」をつくり、社会変革を成し遂げる</p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">Step1：企業分析を通じて「武器」を獲得する</h3>
              <p className="mb-6 text-lg">T＋では、企業分析を通じて<br/>社会で戦うための「武器」を身につけます。</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">分解脳</h4>
                  <p>複雑な問題を構造的に理解し、本質を見抜く力</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">現実の理不尽さ・他者視点</h4>
                  <p>世の中の仕組みを理解し、多様な立場から物事を考える力</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">良い市場・美味しいポジション・良い事業を見分ける洞察力</h4>
                  <p>ビジネスチャンスを見極める目を養う</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">独特な思考・行動</h4>
                  <p>他者と差別化された自分だけの視点と行動力</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">Step2：現役生、卒業生問わずゼミ生同士がつながる</h3>
              <p className="mb-6 text-lg">T＋では、普段から<br/>横、縦、斜めのつながりが生まれるようにしています。</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">①各々は、専門業界をもつ</h4>
                  <p>Tゼミと専門業界のハブとなる</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">②取り組むべき目的を発見</h4>
                  <p>社会課題やビジネスチャンスを見つける</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">③専門性を跨いだチームをつくる</h4>
                  <p>目的のもとに異なる専門性を持つメンバーが集まる</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">④目的達成後は解散、新チームへ</h4>
                  <p>柔軟にチームを組み替え、次の挑戦へ</p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">Tゼミは今からが一番面白い</h3>
              <p className="mb-4">OB・OGの活躍例：</p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>AR企業経営 → Forbes under 30選出（政策1.0期尾）</li>
                <li>東大文系 → 海外大学院 → フェイスブック本社エンジニア（企業3.0期中原隆）</li>
                <li>職業別SNS共同創業 Tenxia（企業3.0岡部、京都1.0三辻）</li>
                <li>オンライン音楽レッスン共同創業 フォニム（企業3.0宍戸、企業3.5渡辺）</li>
                <li>トレカ売買PF経営（京都1.5大熊）</li>
                <li>ファンド向けコンサル共同創業 QuestHub（企業1.5大熊、京都3.0和田、京都1.0渡辺）</li>
                <li>WEBマーケティング企業経営（企業7.5遠藤）</li>
                <li>オトバンク取締役（企業1.5飯泉）</li>
                <li>AEDプロジェクト政策化（企業1.0石橋、政策1.0吉田）</li>
                <li>トレーラーハウスPF（企業1.0小林）</li>
                <li>東大王 タレント（企業6.0鈴木光）</li>
                <li>書籍出版&教育事業（企業7.0神田）</li>
                <li>フィットネスジム創業（企業4.5奥松）</li>
                <li>製薬会社MR ⇒ SaaSマーケター（政策3.0大月）</li>
                <li>ゼミハウス（企業1.5片山）</li>
                <li>ヘッジファンド ファンドマネジャー（京都2.0本間、京都2.0孫、企業2.0城田）</li>
                <li>AR企業 Pretia 創業（1.0期牛尾、政策2.0期李）</li>
              </ul>
            </section>

            {/* ゼミの沿革 */}
            <section id="history" className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#1E4535]">ゼミの沿革</h2>
              <p className="text-lg mb-8">瀧本ゼミ企業分析パート（T＋）は、<br/>2012年から始まった約13年の歴史を持つ組織です。</p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">創立期：混沌からのスタート（2012年）</h3>
                <p>すべては、駒場図書館の狭い一室から始まった。<br/>見よう見まねで始めたゼミは、初日から大炎上。<br/>しかし、その混沌こそが、のちの瀧本ゼミの原型となる。</p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">2012年</h3>

              <h4 className="text-xl font-semibold mb-3">2012年夏：京都大学への訪問</h4>
              <p className="mb-4">ある先輩に誘われて京都大学の瀧本ゼミを見学。<br/>瀧本先生の話すスピードは人の10倍で、<br/>最初は何を言っているのか全く聞き取れなかった。</p>
              <p className="mb-8">「瀧本ゼミの最初の半年間は、<br/>瀧本さんのリスニングをできるようになることから始まる」<br/>と言われるほど。</p>

              <h4 className="text-xl font-semibold mb-3">2012年秋：東京でスタート</h4>
              <p className="mb-4">東京大学で『起業論』の授業が始まるタイミングで、<br/>その裏ゼミとして瀧本ゼミが発足。</p>
              <p className="mb-8">駒場図書館の狭い一室で、<br/>京都のスキームを見よう見まねでスタート。</p>

              <h4 className="text-xl font-semibold mb-3">葬儀業界大炎上事件</h4>
              <p className="mb-4">最初の発表は葬儀業界の分析。<br/>1ページ目のスライドから質問の嵐で全く進まず、<br/>発表者以外の人たちが勝手に調べ出して発表の仮説を修正。</p>
              <p className="mb-8">ゼミが終わる頃には最初の発表が跡形もなくなっていた。<br/>この「炎上」がのちの入ゼミ試験の原型となる。</p>

              <h4 className="text-xl font-semibold mb-3">2012年11～12月：正式に組織化</h4>
              <p className="mb-4">最初は友達を連れてくる形で参加者を集めていたが、<br/>どんどん辞めていき5人程度に。</p>
              <p className="mb-8">「ちゃんと組織として人を入れて、<br/>育成してゼミを運営しませんか？」という提案から、<br/>正式に組織としての運営が始まった。</p>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">瀧本先生の言葉</h3>
                <p>「僕はあと10年で日本が変わることに賭けたい。変えられるのはそう、あなたたちのような若い人です。優秀な若い人材が集まる場所はありませんか。秘密結社を作って日本を変えましょう。」</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">成長期：理想に現実を追いつかせる（2013年～2014年）</h3>
                <p>「優れた教育システムがあります！」と言い切った。<br/>実態は何もないハリボテだった。<br/>しかし、その大風呂敷こそが、組織を急成長させる原動力となった。</p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">2013年～2014年</h3>

              <h4 className="text-xl font-semibold mb-3">2013年1～2月：1.5期生募集</h4>
              <p className="mb-4">4月の新歓に向けて、急遽メンバーを募集。<br/>Twitterで募集をかけ、<br/>瀧本さんについてつぶやいている人にDMを送るなどして集めた。</p>
              <p className="mb-8">入ゼミ条件は「葬儀業界で好きな企業を1社発表すること」。</p>

              <h4 className="text-xl font-semibold mb-3">2013年4月：2期生新歓</h4>
              <p className="mb-4">1.5期生に1ヶ月足らずで2期生の新歓をさせるという荒業。</p>
              <p className="mb-4">「優れた教育システムと優れた組織と<br/>優れた議論の仕組みがあります！」と言っていたが、<br/>実態は何もないハリボテ状態。</p>
              <p className="mb-8">理想や構想に現実を追いつかせるのに必死だった。</p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">確立期：唯一無二の文化が生まれる（2013年～2015年）</h3>
                <p>炎上、多様性、そして『君に友達はいらない』。<br/>混沌の中から生まれた独自の文化が、<br/>瀧本ゼミを他のどの組織とも違う存在にした。</p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">瀧本ゼミの特徴的な文化</h3>

              <h4 className="text-xl font-semibold mb-3">「炎上文化」</h4>
              <p className="mb-4">瀧本ゼミでは、企業を一社選んで<br/>その会社が買いか売りかをプレゼンする。</p>
              <p className="mb-4">ちょっとでもおかしいことがあれば、<br/>いつでも突っ込んでもいいし、<br/>その場で会社のIR部門に電話をかけて確認してもいい。</p>
              <p className="mb-8">間違っていたらその場で論破されて発表が終了する、<br/>真剣勝負の場だった。</p>

              <h4 className="text-xl font-semibold mb-3">多様性</h4>
              <p className="mb-4">東大のサークルでありながら、<br/>幅広い大学から参加者を募集。</p>
              <p className="mb-8">東大・東工大・慶應・早稲田・中央・医学部など、<br/>そして学年は大学1年生から大学院生までが<br/>一つの期として立場を同じに学習する組織だった。</p>

              <h4 className="text-xl font-semibold mb-3">『君に友達はいらない』</h4>
              <p className="mb-4">瀧本先生の著書『君に友達はいらない』は、<br/>実は初代代表をモデルに書かれた。</p>
              <p className="mb-8">大学1年生が自分より年上の人たちと一緒に<br/>最高のゼミを作るという難しい命題に挑戦する姿を見て、<br/>同じような境遇にある人が同じ苦労をしないよう、<br/>最高の組織を作るための方法論を伝えようと書かれた。</p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">転換期：自灯明（2015年～2019年）</h3>
                <p>2015年、瀧本先生から一通のメッセージが届いた。<br/>「覚悟のある人だけ残ってください」<br/>その言葉は、ゼミ生に自立を迫るものだった。</p>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">2015年～2019年</h3>

              <h4 className="text-xl font-semibold mb-3">2015年：「自灯明」のメッセージ</h4>
              <p className="mb-8">瀧本先生から病気についてのメッセージが一部のゼミ生に送られた。</p>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-4 md:p-6 rounded-lg mb-8">
                <p className="mb-3"><strong>瀧本先生からのメッセージ：</strong></p>
                <p>「瀧本ゼミという組織は、私がいずれいなくなることを織り込まれた組織であり、皆さんが主体的に自分の頭で考えて動かなければ、そもそも動かない組織です。本当に覚悟のある人だけ残ってください。自分の頭で考えられない人は、今すぐやめてもらって構わないです」</p>
              </div>

              <p className="mb-4">「自灯明（じとうみょう）」とは、<br/>お釈迦様が入滅の際に弟子に伝えた言葉。</p>
              <p className="mb-8">「誰かの言葉や教えに左右されることなく、<br/>これまで積み重ねてきた行いを信じ、<br/>自らの心に従い正しい教えを拠りどころとして、<br/>この先も精進していきなさい」という教え。</p>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-orange-500 p-4 md:p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">現在：次の10年へ（2019年～）</h3>
                <p>瀧本先生が蒔いた種は、いま芽を出し始めている。<br/>それぞれの分野で活躍するOB・OGたち。<br/>そして、新しい仲間とともに歩み続ける現役生たち。<br/>瀧本ゼミの物語は、まだ続いている。</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
