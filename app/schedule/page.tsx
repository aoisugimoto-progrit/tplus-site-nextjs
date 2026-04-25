'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SchedulePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { title: 'トップ', id: 'hero' },
    { title: '年間スケジュール', id: 'schedule' },
    { title: 'FIRE制度・卒業要件', id: 'fire' },
  ];

  return (
    <>
      <Header />

      <Sidebar
        items={sidebarItems}
        onToggle={setSidebarOpen}
      />

      <div className="transition-all duration-300" style={{ marginLeft: sidebarOpen ? '260px' : '0' }}>
        <div className="pt-[70px]">
          {/* ページヒーロー */}
          <section
            id="hero"
            className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
            <h1 className="relative z-10 text-6xl font-bold text-white">Activity</h1>
          </section>

          <div className="max-w-5xl mx-auto px-8 py-16">
            {/* 年間スケジュール */}
            <section id="schedule" className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">年間スケジュール</h2>

              <p className="mb-8 text-lg">T＋では、1年を通して様々な活動を行っています。</p>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                {/* 月ラベル */}
                <div className="grid grid-cols-12 gap-2 mb-4">
                  {['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月'].map((month, i) => (
                    <div key={i} className="text-center text-sm font-semibold text-gray-700">
                      {month}
                    </div>
                  ))}
                </div>

                {/* 活動バー */}
                <div className="grid grid-cols-12 gap-2 mb-4">
                  {/* 新歓活動（3-4月） */}
                  <div className="col-span-2 bg-gradient-to-r from-[#FF6B9D] to-[#C239B3] text-white text-center py-3 rounded-lg font-semibold text-sm">
                    新歓活動
                  </div>
                  {/* 教育（5-6月） */}
                  <div className="col-start-3 col-span-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white text-center py-3 rounded-lg font-semibold text-sm">
                    教育
                  </div>
                  {/* 新歓活動（9-10月） */}
                  <div className="col-start-7 col-span-2 bg-gradient-to-r from-[#FF6B9D] to-[#C239B3] text-white text-center py-3 rounded-lg font-semibold text-sm">
                    新歓活動
                  </div>
                  {/* 教育（11-12月） */}
                  <div className="col-start-9 col-span-2 bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white text-center py-3 rounded-lg font-semibold text-sm">
                    教育
                  </div>
                </div>

                {/* イベント */}
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-start-1 text-center bg-blue-100 py-2 rounded text-sm font-semibold text-blue-800">
                    YEP
                  </div>
                  <div className="col-start-3 text-center bg-green-100 py-2 rounded text-sm font-semibold text-green-800">
                    オンボレク
                  </div>
                  <div className="col-start-6 text-center bg-yellow-100 py-2 rounded text-sm font-semibold text-yellow-800">
                    夏合宿
                  </div>
                  <div className="col-start-10 text-center bg-purple-100 py-2 rounded text-sm font-semibold text-purple-800">
                    東西戦<br/>忘年会
                  </div>
                  <div className="col-start-12 text-center bg-indigo-100 py-2 rounded text-sm font-semibold text-indigo-800">
                    冬合宿
                  </div>
                </div>
              </div>
            </section>

            {/* FIRE制度・卒業要件 */}
            <section id="fire" className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">FIRE制度・卒業要件</h2>

              <p className="mb-8 text-lg">T＋では、ゼミ生の成長を促すための独自の評価制度を設けています。</p>

              <h3 className="text-2xl font-semibold mb-4">打開</h3>
              <p className="mb-8 text-lg">回避発表の練習として、入ゼミと1回目回避期限の中間地点で期限が設置されます。ファイヤーするための制度ではないため、きちんと準備していれば株の知識ゼロでも余裕で通過できます。</p>

              <h3 className="text-2xl font-semibold mb-4">回避</h3>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">回避基準：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>（ゼミ生4人以上の平均）+（あんてこさんの点数）= 3.5/5で回避</li>
                  <li>ゼミ生平均3.1点以上で足切り（3.1点以下の場合は無効）</li>
                  <li>同じ銘柄で同じ主張軸の本発表は3回までに制限</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">卒業</h3>
              <p className="mb-8 text-lg">卒業要件を「卓越卒業」と「スタンダード卒業」の2段階にわけ、現役生が自由に卒業ハードルを設定できます。</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-3">卓越卒業要件</h4>
                  <p className="mb-3">以下のいずれかを満たす：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>2回以上の卓越発表を行い、2年間在籍する</li>
                    <li>3回以上のファイヤー回避発表の後に1回の卓越発表を行い、2年間在籍する</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-3">スタンダード卒業要件</h4>
                  <p className="mb-3">2回のファイヤー回避発表の後に、1回の卓越発表を行い、2年間在籍する</p>
                  <p className="italic text-gray-600">ゼミ以外の活動も両立し、ネットワークのハブ人材を目指す人向け</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">卓越発表基準：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>（ゼミ生4人以上の平均）+（あんてこさんの点数）= 4.5/5で卓越</li>
                </ul>
                <p className="font-semibold mb-3">再発表の条件：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>初回発表が4点以上</li>
                  <li>回避後再発表は1回まで</li>
                </ul>
                <p className="font-semibold mb-3">改善度評価：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>卒業がかかった発表についてのみ、城田は「前回までの発表からの改善」も審査する</li>
                  <li>改善がみられない発表については、たとえ4.5点以上の卓越発表であったとしても卒業とは認められない</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">その他柔軟な対応</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3">ファイヤー回避繰越し制度</h4>
                  <p>同じセメスターに2回以上のファイヤー回避発表をした場合は、次回セメスターのファイヤー回避をしなくても良い。</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3">ファイヤー期限延長制度</h4>
                  <p>ゼミ以外の活動の繁忙期とファイヤー期限がかぶっており、ファイヤー期限までの発表が難しい場合は、城田と代表に延長理由を申請すれば最大3か月のファイヤー期限延長を認める。</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3">復活発表</h4>
                  <p className="mb-3">1回以上回避してファイヤーされたゼミ生は、卓越発表をもってきた場合にゼミに復帰できます。</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>ゼミ生平均4/5点</li>
                    <li>あんてこさん4/5点</li>
                    <li>※復活発表は卒業要件にカウントしない</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="font-semibold mb-3">参考資料：</p>
                <ul className="list-disc pl-6">
                  <li>
                    <a href="https://docs.google.com/presentation/d/1p8snOK1fEBqLZUEK8IzkrbKrhnxfb6MhTZF2pWhX6y8/edit#slide=id.g1edd7c47d36_1_127" target="_blank" className="text-[#0A5046] underline hover:text-[#0A5046]/80">
                      FIRE制度詳細資料（Googleスライド）
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
