import useSWR from "swr";
import { getFetcher } from "../get-fetcher";
import { PlayerData } from "./types";

export const useGetPlayerClient = (id: string) => {
  try {
    return useSWR<PlayerData>(`/api/player?id=${id}`, getFetcher);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
