import Link from "next/link";
import CartButton from "./CartButton";
import Section from "./Section";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
];

export default function SiteHeader() {
  return (
    <header className="bg-forest text-cream border-b border-soft-sage/20">
      <Section className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-sage/40 border border-soft-sage/30">
            <span className="w-5 h-5 border border-cream/70 rounded-full"></span>
          </span>
          <div>
            <p className="font-heading text-xl leading-tight">
              Willow & Pine Tea Co.
            </p>
            <p className="text-xs text-cream/70">Botanical tea house</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-subheading">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-soft-sage transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CartButton />
      </Section>
    </header>
  );
}
