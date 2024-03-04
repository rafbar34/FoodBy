"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  specializations,
  welcomeCardDesc,
} from "../../../data/WelcomePage/data";
import { WelcomeCard } from "@/components/WelcomePage/WelcomeCard";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import { ThreeInfoBar } from "@/components/UI/ThreeInfoBar";
import { Widget } from "@/components/UI/Widget";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
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

  const updateCount = ({
    number,
    setState,
    goal,
  }: {
    number: number;
    setState: Dispatch<SetStateAction<number>>;
    goal: number;
  }) => {
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
      <TopBarMenu isActive="home">
        <section className="">
          <div className=" flex justify-between px-20 flex-col items-center ">
            <div className="">
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
        <section className="px-10 sm:px-20 w-full ">
          {specializations.map((specialization, index) => {
            return (
              <Widget
                key={index}
                data={specialization}
              />
            );
          })}
          <Link href={"/offer"}>
            <Button title="Oferta" />
          </Link>
        </section>
      </TopBarMenu>
    </div>
  );
}
