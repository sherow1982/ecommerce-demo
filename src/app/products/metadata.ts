import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "جميع المنتجات",
  description: "تصفح جميع المنتجات المتوفرة في متجرنا الإلكتروني. سماعات، ساعات ذكية، أكسسوارات وأجهزة إلكترونية بأفضل الأسعار.",
  keywords: ["منتجات", "تسوق", "أجهزة إلكترونية", "أكسسوارات", "ساعات ذكية"],
  openGraph: {
    title: "جميع المنتجات | متجري",
    description: "تصفح جميع المنتجات المتوفرة في متجرنا الإلكتروني.",
    url: `${baseUrl}/products`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-products.jpg`,
        width: 1200,
        height: 630,
        alt: "جميع المنتجات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "جميع المنتجات | متجري",
    description: "تصفح جميع المنتجات المتوفرة في متجرنا الإلكتروني.",
    images: [`${baseUrl}/og-products.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
};
