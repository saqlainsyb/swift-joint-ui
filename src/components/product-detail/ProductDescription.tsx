interface ProductDescriptionProps {
    title: string;
    description: string;
  }
  
  export default function ProductDescription({ title, description }: ProductDescriptionProps) {
    return (
      <section className="bg-[#2F2F2F] text-white px-8 lg:px-30 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="max-w-3xl mx-auto text-lg">{description}</p>
      </section>
    );
  }
  