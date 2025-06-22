"use client";

import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard, { ProductCardProps } from "@/components/ProductCard.tsx";
import SpeakersSection from "@/components/SpeakersSection";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import data from "@/lib/data.json";
import {  getSpeakersLayout } from "@/lib/variables";

export default function Earphones() {
  console.log("data", data);

  const breakPoint = useBreakpoint();

  const getEarPhones = data?.filter(
    (products) => products.category === "earphones"
  );
  console.log("getEarPhones", getEarPhones);

 

  const earPhonesProducts: ProductCardProps[] = getEarPhones?.map(
    (headphone) => {
      const earPhonesSrc = breakPoint
        ? headphone?.categoryImage[breakPoint]
        : headphone?.categoryImage.desktop;

      return {
        image: earPhonesSrc,
        productContent: {
          buttonAction: () => {},
          buttonText: "SEE PRODUCT",
          title: headphone?.name,
          type: headphone?.new ? "NEW PRODUCT" : "",
          description: headphone?.description,
          textColor: "text-secondary",
          layout: "left",
        },
      };
    }
  );

  return (
    <>
      <Header title="Speakers" />;
      <div className="mt-40 container mx-auto px-24 space-y-28">
        {earPhonesProducts
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
