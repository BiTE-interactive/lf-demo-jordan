import React from "react";
import IconButton from "./IconButton";
import { useTheme } from "@providers/ThemeProvider";
import { Light, Dark } from "@components/icons";

const ThemeToggle = () => {
  const { themeType, toggleTheme } = useTheme();

  return (
    <IconButton
      Icon={themeType === "light" ? Dark : Light}
      onClick={toggleTheme}
      $margin="0"
      $size="md"
      $rounded
      $variant="switch"
      style={{ position: "fixed", right: 15, top: 15 }}
    />
  );
};

export default ThemeToggle;
