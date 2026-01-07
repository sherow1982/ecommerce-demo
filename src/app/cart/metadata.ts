import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "سلة التسوق",
  description: "استعرض المنتجات المضافة إلى سلة التسوق الخاصة بك وأكمل عملية الشراء.",
  openGraph: {
    title: "سلة التسوق | متجري",
    description: "استعرض المنتجات المضافة إلى سلة التسوق.",
    url: `${baseUrl}/cart`,
  },
  alternates: {
    canonical: `${baseUrl}/cart`,
  },
};
