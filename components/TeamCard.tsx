import { LadderTeam } from "@/data/ladder";
import React from "react";

export const TeamCard = ({ team }: { team: LadderTeam }) => {
  return (
    <div>
      <h2>
        {team.wins} - {team.losses}
      </h2>
      <h2>MMR: {team.mmr}</h2>
      <span></span>
    </div>
  );
};

export default TeamCard;
