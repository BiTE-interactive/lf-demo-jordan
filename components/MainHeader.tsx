import React from "react";
import { MainHeader } from "./styled/MainHeader";
import { Center } from "./styled/Center";
import { Logo } from "./icons/Logo";
import ThemeToggle from "./ThemeToggle";
import { Col, Flex } from "./styled";
import { H2 } from "./styled/Headers/H2";

export const MainHeaderContainer = () => {
  return (
    <Center $height={"120px"}>
      <MainHeader>
        <ThemeToggle />
        <Col>
          <Flex $gap="2rem">
            <Logo />
          </Flex>
          <Center>
            <H2>Demo App</H2>
          </Center>
        </Col>
      </MainHeader>
    </Center>
  );
};

export default MainHeaderContainer;
