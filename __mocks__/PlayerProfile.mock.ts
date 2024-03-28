import { PlayerData } from "@/data/player/types";

export const playerProfileMock: PlayerData = {
  summary: {
    id: "11073152",
    realm: 1,
    displayName: "TestPlayer",
    portrait:
      "https://static.starcraft2.com/starport/bda9a860-ca36-11ec-b5ea-4bed4e205979/portraits/0-0.jpg",
    decalTerran:
      "https://static.starcraft2.com/starport/bda9a860-ca36-11ec-b5ea-4bed4e205979/decals/2-0.jpg",
    decalProtoss:
      "https://static.starcraft2.com/starport/bda9a860-ca36-11ec-b5ea-4bed4e205979/decals/2-25.jpg",
    decalZerg:
      "https://static.starcraft2.com/starport/bda9a860-ca36-11ec-b5ea-4bed4e205979/decals/2-50.jpg",
    totalSwarmLevel: 150,
    totalAchievementPoints: 12740,
  },
  snapshot: {
    seasonSnapshot: {
      "1v1": {
        rank: 1,
        leagueName: "GRANDMASTER",
        totalGames: 30,
        totalWins: 20,
      },
      "2v2": { rank: -1, leagueName: null, totalGames: 0, totalWins: 0 },
      "3v3": { rank: -1, leagueName: null, totalGames: 0, totalWins: 0 },
      "4v4": { rank: -1, leagueName: null, totalGames: 0, totalWins: 0 },
      Archon: {
        rank: 1,
        leagueName: "GRANDMASTER",
        totalGames: 30,
        totalWins: 30,
      },
    },
    totalRankedSeasonGamesPlayed: 60,
  },
  career: {
    terranWins: 17,
    zergWins: 38,
    protossWins: 7,
    totalCareerGames: 10642,
    totalGamesThisSeason: 72,
    current1v1LeagueName: "GRANDMASTER",
    currentBestTeamLeagueName: "GRANDMASTER",
    best1v1Finish: { leagueName: "GRANDMASTER", timesAchieved: 16 },
    bestTeamFinish: { leagueName: "GRANDMASTER", timesAchieved: 14 },
  },
  swarmLevels: {
    level: 150,
    terran: { level: 50, maxLevelPoints: 9525000, currentLevelPoints: -1 },
    zerg: { level: 50, maxLevelPoints: 9525000, currentLevelPoints: -1 },
    protoss: { level: 50, maxLevelPoints: 9525000, currentLevelPoints: -1 },
  },
  campaign: {
    difficultyCompleted: {
      "wings-of-liberty": "EASY",
      "heart-of-the-swarm": "HARD",
      "legacy-of-the-void": "BRUTAL",
    },
  },
};
