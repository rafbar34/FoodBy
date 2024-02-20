"use client";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import React from "react";
import { offers } from "../../../data/WelcomePage/data";
import { SquareCard } from "@/components/UI/SquareCard";

const Offers = () => {
  return (
    <TopBarMenu>
      <div className="w-screen grid grid-cols-3 gap-20 px-20 justify-items-center ">
        {offers.map((offer, index) => (
          <SquareCard
            key={index}
            titleColor="yellow-200"
            descColor="green-900"
            desc={offer.desc}
            title={offer.title}
            width="2/3"
          />
        ))}
      </div>
    </TopBarMenu>
  );
};
export default Offers;
