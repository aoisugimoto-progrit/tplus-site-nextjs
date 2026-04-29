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

interface Book {
  title: string;
  author: string;
  description: string;
  point: string;
}

interface Website {
  title: string;
  url: string;
  description: string;
}

interface YouTubeChannel {
  name: string;
  url: string;
  description: string;
  feature: string;
}

interface XAccount {
  handle: string;
  displayName: string;
  url: string;
  description: string;
}

/* ---------- 参考書籍 ---------- */
const books: Book[] = [
  { title: '株式投資の未来', author: 'ジェレミー・シーゲル', description: '過去200年の株式データを基に、配当再投資戦略の有効性を実証した長期投資のバイブル。', point: '長期投資の原理原則を学びたい人に最適' },
  { title: 'ウォール街のランダム・ウォーカー', author: 'バートン・マルキール', description: '効率的市場仮説を軸に、インデックス投資の有効性を説く古典的名著。', point: '個人投資家が取るべき戦略の全体像が掴める' },
  { title: '敗者のゲーム', author: 'チャールズ・エリス', description: '「市場に勝とうとするな」というメッセージを、データと論理で伝える良書。', point: '投資で大切なマインドセットが身につく' },
  { title: '賢明なる投資家', author: 'ベンジャミン・グレアム', description: 'バリュー投資の父による不朽の名著。「安全域」の概念を提唱し、投資の原理原則を説く。', point: 'バフェットの師匠による投資哲学の原点' },
  { title: 'バフェットの銘柄選択術', author: 'メアリー・バフェット', description: 'ウォーレン・バフェットの投資手法を具体的な銘柄選定プロセスとして解説。', point: '実践的なバリュー投資の方法論が学べる' },
  { title: 'ピーター・リンチの株で勝つ', author: 'ピーター・リンチ', description: '伝説的ファンドマネージャーが、個人投資家の強みを活かした投資法を伝授。', point: '身近な生活から銘柄を見つける視点が得られる' },
  { title: '企業価値評価（上・下）', author: 'マッキンゼー・アンド・カンパニー', description: 'DCF法を中心としたバリュエーションの教科書。プロの投資家が参照する定番テキスト。', point: '本格的な企業価値算定を学びたい人向け' },
  { title: '財務諸表分析', author: 'K. G. パレプ 他', description: '財務諸表を使って企業の実態を読み解く手法を体系的に学べるMBAの定番テキスト。', point: 'アカデミックかつ実践的な分析フレームワーク' },
  { title: '会計クイズを解くだけで財務3表がわかる 世界一楽しい決算書の読み方', author: '大手町のランダムウォーカー', description: 'クイズ形式で財務3表の読み方を学べる入門書。初心者でも楽しみながら理解できる。', point: '財務諸表の入門に最適。ゼミ生の最初の1冊' },
  { title: '金利を見れば投資はうまくいく', author: '堀井正孝', description: '金利と株式市場の関係を分かりやすく解説。マクロ経済の視点から投資判断を行う方法。', point: '金利と株価の関係を直感的に理解できる' },
  { title: 'マーケットの魔術師', author: 'ジャック・D・シュワッガー', description: 'トップトレーダーたちへのインタビュー集。多様な投資スタイルと共通する成功法則。', point: '成功する投資家に共通するマインドセットが学べる' },
  { title: '世界一やさしい米国経済の教科書', author: '田内学', description: '米国経済の仕組みを初心者向けに解説。FRBの金融政策や経済指標の読み方が学べる。', point: '米国経済を理解するための最初の一歩' },
];

/* ---------- おすすめWEBサイト ---------- */
const websites: Website[] = [
  { title: 'Bloomberg', url: 'https://www.bloomberg.co.jp/', description: '世界最大級の金融情報メディア。グローバルなマーケットニュース、経済指標、企業分析を網羅。プロの投資家も日常的に使用する。' },
  { title: 'Reuters（ロイター）', url: 'https://jp.reuters.com/', description: '国際的な通信社が運営するニュースサイト。速報性に優れ、グローバルな経済・金融ニュースをリアルタイムで配信。' },
  { title: 'Yahoo!ファイナンス', url: 'https://finance.yahoo.co.jp/', description: '株価チャート、財務データ、掲示板など。個人投資家の間で最もよく使われる情報サイト。無料で幅広い情報にアクセス可能。' },
  { title: '日経電子版', url: 'https://www.nikkei.com/', description: '日本経済新聞のオンライン版。マクロ経済から個別企業まで幅広くカバー。投資家必読の日本語メディア。' },
  { title: '東洋経済オンライン', url: 'https://toyokeizai.net/', description: '企業分析記事やビジネストレンドが充実。四季報を発行する東洋経済新報社が運営。独自取材の深掘り記事が強み。' },
  { title: 'EDINET', url: 'https://disclosure2.edinet-fsa.go.jp/', description: '金融庁が運営する有価証券報告書の閲覧サイト。企業分析の一次情報源として不可欠。無料で全上場企業の報告書が読める。' },
  { title: 'バフェット・コード', url: 'https://www.buffett-code.com/', description: '企業の財務データを視覚的に比較・分析できるツール。スクリーニング機能も搭載。無料で使える範囲が広い。' },
  { title: 'IR BANK', url: 'https://irbank.net/', description: '過去の決算データや財務指標を長期時系列で確認できる。PER・PBR・ROEの推移把握に便利。' },
  { title: 'TDnet（適時開示情報閲覧サービス）', url: 'https://www.release.tdnet.info/inbs/I_main_00.html', description: '東証が運営する適時開示システム。決算短信やIR資料をリアルタイムで確認できる。' },
  { title: 'マネックス銘柄スカウター', url: 'https://info.monex.co.jp/news/2019/20190212_01.html', description: '10年以上の財務データをグラフで確認できる。セグメント分析にも強い。マネックス証券の口座開設で無料。' },
  { title: 'Investopedia', url: 'https://www.investopedia.com/', description: '英語の投資用語辞典・学習サイト。金融知識の国際標準を学べる。英語に抵抗がなければ最高の学習リソース。' },
  { title: '投資の森', url: 'https://nikkeiyosoku.com/', description: '日経平均予想や経済指標カレンダーなど、マーケット情報を分かりやすくまとめたサイト。' },
];

/* ---------- YouTube動画 ---------- */
const youtubeChannels: YouTubeChannel[] = [
  { name: '両学長 リベラルアーツ大学', url: 'https://www.youtube.com/@ryogakucho', description: '「お金の大学」著者。投資の基礎から節約術、副業まで幅広くカバー。初心者に最も分かりやすいチャンネルの一つ。', feature: '初心者向け・網羅的' },
  { name: '中田敦彦のYouTube大学', url: 'https://www.youtube.com/@NKTofficial', description: '書籍の解説が中心。経済・投資関連の本を分かりやすくプレゼン形式で紹介。エンタメ性が高く入門に最適。', feature: '書籍解説・エンタメ性' },
  { name: '高橋ダン', url: 'https://www.youtube.com/@DanTakahashi', description: 'ウォール街出身の投資家。グローバルなマクロ経済分析と具体的な投資戦略を解説。英語圏の情報も取り入れている。', feature: 'グローバル視点・マクロ分析' },
  { name: 'バフェット太郎', url: 'https://www.youtube.com/@buffett_taro', description: '米国株投資の情報発信。高配当株やETFを中心とした長期投資戦略を解説。初心者にも分かりやすい語り口。', feature: '米国株・高配当投資' },
  { name: 'BANK ACADEMY / 小林亮平', url: 'https://www.youtube.com/@bankacademy', description: 'つみたてNISAやiDeCoなど、制度活用を中心に解説。投資初心者が最初に見るべきチャンネルとして人気。', feature: 'NISA・iDeCo・制度解説' },
  { name: '株の買い時を考えるチャンネル', url: 'https://www.youtube.com/@kabunokaidoki', description: '個別銘柄の分析やスクリーニング手法を丁寧に解説。ファンダメンタルズ分析の実践的な学びが得られる。', feature: '個別銘柄分析・スクリーニング' },
  { name: 'つばめ投資顧問', url: 'https://www.youtube.com/@tsubame1045', description: '元証券アナリストが企業分析の手法を本格的に解説。プロの視点からバリュー投資を学べる。', feature: 'プロの企業分析・バリュー投資' },
  { name: 'Zeppy投資ちゃんねる', url: 'https://www.youtube.com/@zeppy_investment', description: '井村俊哉氏が主宰。IR取材や企業分析のリアルを発信。実際の投資プロセスを追体験できる。', feature: 'IR取材・実践的企業分析' },
  { name: 'PIVOT', url: 'https://www.youtube.com/@pivot', description: 'ビジネスパーソン向けの経済メディア。著名な経営者や投資家のインタビューが豊富。マクロ経済やビジネストレンドの理解に。', feature: '経営者インタビュー・ビジネストレンド' },
  { name: 'Money Sense College', url: 'https://www.youtube.com/@MoneySenseCollege', description: '投資信託やインデックス投資を中心に、資産形成の王道を解説。データに基づいた冷静な分析が特徴。', feature: 'インデックス投資・資産形成' },
  { name: 'グローバルファイナンシャルスクール（GFS）', url: 'https://www.youtube.com/@glofinschool', description: '投資スクールが運営するチャンネル。体系的に投資知識を学べる講義形式の動画が多い。', feature: '体系的な投資教育' },
  { name: 'Ray Dalio（レイ・ダリオ）', url: 'https://www.youtube.com/@principlesbyraydalio', description: '世界最大級のヘッジファンド、ブリッジウォーター創業者。「経済のしくみ」は必見の名作動画。', feature: 'マクロ経済の本質・世界的投資家' },
];

/* ---------- Xユーザー ---------- */
const xAccounts: XAccount[] = [
  { handle: '@iimura_yui', displayName: '井村俊哉（Zeppy）', url: 'https://x.com/iimura_yui', description: '元お笑い芸人から投資家に転身。資産65万円を200億円に増やした伝説的な個人投資家。企業分析の深さに定評あり。' },
  { handle: '@buffett_taro', displayName: 'バフェット太郎', url: 'https://x.com/buffett_taro', description: '米国株投資ブロガー・YouTuber。高配当株を中心とした長期投資の情報を発信。初心者にも分かりやすい発信スタイル。' },
  { handle: '@Dan_Takahashi_', displayName: '高橋ダン', url: 'https://x.com/Dan_Takahashi_', description: 'ウォール街出身の投資家。グローバルなマクロ経済情報や投資戦略をタイムリーに発信。英語圏の情報にも強い。' },
  { handle: '@NIKKEI', displayName: '日本経済新聞 電子版', url: 'https://x.com/naborisan1', description: '日経新聞公式アカウント。マーケットニュース、経済指標、企業決算など速報性の高い情報をリアルタイムで配信。' },
  { handle: '@goto_finance', displayName: '後藤達也', url: 'https://x.com/goto_finance', description: '元日経新聞記者のジャーナリスト。経済ニュースを分かりやすく解説するスレッドが人気。速報性と解説力を兼ね備える。' },
  { handle: '@ohtpc', displayName: '大手町のランダムウォーカー', url: 'https://x.com/ohtpc', description: '「世界一楽しい決算書の読み方」著者。会計クイズで財務諸表の読み方を楽しく発信。ゼミ生にも馴染み深い。' },
  { handle: '@tabbata', displayName: '田端信太郎', url: 'https://x.com/tabbata', description: '元LINE・ZOZO役員。ビジネスや投資に関する歯に衣着せぬ発信。企業経営の裏側を知る視点が参考になる。' },
  { handle: '@kinaborisan1', displayName: 'きなぼり', url: 'https://x.com/kinaborisan1', description: '個別株の企業分析を中心に発信。決算短信の読み解きや業界分析の質が高い。中小型株の発掘に強み。' },
  { handle: '@parik_jp', displayName: 'パリク', url: 'https://x.com/parik_jp', description: 'ファンダメンタルズ分析に基づいた個別株投資を発信。論理的で丁寧な企業分析が特徴。' },
  { handle: '@ronaldread', displayName: 'ロナルドリード', url: 'https://x.com/ronaldread', description: '米国株を中心とした長期投資の情報を発信。バリュー投資の視点から銘柄分析を行う。' },
  { handle: '@saboryman_kabu', displayName: 'サラリーマン投資家', url: 'https://x.com/saboryman_kabu', description: '会社員をしながら投資を行う等身大の投資家。サラリーマン目線での投資判断や資産形成の情報が参考になる。' },
  { handle: '@kamiyama_nob', displayName: '上山信一（楽天証券）', url: 'https://x.com/kamiyama_nob', description: '楽天証券のチーフストラテジスト。マクロ経済やマーケット見通しをプロの視点で発信。' },
];

/* ---------- 教育コンテンツ掲載書籍（画像ベース） ---------- */
const educationBooks = {
  basics: {
    section: '株ってなに？',
    books: [
      { image: '/images/books/IMG_1278.JPG', description: 'テクニカル分析の決定版', priority: 1 as const },
      { image: '/images/books/book_new1.png', description: '株式投資の基礎', priority: 1 as const },
      { image: '/images/books/IMG_1268.JPG', description: 'バフェットの投資哲学', priority: 2 as const },
      { image: '/images/books/IMG_1270.JPG', description: '成長株投資の教科書', priority: 2 as const },
      { image: '/images/books/book_new2.png', description: '応用編', priority: 3 as const },
    ],
  },
  external: {
    section: '外部環境分析編',
    books: [
      { image: '/images/books/IMG_1276.JPG', description: '経済学の基礎を学ぶ', priority: 1 as const },
      { image: '/images/books/IMG_1273.JPG', description: '金利と経済の関係', priority: 2 as const },
      { image: '/images/books/IMG_1287.JPG', description: 'マクロ経済学の教科書①', priority: 2 as const },
      { image: '/images/books/IMG_1288.JPG', description: 'マクロ経済学の教科書②', priority: 2 as const },
      { image: '/images/books/IMG_1291.JPG', description: '業界の全体像を把握', priority: 3 as const },
    ],
  },
  screening: {
    section: 'スクリーニング編',
    books: [
      { image: '/images/books/IMG_1275.JPG', description: '四季報の読み方入門', priority: 1 as const },
      { image: '/images/books/IMG_1281.JPG', description: '最新の企業情報', priority: 2 as const },
      { image: '/images/books/IMG_1290.JPG', description: 'プロが選ぶ注目銘柄', priority: 2 as const },
    ],
  },
  internal: {
    section: '内部環境分析編',
    books: [
      { image: '/images/books/zaimu3.png', description: '財務諸表の基礎', priority: 1 as const },
      { image: '/images/books/IMG_1269.JPG', description: '決算書の読み方', priority: 1 as const },
      { image: '/images/books/IMG_1271.JPG', description: '実践的な分析手法', priority: 2 as const },
      { image: '/images/books/IMG_1272.JPG', description: '業界別の分析', priority: 2 as const },
      { image: '/images/books/IMG_1274.JPG', description: 'ビジネスモデル理解', priority: 3 as const },
      { image: '/images/books/IMG_1289.JPG', description: '収益構造の分析', priority: 3 as const },
      { image: '/images/books/book_new1.png', description: '応用編①', priority: 3 as const },
      { image: '/images/books/book_new2.png', description: '応用編②', priority: 3 as const },
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
    ],
  },
  external: {
    section: '外部環境分析編',
    videos: [
      { id: 'jmlpCcqkh5A', title: '日銀: ハト派vsタカ派の意味を理解できない人はダメ投資家です！', duration: '00:16:23' },
    ],
  },
  screening: {
    section: 'スクリーニング編',
    videos: [
      { id: '9CoLaONOEyE', title: '【東証が注意】PBR低い株は、なぜダメか？理由を解説します。', duration: '00:29:14' },
      { id: 'TkQPQzEhP1g', title: '超絶わかる！ROEの解説です', duration: '00:44:11' },
      { id: 'aV9cGgu6W2g', title: '【株仙人の道】資産250億円の片山晃が教えるPER活用の極意', duration: '00:45:51' },
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
    { title: '教育コンテンツ掲載書籍', id: 'education-books' },
    { title: 'おすすめWEBサイト', id: 'websites' },
    { title: 'YouTube動画', id: 'youtube' },
    { title: '教育コンテンツ掲載動画', id: 'education-videos' },
    { title: 'Xユーザー', id: 'x-accounts' },
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
                投資学習に役立つ書籍、WEBサイト、YouTube動画、Xアカウントをまとめました。<br />
                教育コンテンツと併せて活用し、理解を深めてください。
              </p>
            </ScrollFade>

            {/* ===== 参考書籍 ===== */}
            <section id="books">
              <ScrollFade>
                <Accordion title="参考書籍" defaultOpen={true}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    投資の理論と実践を体系的に学べる書籍を厳選しました。まずは気になる1冊から手に取ってみてください。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {books.map((book, i) => (
                      <div
                        key={i}
                        className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">{book.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3">{book.description}</p>
                        <div className="flex items-start gap-2">
                          <span className="inline-block text-xs font-semibold bg-gradient-to-r from-[#0A5046] to-[#1E4535] text-white px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                            おすすめ
                          </span>
                          <p className="text-sm text-[#0A5046] font-medium">{book.point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== 教育コンテンツ掲載書籍 ===== */}
            <section id="education-books">
              <ScrollFade delay={50}>
                <Accordion title="教育コンテンツ掲載書籍" defaultOpen={false}>
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

            {/* ===== おすすめWEBサイト ===== */}
            <section id="websites">
              <ScrollFade delay={100}>
                <Accordion title="おすすめWEBサイト" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    企業分析・スクリーニング・マクロ経済の情報収集に役立つサイトです。ブックマーク推奨。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {websites.map((site, i) => (
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
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== YouTube動画 ===== */}
            <section id="youtube">
              <ScrollFade delay={200}>
                <Accordion title="YouTube動画" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    投資学習に役立つYouTubeチャンネルを厳選しました。通学中や空き時間にぜひ。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {youtubeChannels.map((channel, i) => (
                      <a
                        key={i}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 hover:border-red-400/30 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-red-500 text-xl flex-shrink-0">&#9654;</span>
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{channel.name}</h4>
                          </div>
                          <span className="text-gray-400 flex-shrink-0 text-sm mt-1">&#8599;</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3 text-sm md:text-base">{channel.description}</p>
                        <div className="mt-3">
                          <span className="inline-block text-xs font-semibold bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">
                            {channel.feature}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </Accordion>
              </ScrollFade>
            </section>

            {/* ===== 教育コンテンツ掲載動画 ===== */}
            <section id="education-videos">
              <ScrollFade delay={250}>
                <Accordion title="教育コンテンツ掲載動画" defaultOpen={false}>
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

            {/* ===== Xユーザー ===== */}
            <section id="x-accounts" className="mb-16">
              <ScrollFade delay={300}>
                <Accordion title="Xユーザー" defaultOpen={false}>
                  <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
                    投資・企業分析の情報発信をしているXアカウントです。タイムラインで日常的に情報をキャッチしましょう。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {xAccounts.map((account, i) => (
                      <a
                        key={i}
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 hover:border-gray-400/50 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{account.displayName}</h4>
                            <p className="text-sm text-blue-500 font-mono">{account.handle}</p>
                          </div>
                          <span className="text-gray-400 flex-shrink-0 text-sm mt-1">&#8599;</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3 text-sm md:text-base">{account.description}</p>
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
