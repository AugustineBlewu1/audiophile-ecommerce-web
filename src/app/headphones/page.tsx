"use client";

import Header from "@/components/Header";
import ProductCard, { ProductCardProps } from "@/components/ProductCard.tsx";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import data from "@/lib/data.json";
import { getLayout } from "@/lib/variables";

export default function HeadPhones() {
  console.log("data", data);

  const breakPoint = useBreakpoint();

  const getHeadPhones = data?.filter(
    (products) => products.category === "headphones"
  );
  console.log("getHeadPhones", getHeadPhones);

 

  const headPhonesProducts: ProductCardProps[] = getHeadPhones?.map(
    (headphone) => {
      const headPhoneSrc = breakPoint
        ? headphone?.categoryImage[breakPoint]
        : headphone?.categoryImage.desktop;

      return {
        image: headPhoneSrc,
        productContent: {
          buttonAction: () => {},
          buttonText: "SEE PRODUCT",
          title: headphone?.name,
          type: headphone?.new ? "NEW PRODUCT" : "",
          description: headphone?.description,
          textColor: "text-secondary",
          layout: getLayout(headphone?.slug),
        },
      };
    }
  );

  return (
    <>
      <Header title="Headphones" />;
      <div className="mt-40 container mx-auto px-24 space-y-28">
        {headPhonesProducts
          ?.slice()
          .reverse()
          .map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
      </div>
    </>
  );
}
