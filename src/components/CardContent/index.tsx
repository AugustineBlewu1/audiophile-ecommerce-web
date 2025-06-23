import React, { lazy } from "react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


const textvariants = cva("", {
  variants: {
    size: {
      sm: "lg:text-3xl font-bold md:text-2xl lg:text-start text-center text-xl",
      lg: "lg:text-6xl font-extrabold  md:text-4xl lg:text-start text-center text-3xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});


export type CardContentProps = {
  type?: string;
  title: React.ReactNode;
  description?: string;
  buttonText: string;
  titleTextSize?: "sm" | "lg";
  textColor?: string;
  buttonAction: () => void;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" ;
  layout?: "left" | "right"
};
/**
 * Displays Product Cards info
 * @param data 
 * @returns card info
 */
const CardContent: React.FC<CardContentProps> = (data) => {
  return (
    <div className={clsx(" flex flex-col space-y-3 md:space-y-5 lg:space-y-8 w-fit items-center lg:items-start ", data?.layout === 'left' ? 'lg:ml-24 md:ml-0' :'')}>
      {data.type && (
        <h3 className="text-lg text-primary tracking-widest ">{data.type}</h3>
      )}
      <h1 className={cn(textvariants({ size: data.titleTextSize }), data.textColor ? data.textColor : 'text-white')}>{data.title}</h1>
      {data.description && <p className={clsx("w-80 lg:w-96 tracking-wide text-center lg:items-start", data.textColor ? data.textColor + '/50' : 'text-white')}>{data?.description}</p>}

      <Button
        className="w-fit tracking-wide"
        size={"lg"}
        variant={data?.variant}
        onClick={data.buttonAction}
      >
        {data?.buttonText}
      </Button>
    </div>
  );
};

export default CardContent;
