"use client";

import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard, { ProductCardProps } from "@/components/ProductCard.tsx";
import SpeakersSection from "@/components/SpeakersSection";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import data from "@/lib/data.json";
import {  getSpeakersLayout } from "@/lib/variables";

export default function Speakers() {
  console.log("data", data);

  const breakPoint = useBreakpoint();

  const getSpeakers = data?.filter(
    (products) => products.category === "speakers"
  );
  console.log("getSpeakers", getSpeakers);

 

  const speakersProduct: ProductCardProps[] = getSpeakers?.map(
    (headphone) => {
      const speakersSrc = breakPoint
        ? headphone?.categoryImage[breakPoint]
        : headphone?.categoryImage.desktop;

      return {
        image: speakersSrc,
        productContent: {
          buttonAction: () => {},
          buttonText: "SEE PRODUCT",
          title: headphone?.name,
          type: headphone?.new ? "NEW PRODUCT" : "",
          description: headphone?.description,
          textColor: "text-secondary",
          layout: getSpeakersLayout(headphone?.slug),
        },
      };
    }
  );

  return (
    <>
      <Header title="Speakers" />;
      <div className="mt-40 container mx-auto px-24 space-y-28">
        {speakersProduct
          ?.slice()
          .reverse()
          .map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
          <div className="py-28">

          <SpeakersSection />
          </div>
          <BearSection />
      </div>
          <Footer/>


    </>
  );
}
