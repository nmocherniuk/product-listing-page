"use client";

import React, { FC, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Navigation from "./Navigation";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleNavMenu = () => {
    setIsMenuOpen((prevState: boolean) => !prevState);
  };

  return (
    <header className="bg-purple h-[90px] w-full">
      <div className="relative mx-auto flex h-full max-w-[1300px] items-center justify-between px-5 sm:px-10 md:px-14 lg:px-20">
        <Image src="/logo.svg" alt="Logo" width={172} height={43} priority />
        <div className="sm:hidden">
          <Hamburger
            color="white"
            toggled={isMenuOpen}
            toggle={toggleNavMenu}
          />
        </div>
        <Navigation isOpen={isMenuOpen} toogleMenu={toggleNavMenu} />
      </div>
    </header>
  );
};

export default Header;
