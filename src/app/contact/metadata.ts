import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل معنا عبر البريد الإلكتروني أو الهاتف. فريق خدمة العملاء جاهز لمساعدتك على مدار الساعة.",
  keywords: ["اتصل بنا", "تواصل", "خدمة العملاء", "دعم فني"],
  openGraph: {
    title: "اتصل بنا | متجري",
    description: "تواصل معنا عبر البريد الإلكتروني أو الهاتف.",
    url: `${baseUrl}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};
