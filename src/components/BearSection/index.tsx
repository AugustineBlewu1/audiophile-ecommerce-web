"use client";

import { useBreakpoint } from "@/hooks/use-breakpoints";
import React from "react";
import Image from "next/image";

const BearSection = () => {
    const breakpoint = useBreakpoint();
  
  return (
    <div className="container mx-auto lg:px-24 px-4 lg:mt-32 mt-20">
    <div className=" w-full flex lg:flex-row flex-col-reverse  items-center gap-10">
      <div className="space-y-8 w-full text-center lg:text-start  lg:w-1/2">
        <h1 className="lg:text-4xl text-3xl font-extrabold uppercase text-center lg:text-start">
          Bringing you the <br className="md:hidden block lg:block" /> <span className="text-primary">best <br className="lg:hidden hidden"/> </span>{" "}
          audio gear
        </h1>
        <p className="lg:w-96 tracking-wide text-center lg:text-left text-sm text-secondary/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="relative lg:w-1/2 w-full md:h-[320px]  rounded-md">
        <Image
          src={`/assets/shared/${breakpoint}/image-best-gear.jpg`}
          alt="Best Gear"
          className="absolute object-cover  rounded-md"
          fill
        />
      </div>
    </div>
     </div>
  );
};

export default BearSection;
