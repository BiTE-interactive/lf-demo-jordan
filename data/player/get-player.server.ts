import fetchDataWithOAuth, { BATTLE_NET_BASE_URL } from "@/data/useFetch";
import { PlayerData } from "./types";

// Get a player's profile data from the battle.net community API
// sc2/profile/:regionID/:realmID/:profileId
export const getPlayerServer = async (id: string, regionId: string) =>
  await fetchDataWithOAuth<PlayerData>(
    `${BATTLE_NET_BASE_URL}/sc2/profile/${regionId}/1/${id}`
  );
