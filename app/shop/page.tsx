import Section from "../_components/Section";
import ProductCard from "../_components/ProductCard";
import { getAllTeas } from "@/lib/teaData";

export const metadata = {
  title: "Shop | Willow & Pine Tea Co.",
};

export default function ShopPage() {
  const teas = getAllTeas();

  return (
    <Section className="space-y-6">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
          Shop
        </p>
        <h1 className="font-heading text-4xl text-forest">Shop all blends</h1>
        <p className="text-forest/80 max-w-2xl">
          Explore grounding greens, honeyed oolongs, and botanical herbals,
          crafted to bring stillness to your day.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teas.map((tea) => (
          <ProductCard key={tea.id} product={tea} />
        ))}
      </div>
    </Section>
  );
}
