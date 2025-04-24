import { productDetails } from "@/data/productDetails";
import ProductHero from "@/components/product-detail/ProductHero";
import ProductDescription from "@/components/product-detail/ProductDescription";
import ProductSpecs from "@/components/product-detail/ProductSpecs";
import ProductComparison from "@/components/product-detail/ProductComparison";
import ProductPortability from "@/components/product-detail/ProductPortability";
import ProductReference from "@/components/product-detail/ProductReference";

interface ProductDetailPageProps {
  params: {
    'product-name': string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productDetails.find(p => p.slug === params["product-name"]);

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <main>
      <ProductHero
        imageSrc={product.heroImage}
        highlights={product.highlights}
      />

      <ProductDescription
        title={product.title}
        description={product.description}
      />

      <ProductSpecs imageSrc={product.specsImage} />

      {product.comparisonImage && (
        <ProductComparison imageSrc={product.comparisonImage} />
      )}

      {product.portabilityImage && (
        <ProductPortability imageSrc={product.portabilityImage} />
      )}

      {product.referenceImage && (
        <ProductReference imageSrc={product.referenceImage} />
      )}
    </main>
  );
}
