"use client";

import React from "react";
import { PlayerProfile } from ".";
import { useGetPlayerClient } from "@/data/player/get-player.client";
import { Container, Loading } from "@/components";
import { BackButton, H2 } from "@/components/styled";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";

const PlayerProfileContainer = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetPlayerClient(id);
  const { push } = useRouter();

  if (error) {
    return (
      <Container>
        <BackButton
          style={{ position: "absolute", left: 10 }}
          onClick={() => push(routes.HOME())}
        />
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
