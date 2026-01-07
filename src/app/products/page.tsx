import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { BreadcrumbSchema } from "@/components/Schema";

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "المنتجات", item: "/products" },
        ]}
      />
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            جميع المنتجات
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
