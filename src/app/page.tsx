import { Catalog } from "@/features";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Каталог</h1>
        </div>
      </header>

      <Catalog />
    </main>
  );
}
