import Link from "next/link";
export default function NotFound() {
  return <div className="text-center py-16"><h1 className="h-display text-5xl">Page not found</h1><Link href="/" className="btn btn-mint mt-5">Go home</Link></div>;
}
