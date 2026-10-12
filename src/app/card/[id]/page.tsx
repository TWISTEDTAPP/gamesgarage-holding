import { notFound } from "next/navigation";
import Link from "next/link";
import { cards, getCard, gbp, categoryName, CONDITIONS, shipping, business } from "@/lib/data";
import { CardArt, ConditionChip } from "@/components/CardTile";
import AddToBasket from "@/components/AddToBasket";

export function generateStaticParams() { return cards.map((c) => ({ id: c.id })); }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const c = getCard((await params).id);
  return { title: c?.name ?? "Card" };
}

export default async function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const card = getCard((await params).id);
  if (!card) notFound();
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="max-w-sm w-full mx-auto"><CardArt card={card} big /></div>
      <div>
        <Link href={`/shop?category=${card.category}`} className="text-mint text-sm uppercase tracking-widest">{categoryName(card.category)}</Link>
        <h1 className="h-display text-4xl leading-tight mt-1">{card.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <ConditionChip c={card.condition} /><span className="text-muted">{CONDITIONS[card.condition]}</span>
        </div>
        <p className="text-gold text-3xl font-semibold mt-4">{gbp(card.price)}</p>
        <p className="text-muted text-sm">{card.qty > 0 ? `${card.qty} in stock` : "Sold out"}</p>
        {card.notes && <p className="mt-4 bg-panel rounded-lg p-3"><strong>Notes:</strong> {card.notes}</p>}
        <div className="flex flex-wrap gap-3 mt-5">
          <AddToBasket id={card.id} max={card.qty} />
          <a className="btn btn-ghost" href={`mailto:${business.email}?subject=${encodeURIComponent("Question about " + card.name)}`}>Ask</a>
        </div>
        <details className="mt-6 bg-deep rounded-lg p-4">
          <summary className="cursor-pointer font-semibold min-h-11 flex items-center">Please study the card carefully before purchase</summary>
          <div className="prose-gg mt-2 text-sm">
            <p>Check the photos and condition notes. UK postage is {gbp(shipping.ukStandard)}, or {gbp(shipping.ukTracked)} tracked and signed for on orders of {gbp(shipping.trackedThreshold)} or more. Europe {gbp(shipping.europe)}, rest of world {gbp(shipping.world)}.</p>
            <p>You can cancel within 14 days of receiving your order. Cards must come back unchanged in their original protective packaging. <Link href="/returns">Read the full returns policy</Link>.</p>
          </div>
        </details>
      </div>
    </div>
  );
}
