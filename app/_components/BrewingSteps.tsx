export default function BrewingSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-3 text-forest/80">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-soft-sage/60 text-forest font-subheading flex items-center justify-center">
            {index + 1}
          </span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}
