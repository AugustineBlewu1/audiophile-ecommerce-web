import React from "react";

type FeatureProps = {
  paragraphs: string[];
  boxFeatures: {
    quantity: number;
    item: string;
  }[];
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
};

const Features: React.FC<FeatureProps> = ({
  paragraphs,
  boxFeatures,
  imageFirst,
  imageSecond,
  imageThird,
}) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold ">FEATURES</h2>
          <p className="text-secondary/50 tracking-wide lg:w-[740px] w-full">
            {paragraphs[0]}
          </p>
          <p className="text-secondary/50 tracking-wide lg:w-[740px] w-full">
            {paragraphs[1]}
          </p>
        </div>
        <div className="space-y-5  pt-10 lg:pt-0 md:flex md:flex-row lg:flex-col md:justify-between lg:justify-start">
          <h2 className="text-2xl font-bold ">IN THE BOX</h2>
          <ol className="">
            {boxFeatures?.map((includedItem, index) => (
              <li key={index} className="space-x-4">
                <span className="text-primary">{includedItem?.quantity} x</span>
                <span className="text-secondary/50  font-medium">
                  {includedItem?.item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="lg:h-[680px]  w-full flex md:flex-row flex-col gap-6 lg:justify-between lg:my-24 my-10 md:my-16">
        <div className="flex flex-col lg:w-[35%] md:w-[50%]  justify-between gap-10">
          <img
            src={imageFirst}
            alt="Image Gallery"
            className="object-cover w-full rounded-md"
          />
          <img
            src={imageSecond}
            alt="Image Gallery"
            className="object-cover w-full rounded-md"
          />
        </div>

        <div className="lg:w-[60%] md:w-[50%]">
          <img
            src={imageThird}
            alt="Image Gallery"
            className="object-cover rounded-md w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Features;
