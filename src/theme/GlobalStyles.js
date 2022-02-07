import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before, 
*::after, {
  box-sizing: border-box;
}

:root {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  color-scheme: light dark;
  --shadow-color: 0deg 0% 50%;
  --border-radius: 5px;
}

html,
body {
  background: ${({ theme }) => theme.background};
  margin: 0;
  transition: all 300ms ease-in-out;
}

svg {
  stroke: ${({ theme }) => theme.bgBtn};
}

svg:hover {
  stroke: ${({ theme }) => theme.color};
}

img {
  border: 2px solid ${({ theme }) => theme.bgBtn};
  padding: .2rem;
  height: 27vmax;
  border-radius: 50%;
  grid-column: 1;
  transform: scaleX(-1);
}

`;
