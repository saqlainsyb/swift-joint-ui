import Image from "next/image";

interface ProductPortabilityProps {
  imageSrc: string;
}

export default function ProductPortability({ imageSrc }: ProductPortabilityProps) {
  return (
    <section className="bg-[#383838] px-8 lg:px-30 py-16 flex justify-center">
      <Image src={imageSrc} alt="Portability Comparison" width={800} height={600}/>
    </section>
  );
}
