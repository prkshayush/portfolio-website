import type { Metadata } from "next";
import { Reddit_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
