"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/live", label: "GG Live" },
  { href: "/sell", label: "Sell to us" },
];

export default function Header() {
  const { count } = useCart();
  return (
    <header className="bg-black border-b-4 border-mint sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 min-h-11" aria-label="Games Garage home">
          <Image src="/logo.jpg" alt="" width={40} height={40} className="rounded-full" priority />
          <span className="h-display text-2xl hidden sm:inline">GAMES GARAGE</span>
        </Link>
        <nav className="ml-auto flex items-center gap-1 text-sm sm:text-base">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="px-2 sm:px-3 min-h-11 inline-flex items-center hover:text-mint">{n.label}</Link>
          ))}
          <Link href="/cart" className="btn btn-mint !px-3 ml-1" aria-label={`Basket, ${count} items`}>
            Basket{count > 0 && <span className="ml-1.5 bg-deep text-mint rounded-full px-2 text-sm">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
