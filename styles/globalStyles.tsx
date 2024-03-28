import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
      "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
      "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow: hidden;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
