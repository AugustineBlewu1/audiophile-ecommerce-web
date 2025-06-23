"use client";

import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard, { ProductCardProps } from "@/components/ProductCard.tsx";
import SpeakersSection from "@/components/SpeakersSection";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import data from "@/lib/data.json";
import {  getSpeakersLayout } from "@/lib/variables";
import { useRouter } from "next/navigation";

export default function Speaker() {
  console.log("data", data);

  const breakPoint = useBreakpoint();
  const router = useRouter();

  const getSpeakers = data?.filter(
    (products) => products.category === "speakers"
  );
  console.log("getSpeakers", getSpeakers);

 

  const speakersProduct: ProductCardProps[] = getSpeakers?.map(
    (speaker) => {
      const speakersSrc = breakPoint
        ? speaker?.categoryImage[breakPoint]
        : speaker?.categoryImage.desktop;

      return {
        image: speakersSrc,
        productContent: {
          buttonAction: () => {
     router.push(`/speaker/${speaker?.slug}`)

          },
          buttonText: "SEE PRODUCT",
          title: speaker?.name,
          type: speaker?.new ? "NEW PRODUCT" : "",
          description: speaker?.description,
          textColor: "text-secondary",
          layout: getSpeakersLayout(speaker?.slug),
        },
      };
    }
  );

  return (
    <>
      <Header title="Speakers" />;
      <div className="lg:mt-40 mt-20 container mx-auto px-4 md:px-8 lg:px-24 space-y-16 lg:space-y-28">
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
