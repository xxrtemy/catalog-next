"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { ProductCard } from "@/shared";
import { Skeleton } from "@/shared/ui";
import type { ProductProps } from "@/types/products";
import { PAGE_SIZE, getProducts, useInfiniteScroll } from "@/shared";

export function Catalog() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getProducts(pageParam as number),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => (lastPage.nextSkip === null ? undefined : lastPage.nextSkip),
    });

  const { sentinelRef } = useInfiniteScroll({
    hasMore: !!hasNextPage,
    rootMargin: "200px",
    onLoadMore: () => fetchNextPage(),
  });

  const products: ProductProps[] = data?.pages.flatMap((page) => page.items) ?? [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <Skeleton key={i} className="h-72 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="mt-4 text-sm text-red-500">
        Не удалось загрузить товары. Попробуйте обновить страницу.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={sentinelRef} className="h-8" />

      {isFetchingNextPage && (
        <div className="mt-4 text-center text-sm text-muted-foreground">Загрузить ещё...</div>
      )}

      {!hasNextPage && products.length > 0 && (
        <div className="mt-4 text-center text-xs text-muted-foreground">Это все товары</div>
      )}
    </>
  );
}
