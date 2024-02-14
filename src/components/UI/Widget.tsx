import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Widget = ({
  data,
}: {
  data: {
    title: string;
    image: StaticImageData;
    desc: string;
  };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      key={data.title}
      className={"flex justify-center"}>
      <div
        className={
          "w-full sm:w-3/4 items-center  rounded-t-full sm:rounded-r-none sm:rounded-l-full glass-effect  mt-5 flex sm:flex-row flex-col"
        }>
        <Image
          width={240}
          height={240}
          src={data?.image}
          alt="oats"
          className="border-2 border-grey h-56 w-60 rounded-full"
        />

        <div className="flex flex-col justify-evenly w-full sm:w-3/4 px-10">
          <h2 className="text-center w-full text-black">{data.title}</h2>
          <div className="text-black text-center">{data.desc}</div>
        </div>
      </div>
    </motion.div>
  );
};
