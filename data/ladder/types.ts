export enum Region {
  US = "1",
  EU = "2",
  KR = "3",
}

export interface LadderMember {
  character: Character;
  previousRank: number;
  points: number;
  wins: number;
  losses: number;
  joinTimestamp: number;
}

export interface Character {
  id: string;
  realm: number;
  region: number;
  displayName: string;
  favoriteRace: "zerg" | "protoss" | "terran";
  clanTag?: string;
}

export interface LadderData {
  ladderMembers: LadderMember[];
}
