"use client";

import { Main } from "@components/styled";
import { PlayerProfile } from "@features/PlayerProfile";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Main>
      <PlayerProfile id={id} />
    </Main>
  );
}
