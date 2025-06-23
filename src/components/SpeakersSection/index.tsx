"use client";

import { useBreakpoint } from "@/hooks/use-breakpoints";
import { speakersList } from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpeakersSection = () => {

  return (
    <div className="flex flex-col md:flex-row gap-y-36 gap-x-4 md:justify-between md:w-full items-center md:items-start">
      {speakersList?.map((speaker, index) => {
        console.log('spekaer', speaker)
        const imageSrc = speaker.image.slice(1)
       
        return (
          <div
            className="relative min-h-fit  rounded-md bg-accent w-96  items-center flex flex-col "
            key={index}
          >
            <Image
              src={imageSrc}
              alt={speaker.name + "Image"}
              className="-top-24 absolute object-contain h-72 w-72"
              width={288}
              height={288}
            />
            <div className="flex flex-col justify-center items-center mt-36 md:mt-32 lg:mt-40 mb-8 text-center space-y-4">
              <h2 className="text-xl font-bold tracking-wider  ">
                {speaker?.name?.toUpperCase()}
              </h2>
              <Link href={speaker?.link} className="inline-flex items-center gap-x-3 hover:cursor-pointer">
                <h4 className="tracking-wider text-secondary/50">SHOP</h4>
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt="Arrow SVG"
                  className=" object-contain"
                  width={8}
                  height={8}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpeakersSection;
