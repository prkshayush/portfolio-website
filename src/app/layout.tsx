import type { Metadata } from "next";
import { Reddit_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const reddit_mono = Reddit_Mono({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Ayush Prakash",
  description: "Portfolio of Ayush Prakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={reddit_mono.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
