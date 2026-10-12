// Sample data for Phase 1. Replaced by Supabase tables (categories, cards, settings) once connected.
export type Condition = "NM" | "LP" | "MP" | "HP" | "DMG";
export const CONDITIONS: Record<Condition, string> = {
  NM: "Near Mint", LP: "Light Played", MP: "Moderate Played", HP: "Heavy Played", DMG: "Damaged",
};
export type Category = { slug: string; name: string };
export type Card = {
  id: string; name: string; category: string; price: number; condition: Condition;
  qty: number; notes?: string; photos: string[]; listedAt: string;
};

export const categories: Category[] = [
  { slug: "pokemon", name: "Pokémon" },
  { slug: "sports", name: "Sports" },
  { slug: "magic", name: "Magic" },
  { slug: "yugioh", name: "Yu-Gi-Oh!" },
];

export const cards: Card[] = [
  { id: "c1", name: "Charizard ex 199/165", category: "pokemon", price: 89.99, condition: "NM", qty: 1, notes: "Pulled and sleeved straight away.", photos: [], listedAt: "2026-10-10" },
  { id: "c2", name: "Pikachu VMAX 044/185", category: "pokemon", price: 24.5, condition: "LP", qty: 2, notes: "Light whitening on the back top edge.", photos: [], listedAt: "2026-10-09" },
  { id: "c3", name: "Umbreon V 094/203", category: "pokemon", price: 12, condition: "NM", qty: 3, photos: [], listedAt: "2026-10-08" },
  { id: "c4", name: "Black Lotus (Collectors' Edition)", category: "magic", price: 150, condition: "MP", qty: 1, notes: "Square corners, not tournament legal.", photos: [], listedAt: "2026-10-07" },
  { id: "c5", name: "Sol Ring – Commander", category: "magic", price: 3.5, condition: "NM", qty: 6, photos: [], listedAt: "2026-10-06" },
  { id: "c6", name: "Blue-Eyes White Dragon LOB-001", category: "yugioh", price: 45, condition: "HP", qty: 1, notes: "Crease bottom left, shown in photos.", photos: [], listedAt: "2026-10-05" },
  { id: "c7", name: "Dark Magician SDY-006", category: "yugioh", price: 8, condition: "LP", qty: 2, photos: [], listedAt: "2026-10-04" },
  { id: "c8", name: "Jude Bellingham Topps Chrome RC", category: "sports", price: 32, condition: "NM", qty: 1, photos: [], listedAt: "2026-10-03" },
];

export const shipping = {
  ukStandard: 2.99,
  ukTracked: 5.99,
  trackedThreshold: 76,
  europe: 17.99,
  world: 24.99,
  dispatchDays: 3,
};
export type Region = "uk" | "europe" | "world";
export const REGIONS: Record<Region, string> = { uk: "United Kingdom", europe: "Europe", world: "Rest of world" };

export function postageFor(region: Region, subtotal: number) {
  if (subtotal <= 0) return 0;
  if (region === "europe") return shipping.europe;
  if (region === "world") return shipping.world;
  return subtotal >= shipping.trackedThreshold ? shipping.ukTracked : shipping.ukStandard;
}

export const gbp = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);
export const getCard = (id: string) => cards.find((c) => c.id === id);
export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

export const business = {
  name: "Games Garage",
  trader: "Kyle Tapp",
  address: "36 College Street, Camborne, Cornwall, TR14 7LE, United Kingdom",
  email: "hello@gamesgarage.co.uk",
};
