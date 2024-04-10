import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedSchedule",
  description: "Sistema de Agendamento de consultas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-slate-950", inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
