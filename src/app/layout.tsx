import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ReactQueryProvider } from "@/shared";

export const metadata: Metadata = {
  title: "Product Catalog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
