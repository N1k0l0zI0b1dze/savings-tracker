import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-variable",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savings Tracker",
  description: "Track savings goals and deposits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-inter antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
