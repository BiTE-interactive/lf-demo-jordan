import { LadderData } from "@/data/ladder";

export const mockLadderData: LadderData = {
  ladderTeams: [
    {
      teamMembers: [
        {
          id: "1",
          realm: 1,
          region: 1,
          displayName: "Player A",
          favoriteRace: "zerg",
        },
      ],
      previousRank: 1,
      points: 73,
      wins: 2,
      losses: 3,
      mmr: 7000,
      joinTimestamp: 1710993574,
    },
  ],
};
