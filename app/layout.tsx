import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import "./globals.css";

const getCairo = Cairo({
  variable: "--font-getCairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio Developer",
  description: "Check the portfolio of Antonio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${ getCairo.variable } px-14 py-7 antialiased`}
      >
        { children }
      </body>
    </html>
  );
}
