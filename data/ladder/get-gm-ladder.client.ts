import useSWR from "swr";
import { getFetcher } from "../get-fetcher";
import { Region, LadderData } from "./types";

export const useGetGmLadderClient = (region: Region = Region.US) => {
  try {
    return useSWR<LadderData>(`/api/gm-ladder?region=${region}`, getFetcher);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
