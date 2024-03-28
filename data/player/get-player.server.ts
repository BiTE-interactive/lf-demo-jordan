import fetchDataWithOAuth, { BATTLE_NET_BASE_URL } from "@/data/useFetch";
import { PlayerData } from "./types";
import { Region } from "../ladder";

export const getPlayerServer = async (id: string, region: Region = Region.US) =>
  await fetchDataWithOAuth<PlayerData>(
    `${BATTLE_NET_BASE_URL}/sc2/profile/${region}/1/${id}`
  );
