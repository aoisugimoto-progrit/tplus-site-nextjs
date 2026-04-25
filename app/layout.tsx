import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "瀧本ゼミ企業分析パート T＋",
  description: "瀧本ゼミにおける新入生教育の総称。投資の原理原則、業界研究、学習ロードマップを学べます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
