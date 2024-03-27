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
  backgroundStart: string;
  backgroundEnd: string;
  button: {
    primary: ButtonProps;
    secondary: ButtonProps;
    switch: ButtonProps;
  };
  text: string;
}

type SharedTheme = {
  colors: {
    primary: string;
    secondary: string;
    white: string;
  };
} & DefaultTheme;

export const shared: SharedTheme = {
  colors: {
    white: "#fff",
    primary: colors.primary,
    secondary: colors.secondary,
  },
  spacing: (index: number) => {
    return `${index * 8}px`;
  },
};

export const light: Theme = {
  backgroundStart: colors.light.backgroundStart,
  backgroundEnd: colors.light.backgroundEnd,
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
  text: colors.light.text,
};

export const dark: Theme = {
  backgroundStart: colors.dark.backgroundStart,
  backgroundEnd: colors.dark.backgroundEnd,
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
  text: colors.dark.text,
};

export type CombinedTheme = Theme & SharedTheme;
