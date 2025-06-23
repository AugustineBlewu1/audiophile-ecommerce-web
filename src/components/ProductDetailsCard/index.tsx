import React from "react";
import clsx from "clsx";
import CardContentDetails, { CardContentDetailsProps } from "../CardContentDetails";

export type ProductCardDetailsProps = {
    productContent : CardContentDetailsProps
    image: string
};

/**
 * Product cards for displaying product
 * @param ProductCardProps 
 * @returns product info
 */
const ProductCard : React.FC<ProductCardDetailsProps> = (
    { productContent, image}
) => {
  return (
      <div className={clsx("w-full flex items-center gap-10", productContent.layout === 'right' ? 'lg:flex-row flex-col' : 'md:flex-row-reverse flex-col-reverse')}>
        <div className="lg:w-1/2 w-full flex justify-center">
          <CardContentDetails  {...productContent} />
        </div>
        <div className="w-full lg:w-1/2 rounded-md">
          <img
            src={image}
            alt="Product Image"
            className="object-cover w-full rounded-md"
          />
        </div>
      </div>
    
  );
};

export default ProductCard;
