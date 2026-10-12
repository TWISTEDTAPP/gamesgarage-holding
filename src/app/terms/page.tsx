import Link from "next/link";
import { business } from "@/lib/data";
export const metadata = { title: "Terms" };
export default function Terms() {
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Terms of sale</h1>
      <p>These terms apply when you buy from {business.name}, a trading name of {business.trader}, sole trader, {business.address}.</p>
      <h2>Prices and payment</h2>
      <p>Prices are in pounds sterling (GBP). Postage is added at checkout. Your order is accepted when payment is confirmed.</p>
      <h2>Card condition</h2>
      <p>We grade cards as Near Mint (NM), Light Played (LP), Moderate Played (MP), Heavy Played (HP) or Damaged (DMG), and show photos of every card. Grading is our honest opinion; please check the photos before you buy.</p>
      <h2>Returns and auctions</h2>
      <p>See our <Link href="/returns">returns and auction policy</Link> and <Link href="/delivery">delivery information</Link>.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${business.email}`}>{business.email}</a></p>
    </section>
  );
}
