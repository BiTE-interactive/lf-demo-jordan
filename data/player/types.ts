interface Summary {
  id: string;
  realm: number;
  displayName: string;
  portrait: string;
  decalTerran: string;
  decalProtoss: string;
  decalZerg: string;
  totalSwarmLevel: number;
  totalAchievementPoints: number;
}

interface SeasonSnapshot {
  rank: number;
  leagueName: string | null;
  totalGames: number;
  totalWins: number;
}

interface Snapshot {
  seasonSnapshot: {
    "1v1": SeasonSnapshot;
    "2v2": SeasonSnapshot;
    "3v3": SeasonSnapshot;
    "4v4": SeasonSnapshot;
    Archon: SeasonSnapshot;
  };
  totalRankedSeasonGamesPlayed: number;
}

interface Career {
  terranWins: number;
  zergWins: number;
  protossWins: number;
  totalCareerGames: number;
  totalGamesThisSeason: number;
  current1v1LeagueName: string;
  currentBestTeamLeagueName: string;
  best1v1Finish: LeagueFinish;
  bestTeamFinish: LeagueFinish;
}

interface LeagueFinish {
  leagueName: string;
  timesAchieved: number;
}

interface SwarmLevels {
  level: number;
  terran: SwarmLevelDetail;
  zerg: SwarmLevelDetail;
  protoss: SwarmLevelDetail;
}

interface SwarmLevelDetail {
  level: number;
  maxLevelPoints: number;
  currentLevelPoints: number;
}

interface Campaign {
  difficultyCompleted: {
    "wings-of-liberty": string;
    "heart-of-the-swarm": string;
    "legacy-of-the-void": string;
  };
}

export interface PlayerData {
  summary: Summary;
  snapshot: Snapshot;
  career: Career;
  swarmLevels: SwarmLevels;
  campaign: Campaign;
}
