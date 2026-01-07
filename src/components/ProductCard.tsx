import Link from "next/link";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.nameAr}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          {product.stock < 10 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              متبقي قليل
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
            {product.nameAr}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.descriptionAr}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 space-x-reverse">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.rating}
            </span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
