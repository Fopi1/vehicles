import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrain-mono",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy New & Used Cars — Best Deals, Verified Listings",
  description:
    "Explore top offers on new and used cars. Verified vehicle history, smart search, nationwide delivery, and expert support from start to finish.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${JetbrainsMono.className}`}>
      <body>{children}</body>
    </html>
  );
}
