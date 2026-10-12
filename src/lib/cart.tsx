"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Line = { id: string; qty: number };
type Ctx = { lines: Line[]; add: (id: string, max: number) => void; setQty: (id: string, qty: number) => void; remove: (id: string) => void; count: number };
const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  useEffect(() => { try { const s = localStorage.getItem("gg-cart"); if (s) setLines(JSON.parse(s)); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem("gg-cart", JSON.stringify(lines)); } catch {} }, [lines]);
  const add = (id: string, max: number) => setLines((l) => {
    const f = l.find((x) => x.id === id);
    if (f) return l.map((x) => (x.id === id ? { ...x, qty: Math.min(max, x.qty + 1) } : x));
    return [...l, { id, qty: 1 }];
  });
  const setQty = (id: string, qty: number) => setLines((l) => l.map((x) => (x.id === id ? { ...x, qty } : x)).filter((x) => x.qty > 0));
  const remove = (id: string) => setLines((l) => l.filter((x) => x.id !== id));
  const count = lines.reduce((a, b) => a + b.qty, 0);
  return <CartCtx.Provider value={{ lines, add, setQty, remove, count }}>{children}</CartCtx.Provider>;
}
export function useCart() { const c = useContext(CartCtx); if (!c) throw new Error("useCart outside provider"); return c; }
