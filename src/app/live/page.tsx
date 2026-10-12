import Link from "next/link";
export const metadata = { title: "GG Live" };
export default function Live() {
  return (
    <section className="text-center py-10">
      <p className="text-mint uppercase tracking-widest text-sm font-semibold">GG Live</p>
      <h1 className="h-display text-5xl mt-1">Live auctions are coming</h1>
      <p className="text-muted mt-3 max-w-prose mx-auto">Soon you&apos;ll watch the stream and bid right here. Every card is shown on camera, every bid is timed by our server, and every show is recorded.</p>
      <div className="aspect-video max-w-2xl mx-auto mt-6 rounded-xl bg-deep border border-mint/30 flex items-center justify-center text-muted">Stream player</div>
      <Link href="/shop" className="btn btn-mint mt-6">Shop cards meanwhile</Link>
    </section>
  );
}
