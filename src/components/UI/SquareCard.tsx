import Link from "next/link";
import React from "react";

export const SquareCard = ({
  descColor,
  titleColor,
  width,
  title,
  desc,
  price,
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
  price?: number;
}) => {
  return (
    <div
      className={`glass-effect w-${width} text-black rounded-md border-2 flex flex-col gap-10 justify-center items-center`}>
      <h2 className={`text-xl  text-${titleColor}`}>{title}</h2>
      <p className={` text-${descColor}`}>{desc}</p>
      {price && (
        <Link
          href={"/schedule"}
          className={` text-white border-2 bg-green-700 px-5 py-2 rounded-sm`}>
          Cena: {price} zł
        </Link>
      )}
    </div>
  );
};
