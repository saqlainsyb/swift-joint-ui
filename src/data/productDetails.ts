export interface ProductDetail {
    slug: string;
    title: string;
    heroImage: string;
    highlights: Array<{ label: string; value: string }>;
    description: string;
    specsImage: string;
    comparisonImage?: string;
    portabilityImage?: string;
    referenceImage?: string;
    weight?: string;
  }

export const productDetails: ProductDetail[] = [
  {
    slug: "model1",
    title: "Swift Joint Model 1",
    heroImage: "/images/products/model1-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      { label: "Works In", value: "Harsh Environment" },
      { label: "No Size", value: "Limitations" },
    ],
    description:
      "Designed for agility and efficiency, the Swift Joint Model 1 weighs just 8 KG...",
    specsImage: "/images/products/model1-specs.png",
    comparisonImage: "/images/products/model1-comparison.png",
    portabilityImage: "/images/products/model1-portability.png",
    weight: "8 KG",
  },
  {
    slug: "lite1",
    title: "Swift Joint Lite 1",
    heroImage: "/images/products/lite1-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      { label: "Works In", value: "Harsh Environment" },
      { label: "No Size", value: "Limitations" },
    ],
    description:
      "Compact and ultra-lightweight at just 5 KG, Swift Joint Lite 1 is designed...",
    specsImage: "/images/products/lite1-specs.png",
    // portabilityImage: "/images/products/lite1-portability.png",
    weight: "5 KG",
  },
  {
    slug: "portable-lite1",
    title: "Swift Joint Portable Lite 1",
    heroImage: "/images/products/portable-lite1-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      { label: "Works In", value: "Harsh Environment" },
      { label: "No Size", value: "Limitations" },
    ],
    description:
      "The Swift Joint Portable Lite 1 ensures faster deployment and efficiency...",
    specsImage: "/images/products/portable-lite1-specs.png",
    comparisonImage: "/images/products/portable-lite1-comparison.png",
    portabilityImage: "/images/products/portable-lite1-portability.png",
    referenceImage: "/images/products/portable-lite1-reference.png",
    weight: "15 KG",
  },
  {
    slug: "portable-pro-max",
    title: "Swift Joint Portable Pro Max",
    heroImage: "/images/products/portable-pro-max-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      { label: "Works In", value: "Harsh Environment" },
      { label: "No Size", value: "Limitations" },
    ],
    description:
      "Engineered for extreme durability and unmatched portability...",
    specsImage: "/images/products/portable-pro-max-specs.png",
    comparisonImage: "/images/products/portable-pro-max-comparison.png",
    portabilityImage: "/images/products/portable-pro-max-portability.png",
    referenceImage: "/images/products/portable-pro-max-reference.png",
    weight: "35 KG",
  },
];
