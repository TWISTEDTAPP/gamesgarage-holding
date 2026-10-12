import { gbp, shipping } from "@/lib/data";
export const metadata = { title: "Delivery" };
export default function Delivery() {
  const rows: [string, number][] = [
    [`UK, orders under ${gbp(shipping.trackedThreshold)}`, shipping.ukStandard],
    [`UK, orders of ${gbp(shipping.trackedThreshold)} and over (tracked, signed for)`, shipping.ukTracked],
    ["Europe", shipping.europe],
    ["Rest of world", shipping.world],
  ];
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Delivery</h1>
      <p>We post with Royal Mail and aim to dispatch within {shipping.dispatchDays} working days. Orders of {gbp(shipping.trackedThreshold)} and over are sent tracked and signed for. Buyers outside the UK pay any customs duties or import taxes.</p>
      <p>All your wins from one live show go in one parcel, and you only pay postage once.</p>
      <table className="w-full max-w-lg mt-4">
        <thead><tr className="text-mint text-left"><th className="py-2">Destination</th><th className="py-2 text-right">Postage</th></tr></thead>
        <tbody>{rows.map(([d, p]) => <tr key={d} className="border-t border-panel"><td className="py-2 pr-3">{d}</td><td className="py-2 text-right">{gbp(p)}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
