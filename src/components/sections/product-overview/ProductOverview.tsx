import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from 'lucide-react';
import React from "react";

interface ProductOverviewProps {
  title: string;
  savings: string;
  description: string | string[];
  imageSrc: string;
  buttonLabel: string;
  comingSoon?: boolean;
}

export const ProductOverview = ({
  title,
  savings,
  description,
  imageSrc,
  buttonLabel,
  comingSoon = false,
}: ProductOverviewProps) => (
  <div className="flex flex-col md:flex-row-reverse items-center justify-center">
    <Image
      src={imageSrc}
      alt={title}
      width={900}
      height={900}
      className="bg-transparent h-full w-auto ml-[-70px] md:ml-0 mt-10 md:mt-0"
    />
    <div className="text-white max-w-lg z-50 mt-10 my-16">
      <h3 className="text-md md:text-2xl font-bold leading-5">SWIFT JOINT</h3>
      <h3 className="text-xl md:text-6xl font-extrabold whitespace-nowrap">
        {title}
      </h3>
      {savings && (
        <p className="text-orange-500 text-lg md:text-3xl font-bold">
          Saves More Than<br/>{savings}
        </p>
      )}
      <p className="mt-10 mb-10">
        {Array.isArray(description)
          ? description.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < description.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))
          : description}
      </p>

      <Button variant="outline" size={"xl"} className="mt-4 text-orange-400 text-lg flex items-center cursor-pointer">
        {buttonLabel}<MoveUpRight strokeWidth={3}/>
      </Button>
      {comingSoon && (
        <span className="inline-block uppercase text-[#E5841180] py-1 rounded-full mt-3 text-3xl font-bold">
          Launching Soon
        </span>
      )}
    </div>
  </div>
);
