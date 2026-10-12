import type { Metadata } from "next";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: { default: "Games Garage | Trading cards and live auctions", template: "%s | Games Garage" },
  description: "Trading cards (Pokémon, sports, Magic, Yu-Gi-Oh!) at fixed prices and in live auctions on GG Live. UK based, shipping worldwide.",
  metadataBase: new URL("https://gamesgarage.co.uk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-dvh flex flex-col">
        <CartProvider>
          <Header />
          <p className="bg-gold text-deep text-center text-sm font-semibold px-4 py-2">Our shop opens soon. Cards shown are examples and can&apos;t be bought yet.</p>
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
