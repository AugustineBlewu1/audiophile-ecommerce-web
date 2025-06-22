"use client";

import { useBreakpoint } from "@/hooks/use-breakpoints";
import { SpeakersList } from "@/lib/interface";
import React from "react";
import CardContent from "../CardContent";
import { navItems } from "@/lib/variables";
import Link from "next/link";
import SpeakersSection from "../SpeakersSection";

const Speakers = () => {
 

  const breakpoint = useBreakpoint();

  const speaker = {
    mobile: "./assets/home/mobile/image-speaker-zx9.png",
    tablet: "./assets/home/tablet/image-speaker-zx9.png",
    desktop: "./assets/home/desktop/image-speaker-zx9.png",
  };
  const speakerOnTable = {
    mobile: "./assets/home/mobile/image-speaker-zx7.jpg",
    tablet: "./assets/home/tablet/image-speaker-zx7.jpg",
    desktop: "./assets/home/desktop/image-speaker-zx7.jpg",
  };
  const earPhones = {
    mobile: "./assets/home/mobile/image-earphones-yx1.jpg",
    tablet: "./assets/home/tablet/image-earphones-yx1.jpg",
    desktop: "./assets/home/desktop/image-earphones-yx1.jpg",
  };

 

  const imageSpeakerSrc = breakpoint ? speaker[breakpoint] : speaker.desktop;
  const imageSpeakerOnTableSrc = breakpoint
    ? speakerOnTable[breakpoint]
    : speakerOnTable.desktop;
  const imageEarPhonesSrc = breakpoint
    ? earPhones[breakpoint]
    : earPhones.desktop;

  return (
    <section>
      <div className="container mx-auto px-24 mt-60">
        <SpeakersSection />
            {/* stero speakers */}
        <div className="relative bg-primary w-full h-[680px] mt-44 overflow-hidden rounded-md">
          <img
            src="/assets/home/desktop/pattern-circles.svg"
            alt="Pattern Circles"
            className=" absolute -left-40 -top-10  w-[80%] object-contain  "
          />
          <img
            src={imageSpeakerSrc}
            alt={"Speaker Image"}
            className="absolute w-[450px] -bottom-3 left-36 "
          />
          <div className="relative  h-full flex justify-end items-center pr-40">
            <CardContent
              title={
                <>
                  ZX9 <br /> SPEAKER
                </>
              }
              description={
                "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
              }
              buttonText={"SEE PRODUCT"}
              buttonAction={() => {}}
              variant={"secondary"}
            />
          </div>
        </div>
            
            {/* Speaker on Table */}
        <div className="relative bg-muted w-full h-[380px] mt-14 overflow-hidden rounded-md">
          <img
            src={imageSpeakerOnTableSrc}
            alt={"Speaker Image"}
            className=" absolute object-cover w-full"
          />
          <div className="absolute h-full flex justify-start items-center pl-40">
            <CardContent
              title={<>ZX9 SPEAKER</>}
              description={""}
              buttonText={"SEE PRODUCT"}
              buttonAction={() => {}}
              variant={"outline"}
              textColor="text-secondary"
              titleTextSize={"sm"}
            />
          </div>
        </div>

           {/* Earphones */}

        <div className="mt-14 w-full flex flex-row gap-10 mb-40">
          <div className="rounded-md h-[380px] w-1/2">
            <img
              src={imageEarPhonesSrc}
              alt="Ear Phone Image"
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="relative rounded-md h-[380px] w-1/2 bg-accent">
            <div className="absolute h-full flex justify-start items-center pl-40 ">
              <CardContent
                title={<>YX1 EARPHONES</>}
                description={""}
                buttonText={"SEE PRODUCT"}
                buttonAction={() => {}}
                variant={"outline"}
                textColor="text-secondary"
                titleTextSize={"sm"}
              />
            </div>
          </div>
        </div>

       
      </div>

   
    </section>
  );
};

export default Speakers;
