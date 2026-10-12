import Link from "next/link";
import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-deep text-muted text-sm mt-10">
      <div className="max-w-5xl mx-auto px-4 py-8 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="h-display text-xl text-white mb-1">GAMES GARAGE</p>
          <p>{business.name} is a trading name of {business.trader}, sole trader.<br />{business.address}</p>
          <p className="mt-2"><a className="text-mint" href={`mailto:${business.email}`}>{business.email}</a></p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end content-start">
          {[["/delivery", "Delivery"], ["/returns", "Returns & auction policy"], ["/terms", "Terms"], ["/privacy", "Privacy"], ["/contact", "Contact"]].map(([h, l]) => (
            <li key={h}><Link href={h} className="inline-flex min-h-11 items-center hover:text-mint">{l}</Link></li>
          ))}
        </ul>
      </div>
      <p className="text-center pb-6">&copy; {new Date().getFullYear()} Games Garage</p>
    </footer>
  );
}
