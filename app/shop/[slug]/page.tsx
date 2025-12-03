import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "../../_components/Section";
import TastingNotes from "../../_components/TastingNotes";
import BrewingSteps from "../../_components/BrewingSteps";
import Button from "../../_components/Button";
import { getTeaBySlug } from "@/lib/teaData";
import { addToCart } from "@/app/cart/actions";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  const tea = getTeaBySlug(params.slug);
  return {
    title: tea
      ? `${tea.name} | Willow & Pine Tea Co.`
      : "Blend | Willow & Pine Tea Co.",
  };
}

export default function ProductDetailPage({ params }: Props) {
  const tea = getTeaBySlug(params.slug);

  if (!tea) {
    return notFound();
  }

  return (
    <Section className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="rounded-[28px] overflow-hidden border border-forest/10 shadow-sm bg-white">
            <Image
              src={tea.image}
              alt={tea.name}
              width={800}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
            Signature blend
          </p>
          <h1 className="font-heading text-4xl text-forest">{tea.name}</h1>
          <p className="text-forest/80">{tea.description}</p>

          <div className="space-y-3">
            <h3 className="font-subheading text-forest">Tasting notes</h3>
            <TastingNotes notes={tea.tastingNotes} />
          </div>

          <div className="space-y-3">
            <h3 className="font-subheading text-forest">Brewing</h3>
            <BrewingSteps steps={tea.brewingSteps} />
          </div>

          <form
            action={addToCart}
            className="space-y-4 bg-white/80 border border-forest/10 rounded-2xl p-4 shadow-sm"
          >
            <input type="hidden" name="productId" value={tea.id} />
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm text-forest/80 space-y-2">
                <span className="block font-subheading text-forest">Size</span>
                <select
                  name="size"
                  className="w-full rounded-xl border border-forest/15 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soft-sage"
                >
                  {tea.sizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm text-forest/80 space-y-2">
                <span className="block font-subheading text-forest">
                  Format
                </span>
                <select
                  name="format"
                  className="w-full rounded-xl border border-forest/15 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soft-sage"
                >
                  {tea.formatOptions.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="text-sm text-forest/80 space-y-2 block">
              <span className="block font-subheading text-forest">Quantity</span>
              <input
                name="quantity"
                type="number"
                min={1}
                defaultValue={1}
                className="w-24 rounded-xl border border-forest/15 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-soft-sage"
              />
            </label>

            <div className="flex items-center justify-between">
              <p className="text-xl font-subheading text-forest">
                ${tea.price.toFixed(2)}
              </p>
              <Button type="submit" variant="primary">
                Add to Cart
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="md:hidden fixed bottom-4 left-4 right-4">
        <form
          action={addToCart}
          className="flex items-center gap-3 bg-forest text-cream rounded-2xl px-4 py-3 shadow-lg"
        >
          <input type="hidden" name="productId" value={tea.id} />
          <input type="hidden" name="size" value={tea.sizeOptions[0] ?? ""} />
          <input
            type="hidden"
            name="format"
            value={tea.formatOptions[0] ?? ""}
          />
          <input type="hidden" name="quantity" value={1} />
          <div className="flex-1">
            <p className="font-subheading text-soft-sage">Add</p>
            <p className="text-sm">{tea.name}</p>
          </div>
          <Button type="submit" variant="secondary" className="bg-transparent">
            Add
          </Button>
        </form>
      </div>
    </Section>
  );
}
