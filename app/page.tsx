import Section from "./_components/Section";
import Button from "./_components/Button";
import ProductCard from "./_components/ProductCard";
import BrewingSteps from "./_components/BrewingSteps";
import { getFeaturedTeas } from "@/lib/teaData";

export default function HomePage() {
  const teas = getFeaturedTeas().slice(0, 3);

  return (
    <>
      <section className="bg-forest text-cream">
        <Section className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.2em] text-soft-sage font-subheading text-sm">
              Willow & Pine Tea Co.
            </p>
            <h1 className="text-4xl md:text-5xl font-heading leading-tight">
              Tea for slow mornings and quiet rituals.
            </h1>
            <p className="text-lg text-cream/80 max-w-xl">
              Small-batch botanicals blended for warmth, calm, and lingering
              aroma. Brew a cup that invites you to pause, breathe, and savor
              the moment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="/shop" variant="primary">
                Shop Blends
              </Button>
              <Button
                href="/learn"
                variant="secondary"
                className="text-cream border-soft-sage/60 hover:bg-soft-sage/25 hover:text-cream"
              >
                Learn the ritual
              </Button>
            </div>
          </div>
          <div className="bg-cream/10 border border-soft-sage/30 rounded-3xl p-8 backdrop-blur">
            <div className="space-y-4">
              <p className="text-soft-sage font-subheading">
                A quiet moment in every cup
              </p>
              <p className="text-cream/80">
                We source leaves, blossoms, and roots with deep respect for
                their origin. Each blend is layered to steep slowly, unfurling
                notes of forest, stone fruit, and honeyed florals.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-cream/80">
                <div className="rounded-2xl bg-cream/5 border border-soft-sage/20 p-4">
                  <p className="font-subheading text-soft-sage">Sourced</p>
                  <p>Single-origin gardens and mindful growers</p>
                </div>
                <div className="rounded-2xl bg-cream/5 border border-soft-sage/20 p-4">
                  <p className="font-subheading text-soft-sage">Crafted</p>
                  <p>Hand-blended in small batches for nuance</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
              Featured blends
            </p>
            <h2 className="font-heading text-3xl text-forest">
              Calm in every steep
            </h2>
          </div>
          <Button href="/shop" variant="secondary">
            Shop all
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teas.map((tea) => (
            <ProductCard key={tea.id} product={tea} />
          ))}
        </div>
      </Section>

      <Section className="space-y-8 bg-cream rounded-[28px] shadow-inner border border-forest/10">
        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
            Our story
          </p>
          <h2 className="font-heading text-3xl text-forest">
            Rooted in ritual, crafted with patience.
          </h2>
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-forest/15"></span>
            <span className="w-10 h-10 rounded-full bg-soft-sage/50 border border-forest/10"></span>
            <span className="h-px flex-1 bg-forest/15"></span>
          </div>
          <p className="text-lg text-forest/80 max-w-3xl">
            Willow & Pine began as a quiet gathering of friends seeking to slow
            the day with thoughtful tea. We honor each leaf, bloom, and bark,
            coaxing out gentle aromatics and grounding depth. Every blend is an
            invitation to linger in the soft light of morning.
          </p>
        </div>
      </Section>

      <Section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
            Brew with intention
          </p>
          <h2 className="font-heading text-3xl text-forest">How to brew</h2>
          <p className="text-forest/80 max-w-2xl">
            A simple ritual to welcome calm: gather your tools, heat the water,
            and give yourself time. Let the leaves unfurl slowly.
          </p>
        </div>
        <div className="bg-white/70 border border-forest/10 rounded-3xl p-6 shadow-sm">
          <BrewingSteps
            steps={[
              "Measure 2–3g of tea per cup to honor the leaves’ balance.",
              "Heat filtered water to the right temperature—never a hard boil.",
              "Steep gently, breathing with the steam as aromas unfold.",
              "Pour, pause, and sip slowly to taste the full finish.",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
