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
  color-scheme: light dark;
  --shadow-color: 0deg 0% 50%;
}

html, 
body {
  background: ${({ theme }) => theme.background};
  margin: 0;
  }

a,
a:active,
a:visited {
  color: ${({ theme }) => theme.color};
  text-decoration: none;
}

a:hover {
  color: ${({ theme }) => theme.background};
}

`;
