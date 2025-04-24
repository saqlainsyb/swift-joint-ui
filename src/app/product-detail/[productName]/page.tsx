import { productDetails } from "@/data/productDetails";
import ProductHero from "@/components/product-detail/ProductHero";
import ProductDescription from "@/components/product-detail/ProductDescription";
import ProductSpecs from "@/components/product-detail/ProductSpecs";
import ProductComparison from "@/components/product-detail/ProductComparison";
import ProductPortability from "@/components/product-detail/ProductPortability";
import ProductReference from "@/components/product-detail/ProductReference";
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ productName : string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { productName } = await params;
  const product = productDetails.find(p => p.slug === productName);
  return {
    title: `${product?.title} - Swift Joint`,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { productName } = await params;
  const product = productDetails.find(p => p.slug === productName);

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <main>
      <ProductHero
        imageSrc={product.heroImage}
        highlights={product.highlights}
      />

      <ProductDescription
        title={product.title}
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
