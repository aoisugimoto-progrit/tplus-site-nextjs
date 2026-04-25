import Header from '@/components/layout/Header';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SchedulePage() {
  return (
    <>
      <Header />

      <div className="pt-[70px]">
        <section
          className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
          <h1 className="relative z-10 text-6xl font-bold text-white">活動予定</h1>
        </section>

        <div className="max-w-5xl mx-auto px-8 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">年間スケジュール</h2>
            <div className="space-y-6">
              {[
                { month: '4月', event: '新歓活動 / 新入生教育開始' },
                { month: '5月', event: '基礎研修 / 企業分析入門' },
                { month: '6月', event: '中間発表 / ディベート大会' },
                { month: '7月', event: '夏合宿 / ゲスト講演' },
                { month: '9月', event: '秋学期開始 / 実践プロジェクト開始' },
                { month: '10月', event: '企業訪問 / フィールドワーク' },
                { month: '11月', event: '最終発表準備' },
                { month: '12月', event: '年末発表会 / 忘年会' },
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-[#2D5F4C] to-[#4A9B7F] text-white text-xl font-bold px-6 py-3 rounded-lg min-w-[100px] text-center">
                      {item.month}
                    </div>
                    <div className="text-lg">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">定期活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">週次ゼミ</h3>
                <p>毎週水曜日 18:00-20:00<br/>企業分析の発表とディスカッション</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">読書会</h3>
                <p>隔週金曜日 19:00-21:00<br/>投資関連書籍の輪読と議論</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">新歓情報</h2>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-8 rounded-lg">
              <p className="text-xl font-semibold mb-4">2026年度 新歓イベント開催中！</p>
              <p className="text-lg leading-relaxed mb-4">
                瀧本ゼミでは、投資や企業分析に興味のある学生を募集しています。
                「投資の知識がない」という方でも大丈夫。基礎から丁寧に教えます。
              </p>
              <p className="text-lg leading-relaxed">
                まずは説明会に参加してみませんか？<br/>
                興味のある方は、ゼミのSNSアカウントをフォローしてください。
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
