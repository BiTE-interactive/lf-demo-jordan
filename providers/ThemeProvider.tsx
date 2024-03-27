// This provider serves as a means to provide the users selected theme
// If no theme is selected the theme defaults to the user's system settings

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { shared, light, dark, Theme, CombinedTheme } from "../styles/theme";

interface ThemeContextType {
  theme: CombinedTheme;
  toggleTheme: () => void;
  themeType: "light" | "dark";
}

const defaultThemeContext: ThemeContextType = {
  theme: { ...shared, ...light },
  toggleTheme: () => {},
  themeType: "light",
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(light);
  const [themeType, setThemeType] = useState<"light" | "dark">(
    defaultThemeContext.themeType
  );

  // Listen for changes in the system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? dark : light);
    };

    setTheme(mediaQuery.matches ? dark : light);
    setThemeType(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light));
  };

  return (
    <ThemeContext.Provider
      value={{ theme: { ...shared, ...theme }, toggleTheme, themeType }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
