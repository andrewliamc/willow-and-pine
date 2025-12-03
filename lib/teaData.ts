export type TeaProduct = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  tastingNotes: string[];
  brewingSteps: string[];
  sizeOptions: string[];
  formatOptions: string[];
  isFeatured?: boolean;
};

const encodeHex = (hex: string) => hex.replace("#", "%23");
const createPlaceholderImage = (title: string, accent = "#A7C4A0") => {
  const bg = encodeHex("#F5F1EB");
  const accentEncoded = encodeHex(accent);
  const text = encodeURIComponent(title);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='${bg}'/><circle cx='130' cy='140' r='110' fill='${accentEncoded}' fill-opacity='0.22'/><circle cx='640' cy='480' r='140' fill='${accentEncoded}' fill-opacity='0.15'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Cormorant Garamond, serif' font-size='48' fill='%23173F2A'>${text}</text></svg>`;
};

const teas: TeaProduct[] = [
  {
    id: "willow-garden-green",
    slug: "willow-garden-green",
    name: "Willow Garden Green",
    shortDescription: "Verdant leaves with sweet pea, pear skin, and soft pine.",
    description:
      "Harvested at first light, this gentle green unfolds with meadow sweetness and a whisper of fresh pine. Brew for quiet mornings and tender focus.",
    price: 22,
    tastingNotes: ["Sweet pea", "Pear skin", "Fresh pine"],
    brewingSteps: [
      "2g per cup · 80°C / 176°F",
      "Steep 2 minutes for a delicate cup",
      "Enjoy 2-3 infusions, adding 20s each",
    ],
    sizeOptions: ["50g pouch", "100g tin"],
    formatOptions: ["Loose Leaf"],
    image: createPlaceholderImage("Willow Garden Green", "#A7C4A0"),
    isFeatured: true,
  },
  {
    id: "pine-mist-oolong",
    slug: "pine-mist-oolong",
    name: "Pine Mist Oolong",
    shortDescription: "Orchid aroma with honeyed stone fruit and warm cedar.",
    description:
      "Shade-grown leaves roasted lightly to evoke misty forests. The liquor is silky with lingering orchid sweetness and cedar warmth.",
    price: 28,
    tastingNotes: ["Orchid", "Stone fruit", "Cedar"],
    brewingSteps: [
      "3g per cup · 90°C / 194°F",
      "Rinse briefly, then steep 3 minutes",
      "Re-steep up to 4 times, savoring the shift",
    ],
    sizeOptions: ["75g pouch", "150g tin"],
    formatOptions: ["Loose Leaf"],
    image: createPlaceholderImage("Pine Mist Oolong", "#C8A68C"),
    isFeatured: true,
  },
  {
    id: "evening-hearth-herbal",
    slug: "evening-hearth-herbal",
    name: "Evening Hearth Herbal",
    shortDescription: "Chamomile, linden blossom, vanilla bean—caffeine free.",
    description:
      "A caffeine-free blend built for soft lamp light. Florals mingle with creamy vanilla and a hint of citrus peel for a soothing close.",
    price: 18,
    tastingNotes: ["Chamomile", "Vanilla", "Citrus peel"],
    brewingSteps: [
      "2.5g per cup · 96°C / 205°F",
      "Steep 5-6 minutes for full body",
      "Sweeten with raw honey if desired",
    ],
    sizeOptions: ["50g pouch", "20 sachets"],
    formatOptions: ["Loose Leaf", "Sachets"],
    image: createPlaceholderImage("Evening Hearth Herbal", "#F5F1EB"),
    isFeatured: true,
  },
  {
    id: "emberwood-black",
    slug: "emberwood-black",
    name: "Emberwood Black",
    shortDescription: "Cocoa husk, toasted malt, and ember-warm finish.",
    description:
      "A bold yet velvety black tea fired over gentle heat. Notes of cocoa husk and toasted malt settle into a glowing finish.",
    price: 24,
    tastingNotes: ["Cocoa husk", "Toasted malt", "Ember"],
    brewingSteps: [
      "3g per cup · 96°C / 205°F",
      "Steep 3-4 minutes for strength",
      "Lovely with oat milk for a latte",
    ],
    sizeOptions: ["75g pouch", "150g tin"],
    formatOptions: ["Loose Leaf"],
    image: createPlaceholderImage("Emberwood Black", "#A7C4A0"),
  },
  {
    id: "citrus-grove-white",
    slug: "citrus-grove-white",
    name: "Citrus Grove White",
    shortDescription: "Silver buds with Meyer lemon zest and meadow florals.",
    description:
      "Tender white buds with sunlit citrus aroma. The cup is delicate, bright, and softly sweet—ideal for moments of reflection.",
    price: 26,
    tastingNotes: ["Meyer lemon", "Meadow floral", "Silk"],
    brewingSteps: [
      "2g per cup · 85°C / 185°F",
      "Steep 2-3 minutes for clarity",
      "Enjoy without milk to savor the nuance",
    ],
    sizeOptions: ["40g tin", "80g tin"],
    formatOptions: ["Loose Leaf"],
    image: createPlaceholderImage("Citrus Grove White", "#C8A68C"),
  },
  {
    id: "autumn-spice-chai",
    slug: "autumn-spice-chai",
    name: "Autumn Spice Chai",
    shortDescription: "Cardamom, clove, smoked cinnamon with malted black tea.",
    description:
      "A warming chai inspired by woodland firesides. Rich black tea layered with smoked cinnamon, cardamom, and clove for cozy evenings.",
    price: 20,
    tastingNotes: ["Cardamom", "Smoked cinnamon", "Clove"],
    brewingSteps: [
      "3g per cup · 96°C / 205°F",
      "Simmer with oat milk 4-5 minutes",
      "Finish with raw honey if desired",
    ],
    sizeOptions: ["80g pouch", "160g tin"],
    formatOptions: ["Loose Leaf"],
    image: createPlaceholderImage("Autumn Spice Chai", "#A7C4A0"),
  },
];

export function getAllTeas(): TeaProduct[] {
  return teas;
}

export function getFeaturedTeas(): TeaProduct[] {
  return teas.filter((tea) => tea.isFeatured);
}

export function getTeaBySlug(slug: string): TeaProduct | undefined {
  return teas.find((tea) => tea.slug === slug);
}
