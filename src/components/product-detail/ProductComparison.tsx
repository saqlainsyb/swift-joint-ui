import Image from "next/image";

interface ProductComparisonProps {
  imageSrc: string;
}

export default function ProductComparison({ imageSrc }: ProductComparisonProps) {
  return (
    <section className="bg-[#2F2F2F] px-8 lg:px-30 py-16 flex justify-center">
      <Image src={imageSrc} alt="Product Comparison" width={800} height={600}/>
    </section>
  );
}
