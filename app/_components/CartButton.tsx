import Link from "next/link";
import { getCart, getItemCount } from "@/lib/cart";

export default function CartButton() {
  // Placeholder cart state; replace with real data source when ready.
  const count = getItemCount();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 bg-white/5 border border-soft-sage/30 rounded-full px-4 py-2 text-sm font-subheading hover:border-soft-sage/60 transition-colors"
      aria-label={`Cart with ${count} items`}
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-soft-sage"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M4 5h2l1.5 12h9L18 9H7" />
        <circle cx="10" cy="19" r="1" />
        <circle cx="16" cy="19" r="1" />
      </svg>
      <span className="hidden sm:inline">Cart</span>
      <span className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 rounded-full bg-soft-sage text-forest text-xs font-semibold">
        {count}
      </span>
    </Link>
  );
}
