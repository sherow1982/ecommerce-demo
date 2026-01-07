import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "سياسة الشحن",
  description: "تعرف على سياسة الشحن والتوصيل في متجر متجري. أوقات التوصيل والرسوم والمناطق التي نخدمها.",
  keywords: ["سياسة الشحن", "التوصيل", "الشحن", "توصيل سريع"],
  openGraph: {
    title: "سياسة الشحن | متجري",
    description: "تعرف على سياسة الشحن والتوصيل.",
    url: `${baseUrl}/shipping`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/shipping`,
  },
};
