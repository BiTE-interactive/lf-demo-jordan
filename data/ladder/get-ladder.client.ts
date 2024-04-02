import useSWR from "swr";
import { getFetcher } from "../get-fetcher";
import { Region, LadderData } from "./types";

export const usegetLadderClient = (region: Region = Region.US) => {
  try {
    return useSWR<LadderData>(`/api/ladder?region=${region}`, getFetcher);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
