"use client";
import { useEffect, useState } from "react";
import { welcomeCardDesc } from "../../data/WelcomePage/data";
import { WelcomeCard } from "@/components/WelcomePage/WelcomeCard";
import { TopBarMenu } from "@/components/UI/TopBarMenu";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<Array<string>>([]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded((prev: Array<string>) => [...prev, "firstParagraph"]);
    }, 0);
    setTimeout(() => {
      setIsLoaded((prev: Array<string>) => [...prev, "secondParagraph"]);
    }, 100);
    setTimeout(() => {
      setIsLoaded((prev: Array<string>) => [...prev, "thirdParagraph"]);
    }, 200);
    setTimeout(() => {
      setIsLoaded((prev: Array<string>) => [...prev, "fourthParagraph"]);
    }, 300);
  }, []);

  return (
    <div className="">
      <TopBarMenu>
        <div className=" flex justify-center px-20 flex-col items-center ">
          <div className="mt-10">
            <h2 className=" text-3xl text-center font-sans">
              Witajcie w świecie smaku i wygody! Witamy serdecznie na stronie
              FoodBy!
            </h2>
          </div>
          <div className="lg:flex gap-3 mt-14 ">
            {welcomeCardDesc.map((card) => (
              <WelcomeCard
                key={card.id}
                desc={card.desc}
                isLoaded={isLoaded}
                id={card.id}
              />
            ))}
          </div>
        </div>
      </TopBarMenu>
    </div>
  );
}
