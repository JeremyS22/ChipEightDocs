import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google' 
import "./globals.css"; 
import HeaderBar from "../../components/HeaderBar";
import FooterBar from "../../components/FooterBar"; 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'}); 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChipEightDocs",
  description: "Documentation, blogs and more for the ChipEight emulator",
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>

  ) {

  let siteHeader: React.ReactElement = (
    <div>
      <header>
        <HeaderBar/> 
      </header>
    </div>
  );

  let siteFooter: React.ReactElement = (
    <footer>
      < FooterBar /> 
    </footer>
  );


  return (
    <html lang="en" className={inter.className}>    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {siteHeader}
        {children}
        {siteFooter}
      </body>
    </html>
  );
}
