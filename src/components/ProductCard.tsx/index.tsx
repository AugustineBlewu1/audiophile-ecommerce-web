import React from "react";
import CardContent, { CardContentProps } from "../CardContent";
import clsx from "clsx";

export type ProductCardProps = {
    productContent : CardContentProps
    image: string
};

/**
 * Product cards for displaying product
 * @param ProductCardProps 
 * @returns product info
 */
const ProductCard : React.FC<ProductCardProps> = (
    { productContent, image}
) => {
  return (
      <div className={clsx("w-full flex items-center gap-10", productContent.layout === 'right' ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col-reverse')}>
        <div className="lg:w-1/2 w-full flex justify-center">
          <CardContent  {...productContent} />
        </div>
        <div className=" w-full lg:w-1/2 rounded-md">
          <img
            src={image}
            alt="Product Image"
            className=" object-cover w-full rounded-md"
          />
        </div>
      </div>
    
  );
};

export default ProductCard;
