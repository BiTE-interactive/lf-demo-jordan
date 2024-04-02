import { getPlayerServer } from "@data/player/get-player.server";
import { PlayerData } from "@data/player/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlayerData | { error: string }>
) {
  const { id, regionId } = req.query;

  try {
    const data = await getPlayerServer(id as string, regionId as string);

    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("API Error:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Unknown API Error");
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
