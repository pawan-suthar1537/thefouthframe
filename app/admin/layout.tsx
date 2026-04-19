import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | THE FOURTH FRAME",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A" }}>
      {children}
    </div>
  );
}
