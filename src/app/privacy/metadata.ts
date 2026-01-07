import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "تعرف على سياسة الخصوصية الخاصة بمتجري. كيف نجمع ونستخدم ونحمي معلوماتك الشخصية.",
  keywords: ["سياسة الخصوصية", "حماية البيانات", "أمان المعلومات"],
  openGraph: {
    title: "سياسة الخصوصية | متجري",
    description: "تعرف على سياسة الخصوصية الخاصة بمتجري.",
    url: `${baseUrl}/privacy`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
};
