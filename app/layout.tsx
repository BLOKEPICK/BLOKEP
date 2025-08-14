import type { Metadata } from "next";
import "./../styles/globals.css";
import { Rubik, Roboto } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const roboto = Roboto({ weight: ["300","400","500","700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "D-Essence Wellness | Aerolase Laser | Skin Care | Cosmetic Injectables",
  description: "At D-Essence Wellness, we enhance your beauty with Aerolase laser, skin care, and cosmetic injectables.",
  robots: "index,follow"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${rubik.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
