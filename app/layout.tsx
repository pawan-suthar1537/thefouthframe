import type { Metadata } from "next";
import "./globals.css";
import HashScrollManager from "./components/HashScrollManager";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getSiteContent } from "./lib/data";

export const metadata: Metadata = {
  title: "THE FOURTH FRAME | Luxury Modeling, Talent & Production",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let content = null;
  try {
    content = await getSiteContent();
  } catch {
    // DB not seeded yet — fallback handled in components
  }

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased">
        <HashScrollManager />
        {content && <Navbar site={content.site} />}
        {children}
        {content && (
          <Footer
            site={content.site}
            socialLinks={content.socialLinks}
            footer={content.footer}
          />
        )}
      </body>
    </html>
  );
}
