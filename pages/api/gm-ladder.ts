import { LadderData, Region, getGmLadderServer } from "@data/ladder";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LadderData | { error: string }>
) {
  const { region } = req.query;

  try {
    const data = await getGmLadderServer(region as Region);

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
