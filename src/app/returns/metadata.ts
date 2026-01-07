import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "سياسة الإرجاع",
  description: "تعرف على سياسة الإرجاع والاستبدال في متجر متجري. شروط الاسترجاع والمدد الزمنية.",
  keywords: ["سياسة الإرجاع", "الاستبدال", "استرجاع المنتجات"],
  openGraph: {
    title: "سياسة الإرجاع | متجري",
    description: "تعرف على سياسة الإرجاع والاستبدال.",
    url: `${baseUrl}/returns`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/returns`,
  },
};
