import React, { lazy } from "react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import CounterButton, { CounterButtonProps } from "../CounterButton";


const textvariants = cva("", {
  variants: {
    size: {
      sm: "lg:text-3xl font-bold font-bold md:text-2xl lg:text-start text-center text-xl",
      lg: "lg:text-6xl font-extrabold font-extrabold  md:text-4xl lg:text-start text-center text-2xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});


export type CardContentDetailsProps = {
  type?: string;
  title: React.ReactNode;
  description?: string;
  buttonText: string;
  titleTextSize?: "sm" | "lg";
  textColor?: string;
  buttonAction: () => void;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" ;
  layout?: "left" | "right"
  counter : CounterButtonProps
  price : number
};
/**
 * Displays Product Cards info
 * @param data 
 * @returns card info
 */
const CardContent: React.FC<CardContentDetailsProps> = (data) => {
  return (
    <div className={clsx("flex flex-col space-y-3 w-fit items-start lg:items-start", data?.layout === 'left' ? 'lg:ml-24 ml-0' :'')}>
      {data.type && (
        <h3 className="text-lg text-primary tracking-widest ">{data.type}</h3>
      )}
      <h1 className={cn(textvariants({ size: data.titleTextSize }), data.textColor ? data.textColor : 'text-white')}>{data.title}</h1>
      {data.description && <p className={clsx("lg:w-96 w-80 tracking-wide", data.textColor ? data.textColor + '/50' : 'text-white')}>{data?.description}</p>}

      <h3 className="font-bold lg:py-12 py-6 text-start">$ {data?.price?.toLocaleString()}</h3>
      <div className="flex flex-row items-center gap-8">
      <CounterButton {...data?.counter} />
      <Button
        className="w-fit tracking-wide"
        size={"lg"}
        variant={data?.variant}
        onClick={data.buttonAction}
      >
        {data?.buttonText}
      </Button>
      </div>
    </div>
  );
};

export default CardContent;
