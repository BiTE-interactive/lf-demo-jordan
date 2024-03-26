"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@lib/registry";
import ThemeProvider, { useTheme } from "@providers/ThemeProvider";

const Providers = (props: React.PropsWithChildren) => {
  const theme = useTheme();
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={theme}>
        <ThemeProvider>{props.children}</ThemeProvider>
      </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
