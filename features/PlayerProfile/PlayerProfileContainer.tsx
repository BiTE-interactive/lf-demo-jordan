"use client";

import React from "react";
import { PlayerProfile } from ".";
import { useGetPlayerClient } from "@/data/player/get-player.client";
import { Container, Loading } from "@/components";
import { Center, H2 } from "@/components/styled";

const PlayerProfileContainer = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetPlayerClient(id);
  if (error) {
    return (
      <Container>
        <H2>Error loading player profile</H2>
      </Container>
    );
  }

  if (isLoading || !data) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return <PlayerProfile playerData={data} />;
};

export default PlayerProfileContainer;
