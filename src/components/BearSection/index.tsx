import React from "react";

const BearSection = () => {
  return (
    <div className="container mx-auto px-24">

   
    <div className="mt-40 w-full flex flex-row items-center gap-10">
      <div className="space-y-8 w-1/2">
        <h1 className="text-4xl font-extrabold uppercase">
          Bringing you the <br /> <span className="text-primary">best </span>{" "}
          audio gear
        </h1>
        <p className="w-96 tracking-wide text-left text-sm text-secondary/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="w-1/2 rounded-md">
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Best Gear"
          className="object-cover w-full rounded-md"
        />
      </div>
    </div>
     </div>
  );
};

export default BearSection;
