import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "شروط الاستخدام",
  description: "اقرأ شروط وأحكام استخدام متجر متجري الإلكتروني.",
  keywords: ["شروط الاستخدام", "الأحكام", "قوانين المتجر"],
  openGraph: {
    title: "شروط الاستخدام | متجري",
    description: "اقرأ شروط وأحكام استخدام المتجر.",
    url: `${baseUrl}/terms`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};
