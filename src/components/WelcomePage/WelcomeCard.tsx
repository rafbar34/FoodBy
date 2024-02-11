import React from "react";
import { Card } from "../UI/Card";

export const WelcomeCard = ({
  isLoaded,
  desc,
  id,
}: {
  isLoaded: Array<string>;
  desc: string;
  id: string;
}) => {
  return (
    <div
      className={
        !isLoaded.includes(id)
          ? "opacity-0 duration-300"
          : " opacity-100 duration-300 hover:scale-105"
      }>
      <Card desc={desc} />
    </div>
  );
};
