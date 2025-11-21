"use client";

import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from "@/shared";
import Image from "next/image";
import { ProductCardProps } from "./interface";
import { cn } from "@/lib/utils";

export function ProductCard({ product, onAddToCart, className }: ProductCardProps) {
  return (
    <Card className={cn("flex h-full w-full max-w-xs flex-col", className)}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-lg">
        <Image src={product.imageUrl} alt={product.title} fill className="object-cover" />
      </div>

      <CardHeader className="flex-1 space-y-1">
        <CardTitle className="line-clamp-2 text-base">{product.title}</CardTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline">{product.category}</Badge>
          <span>★ {product.rating.toFixed(1)}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 px-5">
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        <div className="flex items-center justify-between ">
          <span className="text-sm font-semibold">{product.price.toFixed(2)} €</span>
          <Button size="sm" disabled={!product.inStock} onClick={() => onAddToCart?.(product)}>
            {product.inStock ? "Добавить в корзину" : "Распродано"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
