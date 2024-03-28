import { LadderTeam } from "@/data/ladder";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderContainer,
  TableBodyContainer,
} from "../../components/styled";
import { useRouter } from "next/router";
import { routes } from "@/routes";

interface LeaderboardTableProps {
  teams: LadderTeam[];
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  teams,
}) => {
  const { push } = useRouter();
  return (
    <>
      <TableHeaderContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Prev Rank</TableHeader>
              <TableHeader>MMR</TableHeader>
              <TableHeader>Wins</TableHeader>
              <TableHeader>Losses</TableHeader>
            </tr>
          </thead>
        </Table>
      </TableHeaderContainer>
      <TableBodyContainer>
        <Table>
          <tbody>
            {teams.map((team, index) => {
              const teamMember = team.teamMembers[0];
              return (
                <TableRow
                  onClick={() =>
                    teamMember && push(routes.PLAYER(teamMember.id))
                  }
                  key={index}
                >
                  <TableCell>{teamMember?.displayName || "N/A"}</TableCell>
                  <TableCell>{team.previousRank}</TableCell>
                  <TableCell>{team.mmr}</TableCell>
                  <TableCell>{team.wins}</TableCell>
                  <TableCell>{team.losses}</TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableBodyContainer>
    </>
  );
};
