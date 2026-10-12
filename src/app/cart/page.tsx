"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { getCard, gbp, postageFor, REGIONS, Region, shipping } from "@/lib/data";

export default function CartPage() {
  const { lines, setQty, remove } = useCart();
  const [region, setRegion] = useState<Region>("uk");
  const [agreed, setAgreed] = useState(false);
  const items = lines.map((l) => ({ ...l, card: getCard(l.id) })).filter((x) => x.card);
  const subtotal = items.reduce((a, x) => a + x.card!.price * x.qty, 0);
  const postage = postageFor(region, subtotal);

  if (items.length === 0) return (
    <div className="text-center py-16">
      <h1 className="h-display text-4xl">Your basket is empty</h1>
      <Link href="/shop" className="btn btn-mint mt-5">Browse cards</Link>
    </div>
  );

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-6">
      <section>
        <h1 className="h-display text-4xl mb-4">Basket</h1>
        <ul className="space-y-2">
          {items.map(({ id, qty, card }) => (
            <li key={id} className="bg-panel rounded-xl p-3 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <Link href={`/card/${id}`} className="font-semibold block truncate">{card!.name}</Link>
                <span className="text-sm text-muted">{card!.condition} · {gbp(card!.price)} each</span>
              </div>
              <label className="sr-only" htmlFor={`q-${id}`}>Quantity</label>
              <select id={`q-${id}`} value={qty} onChange={(e) => setQty(id, Number(e.target.value))} className="bg-deep rounded-lg min-h-11 px-2">
                {Array.from({ length: card!.qty }, (_, i) => i + 1).map((n) => <option key={n}>{n}</option>)}
              </select>
              <button onClick={() => remove(id)} className="min-h-11 px-2 text-muted hover:text-white" aria-label={`Remove ${card!.name}`}>✕</button>
            </li>
          ))}
        </ul>
      </section>
      <aside className="bg-deep rounded-xl p-4 h-fit space-y-3">
        <label className="block text-sm" htmlFor="region">Deliver to</label>
        <select id="region" value={region} onChange={(e) => setRegion(e.target.value as Region)} className="bg-panel rounded-lg min-h-11 px-3 w-full">
          {(Object.keys(REGIONS) as Region[]).map((r) => <option key={r} value={r}>{REGIONS[r]}</option>)}
        </select>
        <dl className="space-y-1">
          <div className="flex justify-between"><dt>Subtotal</dt><dd>{gbp(subtotal)}</dd></div>
          <div className="flex justify-between"><dt>Postage</dt><dd>{gbp(postage)}</dd></div>
          <div className="flex justify-between text-lg font-semibold text-gold border-t border-panel pt-2"><dt>Total</dt><dd>{gbp(subtotal + postage)}</dd></div>
        </dl>
        {region === "uk" && subtotal >= shipping.trackedThreshold && <p className="text-sm text-mint">Sent tracked and signed for.</p>}
        {region !== "uk" && <p className="text-sm text-muted">You pay any customs duties or import taxes.</p>}
        <label className="flex gap-2 items-start text-sm">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 size-5 accent-mint" />
          <span>I have read the <Link href="/returns" className="text-mint">returns and auction policy</Link>, and checked the card details before buying.</span>
        </label>
        <button disabled className="btn btn-mint w-full opacity-50" title="Card payments open soon">Checkout opens soon</button>
        <p className="text-xs text-muted">Card, Apple Pay, Google Pay, PayPal, Klarna and Clearpay coming soon. </p>
      </aside>
    </div>
  );
}
