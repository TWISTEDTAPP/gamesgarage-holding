import { business } from "@/lib/data";
export const metadata = { title: "Returns and auction policy" };
export default function Returns() {
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Returns and auction policy</h1>
      <h2>Cancelling an online order</h2>
      <p>If you buy from us online, you can cancel within 14 days of receiving your order. Email us at <a href={`mailto:${business.email}`}>{business.email}</a>, then send the card back within 14 days. It must come back in exactly the condition it was sent, in its original protective packaging. You pay return postage unless the item was faulty or not as described.</p>
      <p>We inspect every return and compare it with our listing photos and records before we refund. We refund the original payment method, including standard postage. Returns that have been swapped or damaged may be refused or the refund reduced.</p>
      <h2>Faulty or not as described</h2>
      <p>If an item is faulty or not as described, contact us with photos and your order number and we will put it right. Your statutory rights under the Consumer Rights Act are not affected.</p>
      <h2>Live auctions</h2>
      <p>Cards sold in live auctions are shown and described on the stream, and we record every show. Please study the card carefully before you bid.</p>
      <p>Every bid is binding. Our server clock decides when a lot ends and who wins, not the video, which can be a few seconds behind. Any bid in the last 10 seconds resets the timer to 10 seconds.</p>
      <p>The winning bid, plus postage on your first win of the show, is charged automatically to the card saved on your account. If the payment fails, you have 24 hours to pay using the link we send you, or the sale is cancelled.</p>
      <p>Some lots have a hidden reserve. If bidding doesn&apos;t reach it, the card isn&apos;t sold and nobody is charged. We never bid on our own lots. You must be 18 or over to bid.</p>
    </section>
  );
}
