# 完全実装漏れリスト（詳細版）

## 🔴 大きな実装漏れ

### 1. **YouTube動画埋め込み（最重要）**
**場所**: 各セクションの「参考書籍」の下
**内容**: 8本のYouTube動画（tabata-videos）
- `1h-oUrtFMeg` - まだ投資を始めていない人、必ず見てください。(11:55)
- `0rPL8ycM-Cg` - 「市場価値」を具体的に説明できますか？(10:27)
- `Smb-AXFwAfY` - PERとは？プロが使う株価を決める公式を解説(24:51)
- `B5Rg5sT_TmY` - 損切り下手よ！早く株初心者から抜けだせ！！(16:34)
- `0os5k6wBhIs` - 好決算でも株価が下がる理由について解説(21:49)
- `nA3NVxG28vQ` - 好決算でも株価が下がるワケ(31:27)
- `ydPKNjSldR4` - グロース株とバリュー株どっちを買うべき？(15:08)
- `sb3v8Ytdmng` - スマホで2億円を稼いだ天才ママに「チャート分析」を徹底解説(33:06)

**実装箇所**:
- basicsセクション（株ってなに？）の最後
- flowセクション（企業分析の流れ）の最後
- externalセクション（外部環境分析編）の最後
- screeningセクション（スクリーニング編）の最後
- internalセクション（内部環境分析編）の最後
- event-drivenセクション（イベントドリブン編）の最後

**デザイン**:
```css
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.video-card {
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  hover: translateY(-3px);
}

/* YouTubeアイコン（赤い再生ボタン） */
.video-card::before { /* 赤い背景 */ }
.video-card::after { /* 白い三角 */ }
```

**サムネイル画像**: `images/tabata-videos/[動画ID].jpg`

---

### 2. **参考書籍セクション**
**場所**: 各セクションの最後（動画の上）
**内容**: 5冊の書籍表紙画像 + 説明

**basicsセクション**:
- `images/books/IMG_1278.JPG` - テクニカル分析の決定版
- `images/books/book_new1.png` - 株式投資の基礎
- `images/books/IMG_1268.JPG` - バフェットの投資哲学
- `images/books/IMG_1270.JPG` - 成長株投資の教科書
- `images/books/book_new2.png` - 応用編

**デザイン**:
```css
.book-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.book-cover {
  flex: 0 0 calc(20% - 13px);  /* 5列 */
  cursor: pointer;
  hover: scale(1.05);
}

.book-description {
  position: absolute;
  bottom: 0;
  opacity: 0;
  hover: opacity: 1;
}
```

**優先度**:
- `data-priority="1"` - 常に表示
- `data-priority="2"` - 中優先
- `data-priority="3"` - 低優先

---

### 3. **card-grid-vertical（縦型カードグリッド）**
**場所**: flowセクション（企業分析の流れ）
**内容**: STEP1〜4を縦に並べたカード

**実装漏れ**: 現在は横並びの`card-grid`になっている

**正しいデザイン**:
```css
.card-grid-vertical {
  display: flex;
  flex-direction: column;  /* 縦並び */
  gap: 20px;
}
```

---

### 4. **glossary-termの大量実装漏れ**
**問題**: 現在1つしか実装されていない

**必要な箇所**（全セクションの専門用語）:
- 株式
- 配当
- 株価
- キャピタルゲイン
- インカムゲイン
- ファンダメンタルズ
- テクニカル分析
- スクリーニング
- 5フォース
- PER（株価収益率）
- PBR（株価純資産倍率）
- ROE（自己資本利益率）
- ビジネスモデル
- M&A
- TOB
- MBO

**実装方法**:
```tsx
<span className="glossary-term" data-definition="説明文">専門用語</span>
```

---

## 🟡 中程度の実装漏れ

### 5. **section-label（ラベルバッジ）**
**場所**: highlight-box, info-box の中
**種類**:
- `label-essence` - 本質
- `label-column` - 補足
- `label-important` - 重要

**デザイン**:
```css
.section-label {
  display: inline-flex;
  padding: 4px 12px;
  background: linear-gradient(...);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}
```

**実装箇所**: 約20箇所

---

### 6. **reading-time-inline（読了時間）**
**場所**: 各セクションのh2の中
**内容**: `<span class="reading-time-inline">読了時間 5分</span>`

**現状**: Accordionのtitleに直接書いているが、別スタイルが必要

**デザイン**:
```css
.reading-time-inline {
  font-size: 14px;
  color: rgba(0,0,0,0.5);
  font-weight: 400;
  margin-left: 12px;
}
```

---

### 7. **info-boxとhighlight-boxの細かいバリエーション**
**種類**:
- highlight-box（ハイライトボックス）- 青/緑/黄色/紫
- info-box（情報ボックス）- 灰色背景
- card（カード）- 白背景 + 影
- card-grid（カードグリッド）- 横並び
- card-grid-vertical（カードグリッド縦）- 縦並び

**現状**: 色のバリエーションが不足

---

### 8. **マトリックス図解（insights）**
**問題**: 19のインサイトは実装したが、マトリックス図解が未実装

**必要な実装**:
```tsx
<div className="insight-matrix-v4">
  {/* CSS Grid: 19列 x 5行 */}
  {/* ヘッダー行: 外部環境 | ビジネスモデル | 経営資源 */}
  {/* 行ヘッダー: 市場拡大 | シェア拡大 | 利益率向上 */}
  {/* セル: 19個のインサイト */}
</div>
```

**デザイン**:
```css
.insight-matrix-v4 {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 2px;
}
```

---

## 🟢 小さな実装漏れ

### 9. **PDFファイルのコピー**
**問題**: `/quiz1.pdf`, `/quiz2.pdf` が存在しない

**必要な作業**:
```bash
cp /Users/sugimotoaoi/Desktop/tplus-site/quiz1.pdf public/
cp /Users/sugimotoaoi/Desktop/tplus-site/quiz2.pdf public/
```

---

### 10. **画像ファイルのコピー**
**問題**: `images/tabata-videos/*.jpg` が未コピー

**必要な作業**:
```bash
cp -r /Users/sugimotoaoi/Desktop/tplus-site/images/tabata-videos public/images/
cp -r /Users/sugimotoaoi/Desktop/tplus-site/images/books public/images/
```

---

### 11. **hero画像（education.htmlのヒーロー背景）**
**問題**: education.htmlのヒーローセクションに背景画像がない

**画像**:
- `images/hero-1.jpg`
- `images/hero-2.jpg`
- `images/hero-3.jpg`
- `images/hero-4.jpg`

---

### 12. **スムーススクロール時のオフセット調整**
**問題**: サイドバーからセクションにジャンプした時の位置が微妙にずれる

**修正**:
```tsx
const offsetTop = element.offsetTop - 90;  // ヘッダー分を考慮
```

---

### 13. **progress-check（読了チェックマーク）**
**場所**: サイドバーのリンク
**内容**: 一度訪れたセクションに「✓」マークを表示

**実装**:
```tsx
if (!link.querySelector('.progress-check')) {
  const checkMark = document.createElement('span');
  checkMark.className = 'progress-check';
  checkMark.textContent = '✓ ';
  link.prepend(checkMark);
}
```

---

### 14. **Accordionの「事例を見る」ボタン**
**場所**: `<strong>例：</strong>` を含むp要素
**機能**: クリックで事例部分を展開/折りたたみ

**実装**:
```tsx
<div className="example-container">
  <button className="example-toggle-btn">
    <span className="arrow">▶</span> 事例を見る
  </button>
  <div className="example-content">
    {/* 事例テキスト */}
  </div>
</div>
```

---

### 15. **reference-sectionのタイトル**
**場所**: 参考書籍セクション
**内容**: `<h3>もっと詳しく学びたい方へ</h3>`

**現状**: 実装されていない

---

## 📋 実装優先順位

### 🔥 P0（最優先 - ユーザー体験に直結）
1. **YouTube動画埋め込み** - 学習コンテンツの核心
2. **参考書籍セクション** - 学習の次のステップ
3. **PDFファイルコピー** - テストリンクが壊れている
4. **画像ファイルコピー** - 動画サムネイルが表示されない

### 🟡 P1（優先 - 完成度向上）
5. **glossary-termの全実装** - 専門用語の理解支援
6. **section-labelの実装** - 視覚的な強調
7. **card-grid-verticalの修正** - レイアウトの正確性
8. **reading-time-inlineのスタイル** - 情報の明確化

### 🟢 P2（通常 - 細かい改善）
9. **マトリックス図解** - insightsセクションの視覚化
10. **「事例を見る」ボタン** - コンテンツの整理
11. **progress-check** - 学習進捗の可視化
12. **スムーススクロールの微調整** - UX向上

---

## 📊 実装率

| カテゴリ | 実装済み | 未実装 | 進捗率 |
|---------|---------|--------|--------|
| レイアウト | 9 | 3 | 75% |
| コンテンツ | 6 | 8 | 43% |
| インタラクション | 5 | 4 | 56% |
| アセット | 2 | 4 | 33% |
| **全体** | **22** | **19** | **54%** |

---

## 🔧 即座に修正すべきこと

### 1. ファイルコピー（5分）
```bash
cd /Users/sugimotoaoi/Desktop/tplus-site
cp quiz1.pdf quiz2.pdf ../tplus-site-nextjs/public/
cp -r images/tabata-videos ../tplus-site-nextjs/public/images/
cp -r images/books ../tplus-site-nextjs/public/images/
```

### 2. YouTube動画コンポーネント作成（15分）
```tsx
// components/ui/VideoGrid.tsx
interface Video {
  id: string;
  title: string;
  duration: string;
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 mt-5">
      {videos.map(v => (
        <a
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.id}`}
          target="_blank"
          className="relative bg-white rounded-lg shadow-md hover:-translate-y-1 transition-transform"
        >
          <img src={`/images/tabata-videos/${v.id}.jpg`} className="w-full" />
          <div className="absolute top-2 left-2 w-7 h-5 bg-red-600 rounded"></div>
          <div className="absolute top-[14px] left-[18px] w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
          <div className="p-2 text-xs leading-tight">{v.title}</div>
          <div className="px-2 pb-2 text-[10px] text-gray-600">{v.duration}</div>
        </a>
      ))}
    </div>
  );
}
```

### 3. 参考書籍コンポーネント作成（10分）
```tsx
// components/ui/BookGrid.tsx
interface Book {
  image: string;
  description: string;
  priority: 1 | 2 | 3;
}

export default function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {books.map((b, i) => (
        <div
          key={i}
          className="relative flex-[0_0_calc(20%-13px)] cursor-pointer hover:scale-105 transition-transform"
        >
          <img src={b.image} className="w-full rounded shadow-md" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-xs text-center rounded-b opacity-0 hover:opacity-100 transition-opacity">
            {b.description}
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

**作成日**: 2026-04-24  
**調査範囲**: education.html (全1655行) + enhanced-features.css  
**画像ファイル**: 28個（tabata-videos） + 28個（books）  
**PDFファイル**: 2個（quiz1, quiz2）
