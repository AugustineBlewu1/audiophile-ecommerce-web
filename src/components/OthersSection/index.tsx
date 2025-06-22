

import React from "react";
import { Button } from "../ui/button";
type OthersSectionProps = {
  others: {
    slug: string;
    name: string;
    image: string;
    buttonAction: ()=> void
  }[];
};

const OthersSection: React.FC<OthersSectionProps> = ({ others }) => {
    console.log('otjerer', others)
  return (
    <div>
      <h3 className="text-center font-extrabold flex justify-center text-3xl">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex flex-row gap-x-8 py-10">
        {others?.map((other, index) => {
          //gets the last item after a split by - fro route head
    

          return (
            <div className="items-center flex flex-col space-y-10" key={index}>
              <img src={other?.image} alt="Other Image" />
              <h4 className="text-center font-bold text-3xl uppercase">
                {other?.name}
              </h4>
              <Button
                size={"lg"}
                onClick={other?.buttonAction}
              >
                SEE PRODUCT
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OthersSection;
