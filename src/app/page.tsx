import Link from "next/link";
import CardTile from "@/components/CardTile";
import { cards, categories } from "@/lib/data";

export default function Home() {
  const latest = [...cards].sort((a, b) => b.listedAt.localeCompare(a.listedAt)).slice(0, 8);
  return (
    <>
      <section className="rounded-2xl bg-gradient-to-br from-panel to-deep border border-mint/30 p-5 sm:p-8">
        <p className="text-mint text-sm font-semibold uppercase tracking-widest">GG Live</p>
        <h1 className="h-display text-4xl sm:text-6xl leading-none mt-1">Live card auctions, right here.</h1>
        <p className="text-muted mt-3 max-w-prose">Watch the stream, bid live, and buy cards at fixed prices. No marketplace fees, so our prices stay low.</p>
        <div className="flex flex-wrap gap-3 mt-5">
          <Link href="/shop" className="btn btn-mint">Shop cards</Link>
          <Link href="/live" className="btn btn-ghost">Next live show</Link>
        </div>
      </section>

      <nav aria-label="Categories" className="flex gap-2 overflow-x-auto py-5 -mx-4 px-4">
        {categories.map((c) => (
          <Link key={c.slug} href={`/shop?category=${c.slug}`} className="shrink-0 rounded-full border-2 border-mint text-mint px-4 min-h-11 inline-flex items-center font-semibold">{c.name}</Link>
        ))}
      </nav>

      <section>
        <div className="flex items-end justify-between mb-3">
          <h2 className="h-display text-3xl">Just listed</h2>
          <Link href="/shop" className="text-mint min-h-11 inline-flex items-center">See all</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {latest.map((c) => <CardTile key={c.id} card={c} />)}
        </div>
      </section>

      <section className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link href="/sell" className="block bg-panel rounded-xl p-5 hover:ring-2 hover:ring-mint">
          <h2 className="h-display text-2xl">Sell your cards to us</h2>
          <p className="text-muted mt-1">Send photos and we&apos;ll send a quote. Don&apos;t post anything until you accept it.</p>
        </Link>
        <Link href="/delivery" className="block bg-panel rounded-xl p-5 hover:ring-2 hover:ring-mint">
          <h2 className="h-display text-2xl">UK postage from £2.99</h2>
          <p className="text-muted mt-1">Royal Mail, shipping worldwide. Orders of £76+ go tracked and signed for.</p>
        </Link>
      </section>
    </>
  );
}
