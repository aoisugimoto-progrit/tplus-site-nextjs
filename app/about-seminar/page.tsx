import Header from '@/components/layout/Header';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSeminarPage() {
  return (
    <>
      <Header />

      <div className="pt-[70px]">
        <section
          className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('${basePath}/hero-bg.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,40,30,0.85)] via-[rgba(10,80,70,0.75)] to-[rgba(15,30,80,0.85)]"></div>
          <h1 className="relative z-10 text-6xl font-bold text-white">創設者と理念</h1>
        </section>

        <div className="max-w-5xl mx-auto px-8 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">瀧本哲史先生について</h2>
            <p className="text-lg leading-relaxed mb-6">
              瀧本哲史先生は、京都大学産官学連携本部イノベーション・マネジメント・サイエンス研究部門客員准教授として活躍され、
              エンジェル投資家としても多くの起業家を支援されました。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              著書『僕は君たちに武器を配りたい』『武器としての交渉思考』などで知られ、
              若者に対して「自分の頭で考え、行動する力」を身につけることの重要性を説き続けました。
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">ゼミの理念</h2>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-8 rounded-lg">
              <p className="text-xl font-semibold mb-4">「武器としての教養を身につける」</p>
              <p className="text-lg leading-relaxed">
                瀧本ゼミでは、単なる知識の習得ではなく、実社会で使える「武器」としての教養を身につけることを目指します。
                企業分析、ディベート、交渉術など、実践的なスキルを通じて、自分で考え、判断し、行動できる人材を育成します。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8 text-[#1E4535]">OB・OG紹介</h2>
            <p className="text-lg leading-relaxed mb-6">
              瀧本ゼミのOB・OGは、起業家、投資家、コンサルタント、研究者など、様々な分野で活躍しています。
              ゼミで培った思考力と実行力を武器に、社会に価値を提供し続けています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
