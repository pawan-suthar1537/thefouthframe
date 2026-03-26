import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "THE AGENCY FRAME | Luxury Modeling, Talent & Production",
  description:
    "An ultra-luxury, high-end Modeling, Talent, and Production Agency. Managing the frame, elevating every vision with elite models and prime locations.",
  keywords: [
    "modeling agency",
    "talent management",
    "production studio",
    "luxury fashion",
    "bridal production",
    "prime locations",
    "THE AGENCY FRAME",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
