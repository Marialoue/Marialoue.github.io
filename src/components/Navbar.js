import React, { useState } from "react";

import {
  NavbarContainer,
  InnerContainer,
  LeftNav,
  RightNav,
  LinkItem,
} from "../theme/NavStyle";

import Button from "./Button";

import SunIcon from "../assets/icons/Sun";
import MoonIcon from "../assets/icons/Moon";

import { setLocalStorage } from "../utils/storage";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
    setLocalStorage("isDark", !isDarkMode);
  };

  return (
    <NavbarContainer>
      <InnerContainer>
        <LeftNav>
          <LinkItem to="/"> Maria Karlsson</LinkItem>
          <LinkItem to="/projects"> Projects</LinkItem>
          <LinkItem to="/contact"> Contact</LinkItem>
        </LeftNav>
        <RightNav>
          <Button onClick={switchTheme}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </RightNav>
      </InnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
