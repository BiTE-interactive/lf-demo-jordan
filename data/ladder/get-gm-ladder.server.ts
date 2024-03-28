import fetchDataWithOAuth, { BATTLE_NET_BASE_URL } from "@/data/useFetch";
import { Region, LadderData } from "./types";

export const getGmLadderServer = async (region: Region = Region.US) =>
  await fetchDataWithOAuth<LadderData>(
    `${BATTLE_NET_BASE_URL}/sc2/ladder/grandmaster/${region}`
  );
