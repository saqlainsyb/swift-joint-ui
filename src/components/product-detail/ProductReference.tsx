import Image from "next/image";

interface ProductReferenceProps {
  imageSrc: string;
}

export default function ProductReference({ imageSrc }: ProductReferenceProps) {
  return (
    <section className="bg-[#2F2F2F] px-8 lg:px-30 py-16 flex justify-center">
      <Image src={imageSrc} alt="Product Reference Data" width={800} height={600}/>
    </section>
  );
}
