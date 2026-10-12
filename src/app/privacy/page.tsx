import { business } from "@/lib/data";
export const metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Privacy policy</h1>
      <p>{business.trader}, trading as {business.name}, is responsible for your personal data. Contact: <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
      <h2>What we collect and why</h2>
      <p>Your name, email, delivery address and order history, so we can fulfil orders and handle returns. Payments are processed by Stripe; we never see or store your full card number. Bid records and stream recordings are kept as evidence in case of disputes.</p>
      <h2>Cookies</h2>
      <p>This site currently only stores your basket in your browser. We will ask before using any non-essential cookies.</p>
      <h2>Your rights</h2>
      <p>You can ask to see, correct or delete your data by emailing us. You can also complain to the Information Commissioner&apos;s Office (ico.org.uk).</p>
    </section>
  );
}
