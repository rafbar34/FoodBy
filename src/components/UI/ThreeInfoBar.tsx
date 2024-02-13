import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  number1: number;
  title1: string;
  number2: number;
  title2: string;
  number3: number;
  title3: string;
};

export const ThreeInfoBar = ({
  number1,
  title1,
  number2,
  title2,
  number3,
  title3,
}: Props) => {
  return (
    <div className="w-full rounded-md py-10 mb-16 bg-black bg-opacity-45 flex justify-around">
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl bold">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {number1}+
          </motion.h1>
        </span>
        <span>{title1}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl bold">
          {" "}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {number2}+
          </motion.h1>
        </span>
        <span>Stworzonych jadłospisow{title2}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl bold">
          {" "}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {number3}
          </motion.h1>
        </span>
        <span>{title3}</span>
      </div>
    </div>
  );
};
