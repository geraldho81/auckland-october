import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auckland, October · dates TBA | Gerald Ho",
  icons: { icon: "/favicon.svg" },
  description:
    "A first-person six-day plan for Auckland in October: Waitemata Harbour, Rangitoto, Ponsonby and K Road, Waiheke, Piha, and Devonport. Dates TBA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${source.variable}`}>
      <body className="bg-sand text-foam font-body antialiased">{children}</body>
    </html>
  );
}
