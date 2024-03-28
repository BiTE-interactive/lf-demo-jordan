export interface LadderTeam {
  teamMembers: TeamMember[];
  previousRank: number;
  points: number;
  wins: number;
  losses: number;
  mmr: number;
  joinTimestamp: number;
}

export interface TeamMember {
  id: string;
  realm: number;
  region: number;
  displayName: string;
  favoriteRace: "zerg" | "protoss" | "terran";
  clanTag?: string;
}

export interface LadderData {
  ladderTeams: LadderTeam[];
}

export enum Region {
  US = "1",
  EU = "2",
  KR = "3",
}
