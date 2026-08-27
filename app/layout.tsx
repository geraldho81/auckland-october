import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
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
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-mist text-ink font-body antialiased">{children}</body>
    </html>
  );
}
