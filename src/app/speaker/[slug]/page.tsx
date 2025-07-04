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

export default function SingleSpeakerPage() {
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

  const getSpeakerData = data?.filter((products) => products.slug === slug)[0];
  const headPhoneSrc = breakPoint
    ? getSpeakerData?.categoryImage[breakPoint]
    : getSpeakerData?.categoryImage.desktop;

  console.log("headPhoneSrc", headPhoneSrc);
  const productContent: CardContentDetailsProps = {
    buttonAction: () => {
      if (singleProductTotal(getSpeakerData?.slug) > 1) {
        updateProduct(getSpeakerData?.slug, productQuantity);
      } else {
        addProduct({
          image: getSpeakerData?.image.mobile?.slice(1),
          name: getSpeakerData?.name,
          price: getSpeakerData?.price,
          quantity: productQuantity,
          slug: getSpeakerData?.slug,
        });
      }
    },
    buttonText: "ADD TO CART",
    title: getSpeakerData?.name,
    description: getSpeakerData?.description,
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
    price: getSpeakerData?.price,
  };

  useEffect(() => {
    if (singleProductTotal(getSpeakerData?.slug) > 1) {
      setProductQuantity(singleProductTotal(getSpeakerData?.slug));
    } else {
      setProductQuantity(1);
    }
  }, [singleProductTotal(getSpeakerData?.slug)]);
  const [paragraph, paragraph2] = splitAfterWord(
    getSpeakerData?.features,
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
              headPhoneSrc?.startsWith("./")
                ? headPhoneSrc?.slice(1)
                : headPhoneSrc
            }
            productContent={productContent}
          />
        </div>
        {/* features section */}
        <Features
          paragraphs={[paragraph, paragraph2]}
          boxFeatures={getSpeakerData?.includes}
          imageFirst={
            breakPoint
              ? getSpeakerData?.gallery?.first[breakPoint]?.slice(1)
              : getSpeakerData?.gallery?.first.desktop?.slice(1)
          }
          imageSecond={
            breakPoint
              ? getSpeakerData?.gallery?.second[breakPoint]?.slice(1)
              : getSpeakerData?.gallery?.second.desktop?.slice(1)
          }
          imageThird={
            breakPoint
              ? getSpeakerData?.gallery?.third[breakPoint]?.slice(1)
              : getSpeakerData?.gallery?.third.desktop?.slice(1)
          }
        />

        {/* Others */}
        <OthersSection
          others={getSpeakerData?.others.map((other) => {
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
