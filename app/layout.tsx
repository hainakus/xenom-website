import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "XENOMORPH V3.0.0 — Genome-PoW Blockchain",
  description: "XENOMORPH V3.0.0 introduces an evolutionary Proof-of-Work mechanism based on deterministic transformations derived from the human genome reference (GRCh38). Memory-hard, ASIC-resistant, adaptive.",
  keywords: ["xenomorph", "blockchain", "cryptocurrency", "proof-of-work", "genome", "GRCh38", "XENOM"],
  authors: [{ name: "XENOMORPH Team" }],
  openGraph: {
    title: "XENOMORPH V3.0.0 — Genome-PoW Blockchain",
    description: "Evolutionary Proof-of-Work based on the human genome. Memory-hard. ASIC-resistant. Adaptive.",
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
        {children}
      </body>
    </html>
  );
}
