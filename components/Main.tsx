"use client";

import { Leaderboard } from "@features/Leaderboard";
import { MainHeaderContainer } from ".";
import { Center, Content, Main as MainStyled } from "./styled";

export const Main = () => {
  return (
    <MainStyled>
      <Center>
        <Content>
          <Center>
            <MainHeaderContainer />
          </Center>
          <Leaderboard />
        </Content>
      </Center>
    </MainStyled>
  );
};

export default Main;