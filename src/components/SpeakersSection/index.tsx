"use client";

import { useBreakpoint } from "@/hooks/use-breakpoints";
import { speakersList } from "@/lib/variables";
import React from "react";

const SpeakersSection = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="flex flex-row justify-between w-full">
      {speakersList?.map((speaker, index) => {
        //check the breakpoint type and display the respective image
        const imageSrc = breakpoint
          ? speaker.image[breakpoint]?.slice(1)
          : speaker.image.desktop?.slice(1);

        return (
          <div
            className="relative min-h-fit  rounded-md bg-accent w-96  items-center flex flex-col "
            key={index}
          >
            <img
              src={imageSrc}
              alt={speaker.name + "Image"}
              className="-top-24 absolute object-contain h-72 w-72"
            />
            <div className="flex flex-col justify-center items-center mt-40 mb-8 text-center space-y-4">
              <h2 className="text-xl font-bold tracking-wider  ">
                {speaker?.name?.toUpperCase()}
              </h2>
              <span className="inline-flex items-center">
                <h4 className="tracking-wider text-secondary/50">SHOP</h4>
                <img
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt="Arrow SVG"
                  className="w-3 h-3 object-contain"
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpeakersSection;
