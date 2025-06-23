"use client";

import { useBreakpoint } from "@/hooks/use-breakpoints";
import React from "react";
import CardContent from "../CardContent";
import SpeakersSection from "../SpeakersSection";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const Speakers = () => {
  const breakpoint = useBreakpoint();
  const router = useRouter();

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

  //speaker image
  const imageSpeakerSrc = breakpoint
    ? speaker[breakpoint]?.slice(1)
    : speaker.desktop?.slice(1);
    
  //image on table
  const imageSpeakerOnTableSrc = breakpoint
    ? speakerOnTable[breakpoint]?.slice(1)
    : speakerOnTable.desktop?.slice(1);

  //Earphones
  const imageEarPhonesSrc = breakpoint
    ? earPhones[breakpoint]?.slice(1)
    : earPhones.desktop?.slice(1);

  return (
    <section>
      <div className="mx-auto px-4 lg:px-24 mt-32 lg:mt-60">
        <SpeakersSection />
        {/* stero speakers */}
        <div className="relative bg-primary w-full h-[680px] mt-44 overflow-hidden rounded-md md:inset-0 justify-center   flex lg:block">
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt="Pattern Circles"
            width={1090}
            height={300}
            className="absolute lg:-left-40 lg:-top-10 object-cover md:-top-35 -top-5"
          />

          <Image
            src={imageSpeakerSrc}
            alt={"Speaker Image"}
            width={
              breakpoint === "mobile"
                ? 200
                : breakpoint === "tablet"
                ? 200
                : 400
            }
            height={
              breakpoint === "mobile"
                ? 300
                : breakpoint === "tablet"
                ? 300
                : 500
            }
            className={clsx(
              "absolute lg:top-auto -bottom-3  lg:left-36  md:top-20 top-20"
            )}
          />

          <div className="relative  h-full flex justify-end items-center  lg:pr-40 md:pt-64 pt-64 lg:pt-0">
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
              buttonAction={() => {
                router.push("/speaker/zx9-speaker");
              }}
              variant={"secondary"}
            />
          </div>
        </div>

        {/* Speaker on Table */}
        <div className="relative bg-muted w-full h-[380px] mt-14 overflow-hidden rounded-md">
          <Image
            src={imageSpeakerOnTableSrc}
            alt={"Speaker Image"}
            className="absolute object-cover "
            fill
          />
          <div className="absolute h-full flex justify-start items-center lg:pl-40 pl-8">
            <CardContent
              title={<>ZX9 SPEAKER</>}
              description={""}
              buttonText={"SEE PRODUCT"}
              buttonAction={() => {
                router.push(" /speaker/zx7-speaker");
              }}
              variant={"outline"}
              textColor="text-secondary"
              titleTextSize={"lg"}
            />
          </div>
        </div>

        {/* Earphones */}

        <div className="mt-14 w-full flex flex-col md:flex-row md:gap-10 lg:mb-40 gap-8">
          <div className="relative rounded-md   h-[190px] lg:h-[380px] md:w-1/2 overflow-hidden">
            <Image
              src={imageEarPhonesSrc}
              alt="Ear Phone Image"
              className="absolute object-cover rounded-md"
              fill
            />
          </div>
          <div className="relative rounded-md lg:h-[380px] h-[190px] md:w-1/2 bg-accent">
            <div className="absolute  lg:h-full flex inset-0 justify-center items-center   ">
              <CardContent
                title={<>YX1 EARPHONES</>}
                description={""}
                buttonText={"SEE PRODUCT"}
                buttonAction={() => {
                  router.push("/earphones/yx1-earphones");
                }}
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
