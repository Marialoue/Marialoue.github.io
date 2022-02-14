import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";

import About from "./routes/About";
import Projects from "./routes/Projects";
import NotFound from "./routes/NotFound";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const storedTheme = localStorage.getItem("isDark");
  const [isDarkMode, setIsDarkMode] = useState(
    storedTheme === "true" ? true : false
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Main>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
        <Footer>© Maria Karlsson 2022</Footer>
      </Main>
    </ThemeProvider>
  );
}

export default App;
