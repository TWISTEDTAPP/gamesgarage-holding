import { business } from "@/lib/data";
export const metadata = { title: "Sell to us" };
export default function Sell() {
  return (
    <section className="prose-gg">
      <h1 className="h-display text-5xl">Sell your cards to us</h1>
      <p>We buy Pokémon, sports, Magic and Yu-Gi-Oh! cards. Our online quote form is coming soon. Until then, email <a href={`mailto:${business.email}?subject=Sell%20to%20Games%20Garage`}>{business.email}</a> with:</p>
      <ul className="list-disc pl-6 text-muted space-y-1 mb-4">
        <li>Each card&apos;s name and condition (NM, LP, MP, HP or DMG)</li>
        <li>Front and back photos, with a note showing your name and today&apos;s date beside the card</li>
        <li>Any flaws the camera may miss: holo scratches, creases, whitening, edge wear</li>
      </ul>
      <p>We inspect every card under a microscope. Flaws you don&apos;t mention may mean the card comes back without payment. The final price is confirmed after inspection.</p>
      <p className="text-gold font-semibold">Don&apos;t post anything until you accept our quote.</p>
    </section>
  );
}
