"use client";

import { useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  /** Есть ли ещё страницы для подгрузки. Если false — наблюдатель не ставим. */
  hasMore: boolean;
  /** Отступ для IntersectionObserver. */
  rootMargin?: string;
  /** Что делать, когда "маячок" попал в зону видимости. */
  onLoadMore: () => void | Promise<unknown>;
}

/**
 * Хук для бесконечной прокрутки.
 * Возвращает ref, который нужно повесить на элемент-маячок внизу списка.
 */
export function useInfiniteScroll({
  hasMore,
  rootMargin = "200px",
  onLoadMore,
}: UseInfiniteScrollOptions) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore) return;

    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          void onLoadMore();
        }
      },
      { rootMargin },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMore, rootMargin, onLoadMore]);

  return { sentinelRef };
}
