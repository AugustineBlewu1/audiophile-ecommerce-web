"use client";

import React from "react";
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

export default function SingleEarphonePage() {
  const router = useRouter();
  const { slug } = useParams();
  console.log("params", slug);
  const breakPoint = useBreakpoint();
  const getEarphoneData = data?.filter(
    (products) => products.slug === slug
  )[0];
  const headPhoneSrc = breakPoint
    ? getEarphoneData?.categoryImage[breakPoint]
    : getEarphoneData?.categoryImage.desktop;

  console.log("headPhoneSrc", headPhoneSrc);
  const productContent: CardContentDetailsProps = {
    buttonAction: () => {},
    buttonText: "ADD TO CART",
    title: getEarphoneData?.name,
    description: getEarphoneData?.description,
    layout: "left",
    textColor: "text-secondary",
    counter: {
      value: 1,
      increment: () => {},
      decrement: () => {},
    },
    price: getEarphoneData?.price,
  };

  const [paragraph, paragraph2] = splitAfterWord(
    getEarphoneData?.features,
    "beat."
  );
  return (
    <div>
      <Navbar />
      <div className="mt-24 py-20 container mx-auto px-24">
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
        <div className="py-52">

        <SpeakersSection />
        </div>

        <BearSection />

        
      </div>
      <Footer />
    </div>
  );
}
