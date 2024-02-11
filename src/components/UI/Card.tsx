import React from "react";

export const Card = ({ desc }: { desc: string }) => {
  return <div className="border-4 w-full p-5 rounded-lg mt-2 min-h-56">{desc}</div>;
};
