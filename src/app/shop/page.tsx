import Link from "next/link";
import CardTile from "@/components/CardTile";
import { cards, categories, CONDITIONS, Condition } from "@/lib/data";

export const metadata = { title: "Shop" };

type SP = Promise<{ category?: string; condition?: string; max?: string; sort?: string }>;

export default async function Shop({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  let list = cards.filter((c) => c.qty > 0);
  if (sp.category) list = list.filter((c) => c.category === sp.category);
  if (sp.condition) list = list.filter((c) => c.condition === sp.condition);
  if (sp.max) list = list.filter((c) => c.price <= Number(sp.max));
  if (sp.sort === "low") list.sort((a, b) => a.price - b.price);
  else if (sp.sort === "high") list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.listedAt.localeCompare(a.listedAt));

  const sel = "bg-deep border border-muted/40 rounded-lg min-h-11 px-3 w-full";
  return (
    <>
      <h1 className="h-display text-4xl mb-4">Shop</h1>
      <form className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5" method="get">
        <label className="sr-only" htmlFor="category">Category</label>
        <select id="category" name="category" defaultValue={sp.category ?? ""} className={sel}>
          <option value="">All categories</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
        <label className="sr-only" htmlFor="condition">Condition</label>
        <select id="condition" name="condition" defaultValue={sp.condition ?? ""} className={sel}>
          <option value="">Any condition</option>
          {(Object.keys(CONDITIONS) as Condition[]).map((k) => <option key={k} value={k}>{CONDITIONS[k]} ({k})</option>)}
        </select>
        <label className="sr-only" htmlFor="max">Max price</label>
        <select id="max" name="max" defaultValue={sp.max ?? ""} className={sel}>
          <option value="">Any price</option>
          {[5, 10, 25, 50, 100].map((m) => <option key={m} value={m}>Up to £{m}</option>)}
        </select>
        <label className="sr-only" htmlFor="sort">Sort</label>
        <select id="sort" name="sort" defaultValue={sp.sort ?? ""} className={sel}>
          <option value="">Newest</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
        <button className="btn btn-mint col-span-2 sm:col-span-1">Filter</button>
      </form>
      {list.length === 0 ? (
        <p className="text-muted">No cards match. <Link className="text-mint" href="/shop">Clear filters</Link></p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {list.map((c) => <CardTile key={c.id} card={c} />)}
        </div>
      )}
    </>
  );
}
