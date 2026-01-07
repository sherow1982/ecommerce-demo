import { Metadata } from "next";
import { products } from "@/lib/data";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com';

  if (!product) {
    return {
      title: "المنتج غير موجود",
    };
  }

  return {
    title: product.nameAr,
    description: product.descriptionAr.substring(0, 160),
    keywords: [product.name, product.nameAr, product.category, "متجر إلكتروني", "تسوق أونلاين"],
    openGraph: {
      title: product.nameAr,
      description: product.descriptionAr.substring(0, 160),
      url: `${baseUrl}/product/${product.id}`,
      siteName: "متجري",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.nameAr,
        },
      ],
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.nameAr,
      description: product.descriptionAr.substring(0, 160),
      images: [product.image],
    },
    alternates: {
      canonical: `${baseUrl}/product/${product.id}`,
    },
  };
}
