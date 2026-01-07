import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على متجر متجري الإلكتروني. نحن نقدم أفضل المنتجات الإلكترونية بأسعار منافسة وجودة عالية.",
  keywords: ["من نحن", "عن المتجر", "متجري", "متجر إلكتروني"],
  openGraph: {
    title: "من نحن | متجري",
    description: "تعرف على متجر متجري الإلكتروني.",
    url: `${baseUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "من نحن | متجري",
    description: "تعرف على متجر متجري الإلكتروني.",
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};
