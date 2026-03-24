import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fourth Frame | Professional Shoots & Digital Strategy",
  description:
    "Crafting stories, one frame at a time. Professional photography, videography, and digital strategy. From concept to creation — let us visualize your brand.",
  keywords: [
    "photography", "videography", "bridal photography", "fashion photography",
    "digital strategy", "social media management", "brand strategy",
    "content creation", "the fourth frame",
  ],
  openGraph: {
    title: "The Fourth Frame | Professional Shoots & Digital Strategy",
    description: "Crafting stories, one frame at a time. Professional photography, videography, and digital strategy.",
    type: "website",
    locale: "en_US",
    siteName: "The Fourth Frame",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..700;1,400..500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
