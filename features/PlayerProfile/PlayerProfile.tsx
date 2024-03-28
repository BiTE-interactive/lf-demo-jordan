"use client";

import { H2 } from "@components/styled/Headers/H2";
import { BackButton } from "@components/styled/BackButton";
import { useGetPlayerClient } from "@data/player/get-player.client";
import {
  ProfileContainer,
  Portrait,
  DisplayName,
  Info,
  InfoRow,
  Label,
  Value,
  DecalImage,
} from "./styled";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";

export const PlayerProfile = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetPlayerClient(id);

  if (error) {
    return <H2>Error loading player profile</H2>;
  }

  if (isLoading || !data) {
    return <H2>Loading...</H2>;
  }

  const { push } = useRouter();

  const { snapshot, summary, career, swarmLevels } = data;

  return (
    <ProfileContainer>
      <BackButton
        style={{ position: "absolute", left: 10 }}
        onClick={() => push(routes.HOME)}
      />
      <Portrait
        src={summary.portrait}
        alt={`${summary.displayName} Portrait`}
      />
      <DisplayName>{summary.displayName}</DisplayName>
      <Value>
        <DecalImage src={summary.decalTerran} alt="Terran Decal" />
        <DecalImage src={summary.decalProtoss} alt="Protoss Decal" />
        <DecalImage src={summary.decalZerg} alt="Zerg Decal" />
      </Value>
      <Info>
        <InfoRow>
          <Label>Total Achievement Points:</Label>
          <Value>{summary.totalAchievementPoints}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Swarm Level:</Label>
          <Value>{swarmLevels.level}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Current 1v1 League:</Label>
          <Value>{career.current1v1LeagueName}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Total Career Games:</Label>
          <Value>{career.totalCareerGames}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Total Ranked Season Games Played:</Label>
          <Value>{snapshot.totalRankedSeasonGamesPlayed}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Profile Link:</Label>
          <Value>
            <a
              href={`https://starcraft2.com/en-us/profile/1/${summary.realm}/${summary.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </Value>
        </InfoRow>
      </Info>
    </ProfileContainer>
  );
};

export default PlayerProfile;
