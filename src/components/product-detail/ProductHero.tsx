import Image from "next/image";

interface ProductHeroProps {
  imageSrc: string;
  highlights?: { label?: string; value: string, icon?: string }[];
}

export default function ProductHero({ imageSrc, highlights }: ProductHeroProps) {
  return (
    <section className="bg-[#383838] text-white px-8 lg:px-30 py-16 flex flex-col items-center">
      <Image src={imageSrc} alt="Product Image" width={500} height={500} className="mb-10"/>

      <div className="flex gap-6 justify-center flex-wrap">
        {highlights && highlights.map(({ label, value, icon }, idx) => (
          <div key={idx} className="border rounded-md text-center w-60 flex flex-col items-center p-10">
            {icon && <Image src={icon} alt="highlights-icon" width={50} height={50} className="mb-5"/>}
            {idx > 1 ? <span className="block font-bold text-md leading-5">{value}</span>: <span className="block font-bold text-5xl">{value}</span>}
            {label && <span className="text-3xl font-bold leading-10">{label}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
