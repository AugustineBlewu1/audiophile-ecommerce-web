import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className="relative h-screen">
        <img
          src="/assets/home/desktop/image-hero.jpg"
          alt="Desktop HeadPhone"
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex justify-center flex-col mx-auto container space-y-8">
          <h3 className="text-lg text-white/35 tracking-widest">NEW PRODUCT</h3>
          <h1 className="text-6xl text-white font-extrabold ">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="w-96 text-white tracking-wide">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button className="w-fit tracking-wide" size={"lg"}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
  )
}

export default Hero
