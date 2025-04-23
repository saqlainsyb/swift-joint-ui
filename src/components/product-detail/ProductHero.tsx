import Image from "next/image";

interface ProductHeroProps {
  imageSrc: string;
  highlights: { label: string; value: string }[];
}

export default function ProductHero({ imageSrc, highlights }: ProductHeroProps) {
  return (
    <section className="bg-[#383838] text-white px-8 lg:px-30 py-16 flex flex-col items-center">
      <Image src={imageSrc} alt="Product Image" width={500} height={500} className="mb-10"/>

      <div className="flex gap-6 justify-center flex-wrap">
        {highlights.map(({ label, value }, idx) => (
          <div key={idx} className="border rounded-md p-6 text-center w-48">
            <span className="block font-bold text-3xl">{value}</span>
            <span className="text-md">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
