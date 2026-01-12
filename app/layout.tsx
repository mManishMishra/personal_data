import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Our Diary",
  description: "For My Yashi ❤️ — A journey of us.",
  // This fixes the Browser Tab Icon
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪶</text></svg>",
  },
  // This fixes the WhatsApp Preview Card
  openGraph: {
    title: "Our Diary",
    description: "For My Yashi ❤️ — All our memories in one place.",
    images: [
      {
        // A beautiful Peacock Feather image from Unsplash
        url: "https://images.unsplash.com/photo-1534234828563-0df5067206db?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Peacock Feather",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}