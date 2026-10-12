"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function AddToBasket({ id, max }: { id: string; max: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  if (max <= 0) return <button className="btn btn-mint opacity-50" disabled>Sold out</button>;
  return added ? (
    <Link href="/cart" className="btn btn-mint">Added. View basket</Link>
  ) : (
    <button className="btn btn-mint" onClick={() => { add(id, max); setAdded(true); }}>Buy now</button>
  );
}
