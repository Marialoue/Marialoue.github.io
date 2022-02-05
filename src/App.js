import React, { useState } from "react";
import {  Routes, Route, Link, Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Button from "./components/Button";

import { lightTheme, darkTheme } from "./theme/themes";

import Hero from "./routes/Hero";
import About from "./routes/About";
import Projects from "./routes/Projects";
import NotFound from "./routes/NotFound";

function App() {
  const storedTheme = localStorage.getItem("isDark");
  const [isDarkMode, setIsDarkMode] = useState(
    storedTheme === "true" ? true : false
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Main>
        <Navbar>
          <Link to="/">Maria Karlsson </Link>
          <Link to="/about">About </Link>
          <Link to="/projects">Projects </Link>
          <Button
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDark", !isDarkMode);
            }}
          >
            switch mode
          </Button>
        </Navbar>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Container>
          <Outlet/>
        </Container>
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

export default App;
