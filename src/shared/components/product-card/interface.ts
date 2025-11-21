import { ProductProps } from "@/types";

export interface ProductCardProps {
  product: ProductProps;
  onAddToCart?: (product: ProductProps) => void;
  className?: string;
}
