import React from "react";

export const SquareCard = ({
  descColor,
  titleColor,
  width,
  title,
  desc,
}: {
  titleColor?: string;
  descColor?: string;
  width:
    | "1/4"
    | "1/3"
    | "1/2"
    | "3/4"
    | "full"
    | "screen"
    | "2/3"
    | 12
    | 6
    | 10
    | 24;
  title: string;
  desc?: string;
}) => {
  return (
    <div className={`glass-effect w-${width} text-black rounded-md border-2`}>
      <h2 className={`text-xl text-center mb-10 text-${titleColor}`}>
        {title}
      </h2>
      <p className={`text-center text-${descColor}`}>{desc}</p>
    </div>
  );
};
