import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ozuna Construction LLC – Roofing, Siding & Remodeling in Columbus, OH",
  description: "Licensed & Insured contractor offering roofing, siding, framing, carpentry & remodeling in Columbus, OH.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
