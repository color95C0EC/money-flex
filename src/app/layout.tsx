import type { Metadata } from "next";
import {fontZenMaruG} from "@/app/styles/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyFlex",
  description: "お金欲しい！！！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${fontZenMaruG.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
