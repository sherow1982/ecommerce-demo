import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "متجري - متجر إلكتروني احترافي",
    template: "%s | متجري",
  },
  description: "متجر إلكتروني احترافي يوفر أفضل المنتجات الإلكترونية بأسعار منافسة وجودة عالية. شحن سريع ودفع آمن.",
  keywords: ["متجر إلكتروني", "تسوق أونلاين", "منتجات إلكترونية", "سماعات", "ساعات ذكية", "أجهزة", "أكسسوارات"],
  authors: [{ name: "متجري" }],
  creator: "متجري",
  publisher: "متجري",

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: baseUrl,
    title: "متجري - متجر إلكتروني احترافي",
    description: "متجر إلكتروني احترافي يوفر أفضل المنتجات الإلكترونية بأسعار منافسة وجودة عالية. شحن سريع ودفع آمن.",
    siteName: "متجري",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "متجري - متجر إلكتروني احترافي",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "متجري - متجر إلكتروني احترافي",
    description: "متجر إلكتروني احترافي يوفر أفضل المنتجات الإلكترونية بأسعار منافسة وجودة عالية.",
    images: [`${baseUrl}/twitter-image.jpg`],
    creator: "@myshop",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
  },

  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
