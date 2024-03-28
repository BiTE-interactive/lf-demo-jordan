import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { light, shared } from "@styles/theme";
import _ from "lodash";

const MockThemeWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={_.merge({}, light, shared)}>{children}</ThemeProvider>
  );
};

export default MockThemeWrapper;
