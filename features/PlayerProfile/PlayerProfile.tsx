"use client";

import { Container } from "@/components";
import { BackButton, H1 } from "@components/styled";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { PlayerData } from "@data/player/types";
import ThemeToggle from "@components/ThemeToggle";
import { Portrait, Value, DecalImage, Info, InfoRow, Label } from "./styled";

export const PlayerProfile = ({ playerData }: { playerData: PlayerData }) => {
  const { push } = useRouter();

  const { campaign, snapshot, summary, career, swarmLevels } = playerData;

  return (
    <Container>
      <BackButton
        style={{ position: "absolute", left: 10 }}
        onClick={() => push(routes.HOME())}
      />
      <ThemeToggle />
      <Portrait
        src={summary.portrait}
        alt={`${summary.displayName} Portrait`}
      />
      <H1>{summary.displayName}</H1>
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
        <InfoRow>
          <Label>Campaings Completed</Label>
          <Value>
            Wings of Liberty {campaign.difficultyCompleted["wings-of-liberty"]}
          </Value>
          <Value>
            Heart of the Swarm{" "}
            {campaign.difficultyCompleted["heart-of-the-swarm"]}
          </Value>
          <Value>
            Legacy of the Void{" "}
            {campaign.difficultyCompleted["legacy-of-the-void"]}
          </Value>
        </InfoRow>
      </Info>
    </Container>
  );
};

export default PlayerProfile;
