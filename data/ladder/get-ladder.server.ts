import fetchDataWithOAuth, { BATTLE_NET_BASE_URL } from "@/data/useFetch";
import { Region, LadderData } from "./types";

export const getLadderServer = async (region: Region = Region.US) =>
  await fetchDataWithOAuth<LadderData>(
    `${BATTLE_NET_BASE_URL}/sc2/legacy/ladder/${region}/12345`
  );
