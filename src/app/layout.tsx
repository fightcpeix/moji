import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moji House - Revolutionizing Real Estate with Blockchain",
  description: "Join the future of real estate with Moji House. A blockchain-powered platform using MOJI Token to build transparency, trust, and efficiency in property transactions.",
  keywords: "blockchain, real estate, MOJI token, cryptocurrency, property, NFT, smart contracts",
  authors: [{ name: "Moji House" }],
  openGraph: {
    title: "Moji House - Blockchain Real Estate Platform",
    description: "Revolutionizing real estate with blockchain technology and MOJI Token",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
