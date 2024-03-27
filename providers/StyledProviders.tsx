"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@lib/registry";
import { useTheme } from "@providers/ThemeProvider";

export const StyledProviders = (props: React.PropsWithChildren) => {
  const theme = useTheme();
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={theme.theme}>
        {props.children}
      </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default StyledProviders;
