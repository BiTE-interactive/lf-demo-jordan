import fetchDataWithOAuth, { BATTLE_NET_BASE_URL } from "@/data/useFetch";
import { Region, LadderData } from "./types";

// Get ladder data from the battle.net community legacy API using ladderId 12345 for demo purposes
// sc2/legacy/ladder/:regionId/:ladderId
export const getLadderServer = async (region: Region = Region.US) =>
  await fetchDataWithOAuth<LadderData>(
    `${BATTLE_NET_BASE_URL}/sc2/legacy/ladder/${region}/12345`
  );
