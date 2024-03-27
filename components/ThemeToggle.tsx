import React from "react";
import IconButton from "./IconButton";
import { useTheme } from "@providers/ThemeProvider";
import { Light, Dark } from "@components/icons";

const ThemeToggle = () => {
  const { themeType, toggleTheme } = useTheme();

  return (
    <IconButton
      Icon={themeType ? Light : Dark}
      onClick={toggleTheme}
      $rounded
      $variant="switch"
    />
  );
};

export default ThemeToggle;
