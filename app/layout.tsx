import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Self-hosted Geist from the `geist` package (same --font-geist-sans variable),
// so builds never need to reach Google Fonts
const geistSans = GeistSans;


export const metadata: Metadata = {
  title: "Duhingeneza Shop",
  description: "Duhingeneza Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
