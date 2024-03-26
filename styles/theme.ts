export interface Theme {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
  };
}

export interface BaseTheme {
  colors: {
    white: string;
  };
}

export const base = {
  colors: {
    white: "#fff",
  },
};

export const light = {
  colors: {
    primary: "#0073e6",
    primaryHover: "#0061c2",
    secondary: "#f2f2f2",
    secondaryHover: "#e6e6e6",
  },
};

export const dark = {
  colors: {
    primary: "#3399FF",
    primaryHover: "#3399FF",
    secondary: "rgba(31, 38, 46, 0.4)",
    secondaryHover: "#1F262E",
  },
};
