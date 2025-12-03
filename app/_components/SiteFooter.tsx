import Link from "next/link";
import Section from "./Section";

export default function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <Section className="py-10 space-y-4 border-t border-soft-sage/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-heading text-xl">Willow & Pine Tea Co.</p>
            <p className="text-sm text-cream/70">
              Steeped in ritual, crafted with care.
            </p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/shop" className="hover:text-soft-sage">
              Shop
            </Link>
            <Link href="/about" className="hover:text-soft-sage">
              About
            </Link>
            <Link href="/learn" className="hover:text-soft-sage">
              Learn
            </Link>
          </div>
        </div>
        <p className="text-xs text-cream/60">
          © {new Date().getFullYear()} Willow & Pine Tea Co. All rights
          reserved.
        </p>
      </Section>
    </footer>
  );
}
