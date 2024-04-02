import useSWR from "swr";
import { getFetcher } from "../get-fetcher";
import { PlayerData } from "./types";
import { getRegion } from "@/routes";

export const useGetPlayerClient = (id: string) => {
  const regionId = getRegion() || "1";
  try {
    return useSWR<PlayerData>(
      `/api/player?id=${id}&regionId=${regionId}`,
      getFetcher
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
