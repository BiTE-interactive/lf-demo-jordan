"use client";

import { Leaderboard, MainHeaderContainer } from "@components/index";
import { Center, Main, Content } from "@components/styled";

export default function Home() {
  return (
    <Main>
      <Center>
        <Content>
          <MainHeaderContainer />
          <Leaderboard />
        </Content>
      </Center>
    </Main>
  );
}
