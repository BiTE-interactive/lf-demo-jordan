import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import _ from "lodash";
import { shared, light, dark, Theme, CombinedTheme } from "../styles/theme";
import Cookies from "js-cookie";

interface ThemeContextType {
  theme: CombinedTheme;
  toggleTheme: () => void;
  themeType: "light" | "dark";
}

const defaultThemeContext: ThemeContextType = {
  theme: _.merge({}, shared, light),
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
    const handleChange = (e: MediaQueryListEvent) => {
      const _themeType = e.matches ? "dark" : "light";
      // If a user changes their system theme preference save it in cookies as well
      Cookies.set("theme", _themeType, { expires: 365 });
      setTheme(e.matches ? dark : light);
      setThemeType(_themeType);
    };

    const getInitialTheme = () => {
      // Try to get theme from cookies
      const savedTheme = Cookies.get("theme");
      if (savedTheme) {
        return savedTheme === "dark" ? dark : light;
      }
      // Fallback to system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      return mediaQuery.matches ? dark : light;
    };

    const initialTheme = getInitialTheme();

    setTheme(initialTheme);
    setThemeType(initialTheme === dark ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === light ? dark : light;
      const newThemeType = prevTheme === light ? "dark" : "light";
      // Save theme choice in cookies
      Cookies.set("theme", newThemeType, { expires: 365 });
      setThemeType(newThemeType);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{ theme: _.merge({}, shared, theme), toggleTheme, themeType }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
