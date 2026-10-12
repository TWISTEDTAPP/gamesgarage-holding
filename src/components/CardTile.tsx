import Link from "next/link";
import { Card, gbp, categoryName } from "@/lib/data";

export function CardArt({ card, big = false }: { card: Card; big?: boolean }) {
  if (card.photos[0]) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={card.photos[0]} alt={card.name} className="w-full aspect-[5/7] object-cover rounded-lg" />;
  }
  return (
    <div className="w-full aspect-[5/7] rounded-lg bg-gradient-to-br from-panel to-deep border border-mint/30 flex flex-col items-center justify-center p-3 text-center">
      <span className="text-mint text-xs uppercase tracking-widest">{categoryName(card.category)}</span>
      <span className={`h-display ${big ? "text-3xl" : "text-lg"} mt-1 leading-tight`}>{card.name}</span>
      <span className="text-muted text-xs mt-2">Photo coming soon</span>
    </div>
  );
}

export function ConditionChip({ c }: { c: string }) {
  const colour = c === "NM" ? "bg-mint text-deep" : c === "LP" ? "bg-gold text-deep" : "bg-panel text-white border border-muted/40";
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded ${colour}`}>{c}</span>;
}

export default function CardTile({ card }: { card: Card }) {
  return (
    <Link href={`/card/${card.id}`} className="block bg-panel rounded-xl p-2 hover:ring-2 hover:ring-mint">
      <CardArt card={card} />
      <div className="px-1 pt-2">
        <p className="font-semibold leading-snug line-clamp-2 min-h-[2.75em]">{card.name}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-gold font-semibold">{gbp(card.price)}</span>
          <ConditionChip c={card.condition} />
        </div>
      </div>
    </Link>
  );
}
