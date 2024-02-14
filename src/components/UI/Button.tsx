import React from "react";

export const Button = ({ title }: { title: string }) => {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="  glass-effect rounded-sm text-gray-600 border-2 py-10 w-1/2 text-center text-2xl">
        {title}
      </div>
    </div>
  );
};
