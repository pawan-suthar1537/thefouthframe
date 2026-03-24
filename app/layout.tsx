import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "The Fourth Frame | Professional Shoots & Digital Strategy",
  description:
    "Crafting stories, one frame at a time. Professional photography, videography, and digital strategy for brands that need a sharper visual presence.",
  keywords: [
    "photography",
    "videography",
    "bridal photography",
    "fashion photography",
    "digital strategy",
    "social media management",
    "brand strategy",
    "content creation",
    "the fourth frame",
  ],
  openGraph: {
    title: "The Fourth Frame | Professional Shoots & Digital Strategy",
    description:
      "Crafting stories, one frame at a time. Professional photography, videography, and digital strategy.",
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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
