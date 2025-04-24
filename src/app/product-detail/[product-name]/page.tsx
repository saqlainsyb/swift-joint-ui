'use client';

import { useParams } from 'next/navigation';
import { productDetails } from "@/data/productDetails";
import ProductHero from "@/components/product-detail/ProductHero";
import ProductDescription from "@/components/product-detail/ProductDescription";
import ProductSpecs from "@/components/product-detail/ProductSpecs";
import ProductComparison from "@/components/product-detail/ProductComparison";
import ProductPortability from "@/components/product-detail/ProductPortability";
import ProductReference from "@/components/product-detail/ProductReference";

export default function ProductDetailPage() {
  const params = useParams<{ 'product-name': string }>();
  const productSlug = params['product-name'];

  const product = productDetails.find(p => p.slug === productSlug);

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
