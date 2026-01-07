import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
