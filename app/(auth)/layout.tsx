import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie App-AK",
  description: "Movis App built with Next.js and Tailwind CSS by AK ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="mt-20"></div>
      </body>
    </html>
  );
}
