import Link from "next/link";
import React, { ReactNode, useState } from "react";

export const TopBarMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col min-h-screen  ">
      <nav className=" md:flex justify-end hidden">
        <ul className=" flex justify-around pr-10">
          <li className="border-1 rounded-sm px-10 py-1 bg-[#50d71e] w-48">
            <Link href="/">Strona główna</Link>
          </li>
          <li className="border-1 rounded-sm px-10 py-1 w-32">
            <Link href="/about">O nas</Link>
          </li>
          <li className="border-1 rounded-sm px-10 py-1 w-16">
            <Link href="/offer">Oferta</Link>
          </li>
          <li className="border-1 rounded-sm px-10 py-1 w-16">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="border-1 rounded-sm px-10 py-1 w-16">
            <Link href="/profile">Terminy</Link>
          </li>
          <li className="border-1 rounded-sm px-10 py-1 w-16">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <nav className="md:hidden block">
        <button
          className=""
          onClick={toggleButton}>
          menu
        </button>
        {isOpen && (
          <ul className=" flex  flex-col w-1/2">
            <li className="border-1  px-10 py-1 bg-[#50d71e]">
              <Link href="/">Strona główna</Link>
            </li>
            <li className="border-1  px-10 py-1">
              <Link href="/about">O nas</Link>
            </li>
            <li className="border-1  px-10 py-1">
              <Link href="/contact">Kontakt</Link>
            </li>
            <li className="border-1 px-10 py-1">
              <Link href="/profile">Profil</Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="mb-10 sm:mb-24" />
      {children}
    </div>
  );
};
