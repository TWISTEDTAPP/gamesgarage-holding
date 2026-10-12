import { business } from "@/lib/data";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Contact us</h1>
      <p>Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>
      <p>{business.name} is a trading name of {business.trader}, sole trader.<br />{business.address}</p>
    </section>
  );
}
