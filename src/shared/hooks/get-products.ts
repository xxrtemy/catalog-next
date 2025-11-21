// src/lib/services/products-service.ts

import type { ProductsResponse, ProductsPageResponse, ProductProps } from "@/types";
import { mapTypes } from "../utils";

export const PRODUCTS_PAGE_SIZE = 12;

/**
 * Загружает одну "страницу" товаров с публичного API DummyJSON
 * и приводит данные к внутреннему формату ProductProps.
 */
export async function getProducts(
  skip: number,
  limit: number = PRODUCTS_PAGE_SIZE,
): Promise<ProductsPageResponse> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  const json: ProductsResponse = await res.json();

  const items: ProductProps[] = json.products.map(mapTypes);

  const nextSkip = json.skip + json.limit < json.total ? json.skip + json.limit : null;

  return {
    items,
    total: json.total,
    nextSkip,
  };
}
