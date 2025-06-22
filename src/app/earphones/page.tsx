"use client";

import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard, { ProductCardProps } from "@/components/ProductCard.tsx";
import SpeakersSection from "@/components/SpeakersSection";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import data from "@/lib/data.json";
import { useRouter } from "next/navigation";

export default function Earphones() {
  console.log("data", data);

  const breakPoint = useBreakpoint();
  const router = useRouter();

  const getEarPhones = data?.filter(
    (products) => products.category === "earphones"
  );
  console.log("getEarPhones", getEarPhones);

  const earPhonesProducts: ProductCardProps[] = getEarPhones?.map(
    (earPhone) => {
      const earPhonesSrc = breakPoint
        ? earPhone?.categoryImage[breakPoint]
        : earPhone?.categoryImage.desktop;

      return {
        image: earPhonesSrc,
        productContent: {
          buttonAction: () => {
           router.push(`/earphones/${earPhone?.slug}`)

          },
          buttonText: "SEE PRODUCT",
          title: earPhone?.name,
          type: earPhone?.new ? "NEW PRODUCT" : "",
          description: earPhone?.description,
          textColor: "text-secondary",
          layout: "left",
        },
      };
    }
  );

  return (
    <>
      <Header title="Earphones" />;
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
      <Footer />
    </>
  );
}
