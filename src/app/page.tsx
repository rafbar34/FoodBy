"use client";
import { useEffect, useState } from "react";
import { specializations, welcomeCardDesc } from "../../data/WelcomePage/data";
import { WelcomeCard } from "@/components/WelcomePage/WelcomeCard";
import { TopBarMenu } from "@/components/UI/TopBarMenu";
import { ThreeInfoBar } from "@/components/UI/ThreeInfoBar";
import Image from "next/image";
import oats from "../../assets/3ae1d5280694965b7a952c7db98f8e80.jpg";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState<Array<string>>([]);
  const [count, setCount] = useState(440);
  const [count2, setCount2] = useState(1000);
  const [count3, setCount3] = useState(0);
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

  const updateCount = ({ number, setState, goal }) => {
    if (number < goal) {
      setTimeout(() => {
        setState((prevCount) => prevCount + 1);
      }, 0); // Przerwa w milisekundach między liczbami
    }
  };
  useEffect(() => {
    updateCount({ number: count, setState: setCount, goal: 850 });
    updateCount({ number: count2, setState: setCount2, goal: 2100 });
    updateCount({ number: count3, setState: setCount3, goal: 3 });
  }, [count, count2, count3]);

  return (
    <div className="">
      <TopBarMenu>
        <section className="">
          <div className=" flex justify-between px-20 flex-col items-center ">
            <div className="mt-10 sm:mt-24">
              <h2 className=" text-3xl text-center font-sans">
                Witajcie w świecie smaku i wygody! Witamy serdecznie na stronie
                FoodBy!
              </h2>
            </div>
            <div className="lg:flex gap-3 my-14 ">
              {welcomeCardDesc.map((card) => (
                <WelcomeCard
                  key={card.id}
                  desc={card.desc}
                  isLoaded={isLoaded}
                  id={card.id}
                />
              ))}
            </div>
            <ThreeInfoBar
              number1={count}
              title1="Zadowolonych klientow"
              number2={count2}
              title2="Stworzonych jadłospisow"
              number3={count3}
              title3="Wyróżnien"
            />
          </div>
        </section>
        <section className="px-20 w-full">
          {specializations.map((specialization, index) => {
            return (
              <div
                key={specialization.title}
                className={"flex justify-center"}>
                <div className={"w-3/4  rounded-l-full glass-effect flex mt-5"}>
                  <Image
                    width={240}
                    height={240}
                    src={specialization?.image}
                    alt="oats"
                    className="border-2 border-grey h-56 w-60 rounded-full"
                  />

                  <div className="flex flex-col justify-evenly w-3/4 px-10">
                    <div className="text-center w-full text-black">
                      {specialization.title}
                    </div>
                    <div className="text-black">{specialization.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </TopBarMenu>
    </div>
  );
}
