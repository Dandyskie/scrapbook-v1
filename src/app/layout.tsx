/**
 * Root Layout
 * - Configures typography (Cormorant Garamond, Plus Jakarta Sans, Caveat)
 * - Sets up page metadata, responsive viewport, and scrapbook theme background
 */
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const handwrittenFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Story for Nabila — Digital Scrapbook",
  description: "Sebuah catatan kecil tentang momen-momen berharga dan hal-hal sederhana yang membuat hari-hari terasa lebih hangat.",
  openGraph: {
    title: "A Story for Nabila",
    description: "Sebuah scrapbook kenangan dan cerita yang hangat.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F5F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${serifFont.variable} ${sansFont.variable} ${handwrittenFont.variable}`}
    >
      <body className="bg-[#F8F5F0] text-[#292625] font-sans antialiased selection:bg-[#E8DFD5] selection:text-[#292625] min-h-screen">
        {children}
      </body>
    </html>
  );
}
