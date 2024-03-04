"use client";
import { TopBarMenu } from "@/components/TopBar/TopBarMenu";
import React from "react";

const About = () => {
  return (
    <TopBarMenu isActive="about">
      <div className="w-screen h-full flex items-center justify-center py-20">
        <div className="glass-effect text-gray-800 mx-10 sm:text-xl text-justify rounded-md  ">
          <div className="text-2xl text-center w-full my-10">
            Witaj w <strong>FoodBy</strong> - miejscu, gdzie dbamy o Twoje
            zdrowie i dobre samopoczucie każdego dnia.
          </div>
          <p></p>
          <div className="my-10">
            <p>
              Nasza firma została założona z pasją do zdrowego odżywiania i
              troską o klientów, których chcemy wspierać w osiągnięciu ich celów
              zdrowotnych i żywieniowych. Jesteśmy przekonani, że świadome
              wybory żywieniowe są kluczem do pełni życia.
            </p>
          </div>

          <h2 className="text-2xl">
            <strong>Nasza Misja:</strong>
          </h2>

          <ul>
            <li className="mt-10">
              <strong>Zdrowie na pierwszym miejscu:</strong> Naszym priorytetem
              jest zapewnienie naszym klientom zdrowych, smacznych i
              zbilansowanych posiłków, które dostarczają niezbędnych składników
              odżywczych.
            </li>
            <li className="mt-10">
              <strong>Wsparcie i Edukacja:</strong> Nie tylko dostarczamy zdrowe
              posiłki, ale również oferujemy wsparcie i edukację w zakresie
              zdrowego odżywiania. Chcemy, aby nasi klienci czuli się pewnie
              podejmując świadome decyzje żywieniowe.
            </li>
            <li className="mt-10">
              <strong>Innowacje:</strong> Stale monitorujemy najnowsze trendy i
              badania w dziedzinie żywienia, aby zapewnić naszym klientom
              najwyższą jakość i nowoczesne rozwiązania dietetyczne.
            </li>
            <li className="mt-10">
              <strong>Zrównoważony rozwój:</strong> Dbamy nie tylko o zdrowie
              naszych klientów, ale również o zdrowie naszej planety. Dlatego
              angażujemy się w praktyki zrównoważonego rozwoju i wybieramy
              składniki pochodzące z lokalnych, ekologicznych źródeł.
            </li>
          </ul>

          <h2 className="text-2xl mt-10">
            {" "}
            <strong>Nasze Wartości:</strong>
          </h2>

          <ul>
            <li className="mt-10">
              <strong>Pasja:</strong> Wspólna pasja do zdrowego odżywiania
              motywuje nas do ciągłego doskonalenia i podnoszenia standardów.
            </li>
            <li className="mt-10">
              <strong>Zaufanie:</strong> Budujemy zaufanie poprzez
              transparentność, uczciwość i stałą gotowość do słuchania potrzeb
              naszych klientów.
            </li>
            <li className="mt-10">
              <strong>Wspólnota:</strong> Jesteśmy częścią większej
              społeczności, dlatego angażujemy się w działania społeczne i
              promujemy zdrowy styl życia wśród innych.
            </li>
          </ul>

          <p>
            Jesteśmy dumni z tego, co robimy i z pasją dążymy do pomocy naszym
            klientom w osiągnięciu ich celów zdrowotnych i żywieniowych.
          </p>

          <p>
            Dołącz do naszej społeczności i doświadcz smaku zdrowia z{" "}
            <strong>Nazwa Firmy</strong>.
          </p>
        </div>
      </div>
    </TopBarMenu>
  );
};

export default About;
