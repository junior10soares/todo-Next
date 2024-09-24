import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    template: '%s | toDo-Next',
    default: 'toDo',
  },
}

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
