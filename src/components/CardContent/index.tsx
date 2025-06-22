import React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


const textvariants = cva("", {
  variants: {
    size: {
      sm: "text-3xl font-bold",
      lg: "text-6xl font-extrabold",
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
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" 
};
/**
 * Displays Product Cards info
 * @param data 
 * @returns card info
 */
const CardContent: React.FC<CardContentProps> = (data) => {
  return (
    <div className=" flex flex-col  space-y-8 w-fit ">
      {data.type && (
        <h3 className="text-lg text-primary tracking-widest ">{data.type}</h3>
      )}
      <h1 className={cn(textvariants({ size: data.titleTextSize }), data.textColor ? data.textColor : 'text-white')}>{data.title}</h1>
      {data.description && <p className={clsx("w-96 tracking-wide", data.textColor ? data.textColor + '/50' : 'text-white')}>{data?.description}</p>}

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
