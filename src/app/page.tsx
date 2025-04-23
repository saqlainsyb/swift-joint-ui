import ElectrofusionFeatureSection from "@/components/sections/ElectrofusionFeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductOverviewSection from "@/components/sections/product-overview/ProductOverviewSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductOverviewSection/>
      <ElectrofusionFeatureSection/>
    </main>
  );
}
