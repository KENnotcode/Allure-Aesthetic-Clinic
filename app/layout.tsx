import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { cardConfig } from "@/config/card.config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${cardConfig.profile.name} — ${cardConfig.profile.title}`,
  description: cardConfig.profile.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-dvh bg-surface text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
