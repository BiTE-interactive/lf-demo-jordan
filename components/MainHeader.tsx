import React from "react";
import { MainHeader } from "./styled/MainHeader";
import { Title } from "./styled/Title";
import { Center } from "./styled/Center";
import { Logo } from "./icons/Logo";
import ThemeToggle from "./ThemeToggle";

export const MainHeaderContainer = () => {
  return (
    <MainHeader>
      <Center>
        <Title>Demo App For</Title>
        <Logo />
        <ThemeToggle />
      </Center>
    </MainHeader>
  );
};

export default MainHeaderContainer;
