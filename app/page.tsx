"use client";

import { MainHeaderContainer } from "@/components";
import { Leaderboard } from "@/features";
import { Center, Content, Main as MainStyled } from "@styled/index";

export default async function Home() {
  return (
    <MainStyled>
      <Center>
        <Content>
          <MainHeaderContainer />
          <Leaderboard />
        </Content>
      </Center>
    </MainStyled>
  );
}
