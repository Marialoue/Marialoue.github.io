import React, { useState } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";

import Hero from "./routes/Hero";
import About from "./routes/About";
import Projects from "./routes/Projects";
import NotFound from "./routes/NotFound";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Button from "./components/Button";

import { SunIcon } from "./assets/SunIcon";
import { MoonIcon } from "./assets/MoonIcon";

function App() {
  const storedTheme = localStorage.getItem("isDark");
  const [isDarkMode, setIsDarkMode] = useState(
    storedTheme === "true" ? true : false
  );

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDark", !isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Main>
        <Navbar>
          <NavLink to="/">Maria Karlsson </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/projects">Projects </NavLink>
          <Button onClick={switchTheme}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Navbar>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Container>
          <Outlet />
        </Container>
        <Footer></Footer>
      </Main>
    </ThemeProvider>
  );
}

export default App;
