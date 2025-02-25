import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';





const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-GustavoNeira",
  description: "Portfolio made by Gustavo Neira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavBar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
