"use client";

import React, { useEffect, useMemo, useState } from "react";
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

export default function SingleEarphonePage() {
  const router = useRouter();
  const { slug } = useParams();
  console.log("params", slug);
  const breakPoint = useBreakpoint();
  const [productQuantity, setProductQuantity] = useState(1);
  const {
    addProduct,
    clearCart,
    clearProductItem,
    products,
    totalProducts,
    updateProduct,
    singleProductTotal,
    removeAProduct,
  } = useCartStore();

  const getEarphoneData = data?.filter((products) => products.slug === slug)[0];
  const earPhoneSrc = breakPoint
    ? getEarphoneData?.categoryImage[breakPoint]
    : getEarphoneData?.categoryImage.desktop;

  console.log("earPhoneSrc", earPhoneSrc);
  const productContent: CardContentDetailsProps = {
    buttonAction: () => {
      if(singleProductTotal(getEarphoneData?.slug) > 1){
        updateProduct(getEarphoneData?.slug, productQuantity)
      } else {
        addProduct({
        image: getEarphoneData?.image.mobile?.slice(1),
        name: getEarphoneData?.name,
        price: getEarphoneData?.price,
        quantity: productQuantity,
        slug: getEarphoneData?.slug,
      });
      }
     
    },
    buttonText: "ADD TO CART",
    title: getEarphoneData?.name,
    description: getEarphoneData?.description,
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
        // removeAProduct(getEarphoneData?.slug)
      },
    },
    price: getEarphoneData?.price,
  };

  useEffect(() => {
    if(singleProductTotal(getEarphoneData?.slug) > 1){
      setProductQuantity(singleProductTotal(getEarphoneData?.slug))
    } else {
      setProductQuantity(1)

    }
  },[singleProductTotal(getEarphoneData?.slug)])

  const [paragraph, paragraph2] = splitAfterWord(
    getEarphoneData?.features,
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
            image={
              earPhoneSrc?.startsWith("./")
                ? earPhoneSrc?.slice(1)
                : earPhoneSrc
            }
            productContent={productContent}
          />
        </div>
        {/* features section */}
        <Features
          paragraphs={[paragraph, paragraph2]}
          boxFeatures={getEarphoneData?.includes}
          imageFirst={
            breakPoint
              ? getEarphoneData?.gallery?.first[breakPoint]?.slice(1)
              : getEarphoneData?.gallery?.first.desktop?.slice(1)
          }
          imageSecond={
            breakPoint
              ? getEarphoneData?.gallery?.second[breakPoint]?.slice(1)
              : getEarphoneData?.gallery?.second.desktop?.slice(1)
          }
          imageThird={
            breakPoint
              ? getEarphoneData?.gallery?.third[breakPoint]?.slice(1)
              : getEarphoneData?.gallery?.third.desktop?.slice(1)
          }
        />

        {/* Others */}
        <OthersSection
          others={getEarphoneData?.others.map((other) => {
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
