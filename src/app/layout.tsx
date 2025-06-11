import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Edson Cândido - Desenvolvedor Full Stack",
  description: "Portfólio profissional de Edson Cândido, desenvolvedor Full Stack com experiência em React, Next.js, TypeScript e mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans bg-background text-text`}>{children}</body>
    </html>
  );
}
