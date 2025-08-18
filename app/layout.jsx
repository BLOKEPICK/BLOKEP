import "./globals.css";

export const metadata = {
  title: "Ozuna Construction LLC – Roofing, Siding & Remodeling in Columbus, OH",
  description: "Licensed & Insured contractor offering roofing, siding, framing, carpentry & remodeling in Columbus, OH.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
