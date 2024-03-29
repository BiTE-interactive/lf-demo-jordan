"use client";

import PlayerProfileContainer from "@/features/PlayerProfile/PlayerProfileContainer";
import { Center, Content, Main } from "@components/styled";
import { max, size, min, transform } from "lodash";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Main>
      <Center>
        <Content>
          <PlayerProfileContainer id={id} />
        </Content>
      </Center>
    </Main>
  );
}
