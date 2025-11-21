import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./product-card";
import type { ProductProps } from "@/types";
import "@/app/globals.css";

const baseProduct: ProductProps = {
  id: "1",
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its dramatic volume effect.",
  price: 9.99,
  imageUrl:
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  category: "beauty",
  rating: 2.6,
  inStock: true,
};

const meta = {
  title: "Catalog/ProductCard",
  component: ProductCard,
  args: {
    product: baseProduct,
    onAddToCart: () => {
      console.log("action");
    },
    className: "max-w-sm",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Карточка товара для сетки каталога. Отображает изображение, название, категорию, рейтинг, краткое описание и цену, а также кнопку добавления в корзину.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OutOfStock: Story = {
  args: {
    product: {
      ...baseProduct,
      inStock: false,
    },
  },
};

export const LongTitleAndDescription: Story = {
  args: {
    product: {
      ...baseProduct,
      title:
        "Очень длинное название товара, которое должно быть обрезано до двух строк для аккуратного отображения в сетке",
      description:
        "Это очень длинное описание, которое проверяет, как ведёт себя обрезка текста при большом количестве строк. Оно не должно ломать вёрстку и должно оставаться в предусмотренных границах карточки.",
    },
  },
};
