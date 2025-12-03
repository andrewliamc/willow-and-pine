import Section from "../_components/Section";
import BrewingSteps from "../_components/BrewingSteps";

export const metadata = {
  title: "Learn | Willow & Pine Tea Co.",
};

export default function LearnPage() {
  return (
    <Section className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.2em] text-forest/60 font-subheading text-sm">
          Learn the ritual
        </p>
        <h1 className="font-heading text-4xl text-forest">
          Brew with intention.
        </h1>
        <p className="text-forest/80 max-w-3xl">
          Quiet brewing invites the senses to awaken. Follow these simple notes
          to craft a balanced cup and notice every aroma.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/70 border border-forest/10 p-6 shadow-sm space-y-4">
          <h2 className="font-subheading text-forest text-lg">Brewing basics</h2>
          <BrewingSteps
            steps={[
              "Water temperature: Greens 80°C / 176°F, Oolongs 90°C / 194°F, Herbals 96°C / 205°F.",
              "Steep time: Start at 2-3 minutes for greens, 3-4 for oolongs, 5-6 for herbals.",
              "Vessel: Pre-warm your teapot or cup to keep the infusion gentle.",
            ]}
          />
        </div>

        <div className="rounded-2xl bg-cream border border-forest/10 p-6 shadow-inner space-y-4">
          <h2 className="font-subheading text-forest text-lg">
            How to taste tea
          </h2>
          <ul className="space-y-3 text-forest/80">
            <li>
              <span className="font-subheading text-forest">Aroma:</span> Inhale
              the steam first to catch delicate florals and toasted notes.
            </li>
            <li>
              <span className="font-subheading text-forest">Body:</span> Notice
              how the liquor feels—silky, airy, or round.
            </li>
            <li>
              <span className="font-subheading text-forest">Finish:</span> Let
              the aftertaste linger; a good tea leaves a calm sweetness.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-white/70 border border-forest/10 p-6 shadow-sm">
        <h2 className="font-subheading text-forest text-lg mb-3">FAQ</h2>
        <div className="space-y-4 text-forest/80">
          <div>
            <p className="font-subheading text-forest">Can I re-steep?</p>
            <p>
              Yes—most blends can be re-steeped 2-3 times. Add 30 seconds for
              each subsequent steep.
            </p>
          </div>
          <div>
            <p className="font-subheading text-forest">
              How should I store my tea?
            </p>
            <p>
              Keep leaves in an airtight tin away from light, heat, and
              moisture to preserve aromatics.
            </p>
          </div>
          <div>
            <p className="font-subheading text-forest">Do you sweeten?</p>
            <p>
              We prefer letting natural sweetness shine, but a touch of raw
              honey pairs beautifully with our herbals.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
