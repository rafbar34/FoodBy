import React from "react";

export const SquareCard = ({
  color='black',
  width='2/3',
  title,
  desc,
}: {
  color: string;
  width: "1/4" | "1/3" | "1/2" | "3/4" | "full" | "screen"|"2/3";
  title: string;
  desc: string;
}) => {
  return (
    <div className={`glass-effect w-${width} text-black rounded-md border-2`}>
      <h2 className={`text-xl text-center mb-10 text-${color}`}>{title}</h2>
      <p className={`text-center text-${color}`}>{desc}</p>
    </div>
  );
};
