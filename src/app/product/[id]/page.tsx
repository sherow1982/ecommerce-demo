"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { BreadcrumbSchema } from "@/components/Schema";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.nameAr,
        alternateName: product.name,
        description: product.descriptionAr,
        image: product.image,
        offers: {
          "@type": "Offer",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}/product/${product.id}`,
          priceCurrency: "USD",
          price: product.price,
          priceValidUntil: "2027-12-31",
          availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "متجري",
          },
        },
        brand: {
          "@type": "Brand",
          name: "متجري",
        },
        category: product.category,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: Math.floor(Math.random() * 100) + 50,
          bestRating: 5,
          worstRating: 1,
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">المنتج غير موجود</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "المنتجات", item: "/products" },
          { name: product.nameAr, item: `/product/${product.id}` },
        ]}
      />
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-block mb-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← العودة للمنتجات
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.nameAr}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.nameAr}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {product.descriptionAr}
              </p>

              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl">★</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300 font-semibold">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.stock} متوفر)
                </span>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse mb-8">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {product.stock === 0 ? "غير متوفر" : "أضف للسلة"}
              </button>

              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  المميزات:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>✓ شحن مجاني للطلبات فوق $100</li>
                  <li>✓ ضمان لمدة سنة</li>
                  <li>✓ إرجاع مجاني خلال 30 يوم</li>
                  <li>✓ دعم فني على مدار الساعة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
