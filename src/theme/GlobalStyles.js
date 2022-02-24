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
  height: 100%;
  color-scheme: light dark;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  --box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
  0 2px 2px rgba(0,0,0,0.11), 
  0 4px 4px rgba(0,0,0,0.11), 
  0 8px 8px rgba(0,0,0,0.11);
  
  --box-shadow-soft: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, 
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  --border-radius: 5px;
  --letter-spacing: 0.02ch;
  --font-weight-multiplyer: .85;
  --font-weight: 500;
  --transition: all 450ms ease-in-out;
}

html,
body {
  background: ${({ theme }) => theme.background};
  margin: 0;
  transition: var(--transition);
}

`;
