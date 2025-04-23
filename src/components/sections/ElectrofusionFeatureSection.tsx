import Image from "next/image";

export default function ElectrofusionFeatureSection() {
  return (
    <section className="px-8 lg:px-30 py-16 space-y-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-20 lg:space-x-10">
        <div className="relative">
          <div className="bg-gray-100 absolute inset-0 rounded-xl -translate-y-5 translate-x-5" />
          <Image
            src="/images/products/electrofusion-machine.png"
            alt="Electrofusion Machine"
            width={600}
            height={400}
            className="rounded-xl shadow-lg relative z-10 md:max-w-sm"
          />
        </div>
        <div className="md:max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We Provide You The Best Electrofusion Machine
          </h2>
          <p className="text-gray-600 text-lg">
            Swift Joint provides the best electrofusion machines, ensuring
            strong, seamless, and reliable pipe connections. Designed for
            efficiency and durability, our machines enhance productivity across
            industries. With advanced technology and user-friendly features, we
            deliver precision and performance. Trust Swift Joint for
            high-quality electrofusion solutions that make every joint stronger
            and smoother.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-center gap-12 lg:gap-10 lg:space-x-10 ">
        {/* Text Content */}
        <div className="flex flex-col justify-center md:max-w-lg flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Reliable Electrofusion In Any Climate
          </h2>
          <p className="text-gray-600 text-lg">
            Swift Joint provides the best electrofusion machines, built for
            reliability in any climate and harsh environments. Designed for
            strength, precision, and efficiency, our machines ensure seamless
            pipe connections with ease. With advanced technology and durability,
            Swift Joint guarantees high-performance fusion solutions that
            withstand extreme conditions, making every joint stronger.
          </p>
        </div>
        <div className="relative flex gap-2 flex-col md:flex-row w-full md:w-auto justify-stretch">
          {/* <div className="bg-gray-100 absolute inset-0 rounded-xl -translate-y-5 translate-x-5" /> */}
            <Image
                src="/images/products/electrofusion-climate-3.png"
                alt="Electrofusion Machine"
                width={250}
                height={350}
                className="rounded-xl shadow-lg relative z-10 h-full w-full md:w-auto"
            />
            <div className="flex flex-col gap-2">
            <Image
                src="/images/products/electrofusion-climate-1.png"
                alt="Electrofusion Machine"
                width={250}
                height={350}
                className="rounded-xl shadow-lg relative z-10 h-full w-full md:w-auto"
          />
            <Image
                src="/images/products/electrofusion-climate-2.png"
                alt="Electrofusion Machine"
                width={250}
                height={350}
                className="rounded-xl shadow-lg relative z-10 w-full md:w-auto"
          />
            </div>
        </div>
      </div>
    </section>
  );
}
