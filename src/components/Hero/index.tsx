"use client";

import React from 'react'
import { Button } from '../ui/button'
import { useBreakpoint } from '@/hooks/use-breakpoints'
import Image from 'next/image';

const Hero = () => {

  const breakPoint = useBreakpoint();

  return (
    <>

    <div className="relative  h-screen bg-secondary w-full overflow-hidden ">
        <Image
          src={`/assets/home/${breakPoint}/image-header.jpg`}
          alt=" HeadPhone"
          className="absolute inset-0 object-cover aspect-3/2"
          fill
        />
        <div className="absolute inset-0 flex justify-center flex-col lg:mx-auto container space-y-8 lg:pl-24 items-center lg:items-start">
          <h3 className="text-lg text-white/35 lg:tracking-widest tracking-[0.5rem]">NEW PRODUCT</h3>
          <h1 className="text-5xl lg:text-6xl text-white font-extrabold ">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="w-96 text-white tracking-wide text-center lg:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button className="w-fit tracking-wide" size={"lg"}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </>
  )
}

export default Hero
