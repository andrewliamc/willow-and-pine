import Section from "../_components/Section";

export const metadata = {
  title: "About | Willow & Pine Tea Co.",
};

export default function AboutPage() {
  return (
    <Section className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
          About Willow & Pine
        </p>
        <h1 className="font-heading text-4xl text-forest">
          A sanctuary in every cup.
        </h1>
        <p className="text-forest/80 max-w-3xl">
          Willow & Pine Tea Co. was born from early mornings spent brewing in
          quiet kitchens. We honor the art of slow preparation—selecting leaves,
          blossoms, and roots with reverence for the land and hands that
          cultivated them.
        </p>
      </div>

      <div className="space-y-4 bg-cream border border-forest/10 rounded-3xl p-6 shadow-inner">
        <p className="text-forest/80 max-w-4xl">
          Each batch is blended by hand in small quantities to preserve aroma
          and nuance. We lean on botanicals that evoke forest walks, stone
          fruit orchards, and coastal breezes—capturing moments of calm in every
          steep.
        </p>
        <p className="text-forest/80 max-w-4xl">
          Sustainability is a quiet promise we keep: sourcing with care, using
          thoughtful packaging, and ensuring growers are honored for their
          craft.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["Ritual", "Craft", "Calm"].map((pillar) => (
          <div
            key={pillar}
            className="rounded-2xl bg-white/70 border border-forest/10 p-6 shadow-sm"
          >
            <h3 className="font-heading text-2xl text-forest">{pillar}</h3>
            <p className="text-forest/80 mt-3">
              {pillar === "Ritual" &&
                "Brewing is a quiet ceremony—an invitation to pause and breathe."}
              {pillar === "Craft" &&
                "We layer leaves, blossoms, and roots with patience to reveal depth."}
              {pillar === "Calm" &&
                "Soft lighting, warm porcelain, and mindful sips create a serene finish."}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
