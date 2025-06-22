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
      <div className={clsx("w-full flex items-center gap-10", productContent.layout === 'right' ? 'flex-row' : 'flex-row-reverse')}>
        <div className="w-1/2">
          <CardContentDetails  {...productContent} />
        </div>
        <div className="w-1/2 rounded-md">
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
