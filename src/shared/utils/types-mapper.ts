import { Product, ProductProps } from "@/types/products";

export function mapTypes(p: Product): ProductProps {
  return {
    id: String(p.id),
    title: p.title,
    description: p.description,
    price: p.price,
    imageUrl: p.thumbnail,
    category: p.category,
    rating: p.rating,
    inStock: p.stock > 0,
  };
}
