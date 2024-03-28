import { DefaultTheme } from "styled-components";
import { colors } from ".";

interface ButtonProps {
  color?: string;
  background: string;
  backgroundHover: string;
  border?: string;
  borderHover?: string;
  boxShadow?: string;
  boxShadowHover?: string;
}

export interface Theme {
  button: {
    primary: ButtonProps;
    secondary: ButtonProps;
    switch: ButtonProps;
  };
  colors: {
    backgroundEnd: string;
    backgroundStart: string;
    tableHover: string;
    primary: string;
    primaryHover: string;
    secondary: string;
    text: string;
    textAlt: string;
  };
}

type SharedTheme = {
  colors: {
    white: string;
  };
} & DefaultTheme;

export const shared: SharedTheme = {
  colors: {
    white: "#fff",
  },
  mediaQueries: {
    sm: "@media (min-width: 576px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 992px)",
    xl: "@media (min-width: 1200px)",
  },
  spacing: (index: number) => {
    return `${index * 8}px`;
  },
};

export const light: Theme = {
  button: {
    primary: {
      background: colors.light.primary,
      backgroundHover: colors.light.primaryHover,
      color: colors.white,
    },
    secondary: {
      background: colors.light.secondary,
      backgroundHover: colors.light.secondaryHover,
      color: "#333",
    },
    switch: {
      background: colors.light.secondary,
      backgroundHover: colors.light.secondaryHover,
      border: `1px solid ${colors.light.switchBorder}`,
      borderHover: `1px solid ${colors.light.switchBorderHover}`,
    },
  },
  colors: {
    backgroundEnd: colors.light.backgroundEnd,
    backgroundStart: colors.light.backgroundStart,
    primary: colors.light.primary,
    primaryHover: colors.light.primaryHover,
    tableHover: colors.light.tableHover,
    secondary: colors.light.secondary,
    text: colors.light.text,
    textAlt: colors.light.textAlt,
  },
};

export const dark: Theme = {
  button: {
    primary: {
      background: colors.dark.primary,
      backgroundHover: colors.dark.primaryHover,
      color: colors.white,
    },
    secondary: {
      background: colors.dark.secondary,
      backgroundHover: colors.dark.secondaryHover,
      color: colors.white,
    },
    switch: {
      background: colors.black,
      border: `1px solid ${colors.dark.secondaryHover}`,
      backgroundHover: `1px solide ${colors.dark.switchBackgroundHover}`,
      borderHover: `1px solid ${colors.dark.switchBorderHover}`,
      boxShadow: `inset 0 1px 1px ${colors.dark.switchBoxShadow}, 0 1px 0.5px ${colors.dark.switchBoxShadow2};`,
      color: colors.white,
    },
  },
  colors: {
    backgroundEnd: colors.dark.backgroundEnd,
    backgroundStart: colors.dark.backgroundStart,
    primary: colors.dark.primary,
    primaryHover: colors.dark.primaryHover,
    secondary: colors.dark.secondary,
    tableHover: colors.dark.tableHover,
    text: colors.dark.text,
    textAlt: colors.dark.textAlt,
  },
};

export type CombinedTheme = Theme & SharedTheme;
