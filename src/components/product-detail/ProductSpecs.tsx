import Image from "next/image";

interface ProductSpecsProps {
  imageSrc: string;
}

export default function ProductSpecs({ imageSrc }: ProductSpecsProps) {
  return (
    <section className="bg-[#383838] px-8 lg:px-30 py-16 flex justify-center">
      <Image src={imageSrc} alt="Product Specifications" width={800} height={600}/>
    </section>
  );
}
