import React, { useState } from "react";

import {
  NavbarContainer,
  InnerContainer,
  LeftNav,
  RightNav,
  LinkItem,
  MobileNavbar,
  MobileNavbarLink,
  MenuButton,
} from "../theme/NavStyle";

import Button from "./Button";

import SunIcon from "../assets/icons/Sun";
import MoonIcon from "../assets/icons/Moon";
import MenuIcon from "../assets/icons/Menu";
import CloseIcon from "../assets/icons/Close";
import GithubIcon from "../assets/icons/Github";
import LinkedInIcon from "../assets/icons/LinkedIn";
import MailIcon from "../assets/icons/Mail";

import { setLocalStorage } from "../utils/storage";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  
  const [isExtended, setIsExtended] = useState(false);
  
  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
    setLocalStorage("isDark", !isDarkMode);
  };
  const OpenMenu = () => {
    setIsExtended(!isExtended);
  };

  return (
    <NavbarContainer role="navigation" isExtended={isExtended}>
      <InnerContainer>
        <LeftNav>
          <LinkItem to="/"> Maria Karlsson</LinkItem>
          <LinkItem to="/projects"> Projects</LinkItem>
          <MenuButton onClick={OpenMenu}>
            {isExtended ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </LeftNav>
        <RightNav>
          <Button
            as="a"
            aria-label="Send an email"
            href="mailto:maria.lo.karlsson@gmail.com"
          >
            <MailIcon />
          </Button>
          <Button
            as="a"
            aria-label="Find me on LinkedIn"
            href="https://www.linkedin.com/in/maria-karlsson-3854b16a/"
          >
            <LinkedInIcon />
          </Button>
          <Button
            as="a"
            aria-label="Find me on Github"
            href="https://github.com/Marialoue"
          >
            <GithubIcon />
          </Button>
          <Button onClick={switchTheme}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </RightNav>
      </InnerContainer>
      {isExtended && (
        <MobileNavbar>
          <MobileNavbarLink to="/"> Maria Karlsson</MobileNavbarLink>
          <MobileNavbarLink to="/projects"> Projects</MobileNavbarLink>
          <Button
            as="a"
            aria-label="Send an email"
            href="mailto:maria.lo.karlsson@gmail.com"
          >
            <MailIcon />
          </Button>
          <Button
            as="a"
            aria-label="Find me on LinkedIn"
            href="https://www.linkedin.com/in/maria-karlsson-3854b16a/"
          >
            <LinkedInIcon />
          </Button>
          <Button
            as="a"
            aria-label="Find me on Github"
            href="https://github.com/Marialoue"
          >
            <GithubIcon />
          </Button>
          <Button onClick={switchTheme}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </MobileNavbar>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
