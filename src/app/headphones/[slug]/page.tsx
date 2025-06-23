"use client";

import React, { useEffect, useState } from "react";
import data from "@/lib/data.json";
import Navbar from "@/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useBreakpoint } from "@/hooks/use-breakpoints";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { CardContentDetailsProps } from "@/components/CardContentDetails";
import { splitAfterWord } from "@/lib/variables";
import Features from "@/components/Features";
import OthersSection from "@/components/OthersSection";
import SpeakersSection from "@/components/SpeakersSection";
import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import { useCartStore } from "@/lib/store";

export default function SingleHeadPhonePage() {
  const router = useRouter();
  const { slug } = useParams();
  console.log("params", slug);
  const breakPoint = useBreakpoint();
    const [productQuantity, setProductQuantity] = useState(1);
      const {
        addProduct,
        products,
        updateProduct,
        singleProductTotal,
 
      } = useCartStore();
  const getHeadPhoneData = data?.filter(
    (products) => products.slug === slug
  )[0];
  const headPhoneSrc = breakPoint
    ? getHeadPhoneData.image[breakPoint]?.slice(1)
    : getHeadPhoneData?.image.desktop?.slice(1);

  console.log("headPhoneSrc", headPhoneSrc);
  console.log("breakpoint", breakPoint);
  const productContent: CardContentDetailsProps = {
    buttonAction: () => {
       if(singleProductTotal(getHeadPhoneData?.slug) > 1){
        updateProduct(getHeadPhoneData?.slug, productQuantity)
      } else {
        addProduct({
        image: getHeadPhoneData?.image.mobile?.slice(1),
        name: getHeadPhoneData?.name,
        price: getHeadPhoneData?.price,
        quantity: productQuantity,
        slug: getHeadPhoneData?.slug,
      });
      }
    },
    buttonText: "ADD TO CART",
    title: getHeadPhoneData?.name,
    description: getHeadPhoneData?.description,
    layout: "left",
    textColor: "text-secondary",
    counter: {
      value: productQuantity,
      increment: () => {
        setProductQuantity(productQuantity + 1);

      },
      decrement: () => {
        if (productQuantity > 1) {
          setProductQuantity(productQuantity - 1);
        }
      },
    },
    price: getHeadPhoneData?.price,
  };

  useEffect(() => {
      if(singleProductTotal(getHeadPhoneData?.slug) > 1){
        setProductQuantity(singleProductTotal(getHeadPhoneData?.slug))
      } else {
        setProductQuantity(1)
  
      }
    },[singleProductTotal(getHeadPhoneData?.slug)])

  const [paragraph, paragraph2] = splitAfterWord(
    getHeadPhoneData?.features,
    "beat."
  );

  
  return (
    <div>
      <Navbar />
      <div className="mt-24 py-20 container mx-auto lg:px-24 px-4">
        <h4
          onClick={router.back}
          className="text-secondary/50 text-lg hover:cursor-pointer hover:text-secondary/30"
        >
          Go back
        </h4>

        <div className="py-14">
          <ProductDetailsCard
            image={ headPhoneSrc }
            productContent={productContent}
          />
        </div>
        {/* features section */}
        <Features
          paragraphs={[paragraph, paragraph2]}
          boxFeatures={getHeadPhoneData?.includes}
          imageFirst={
            breakPoint
              ? getHeadPhoneData?.gallery?.first[breakPoint]?.slice(1)
              : getHeadPhoneData?.gallery?.first.desktop?.slice(1)
          }
          imageSecond={
            breakPoint
              ? getHeadPhoneData?.gallery?.second[breakPoint]?.slice(1)
              : getHeadPhoneData?.gallery?.second.desktop?.slice(1)
          }
          imageThird={
            breakPoint
              ? getHeadPhoneData?.gallery?.third[breakPoint]?.slice(1)
              : getHeadPhoneData?.gallery?.third.desktop?.slice(1)
          }
        />

        {/* Others */}
        <OthersSection
          others={getHeadPhoneData?.others.map((other) => {
            return {
              slug: other?.slug,
              name: other?.name,
              image: breakPoint
                ? other?.image[breakPoint]?.slice(1)
                : other.image?.desktop?.slice(1),
              buttonAction: () => {
                const routeTo = other?.slug?.split("-").pop();
                router.push(`/${routeTo}/${other?.slug}`);
              },
            };
          })}
        />
        <div className="lg:py-52 py-32">

        <SpeakersSection />
        </div>

        <BearSection />

        
      </div>
      <Footer />
    </div>
  );
}
