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
      <div className="flex flex-row justify-between">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold ">FEATURES</h2>
          <p className="text-secondary/50 tracking-wide w-[740px]">
            {paragraphs[0]}
          </p>
          <p className="text-secondary/50 tracking-wide w-[740px]">
            {paragraphs[1]}
          </p>
        </div>
        <div className="space-y-5 pr-60">
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

      <div className="h-[680px] w-full flex flex-row gap-6 justify-between my-24">
        <div className="flex flex-col w-[40%] justify-between">
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

        <div className="w-[60%]">
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
