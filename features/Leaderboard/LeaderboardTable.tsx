"use client";

import { LadderTeam } from "@data/ladder";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderContainer,
  TableBodyContainer,
  Center,
} from "@components/styled";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { DataFetchingProps } from "@/data/types";
import Loading from "@/components/Loading";

interface LeaderboardTableProps {
  teams?: LadderTeam[];
}

export const LeaderboardTable: React.FC<
  LeaderboardTableProps & DataFetchingProps
> = ({ error, loading, teams }) => {
  const { push } = useRouter();

  const handleRowClick = (id?: string) => {
    if (!id) return;
    push(routes.PLAYER(id));
  };

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
            {loading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Center>
                    <Loading />
                  </Center>
                </TableCell>
              </TableRow>
            )}
            {error && (
              <TableRow>
                <TableCell colSpan={5}>Error Loading Data!</TableCell>
              </TableRow>
            )}
            {teams?.map((team, index) =>
              team.teamMembers.map((teamMember) => (
                <TableRow
                  onClick={() => handleRowClick(teamMember.id)}
                  key={index}
                >
                  <TableCell>{teamMember.displayName || "N/A"}</TableCell>
                  <TableCell>{team.previousRank}</TableCell>
                  <TableCell>{team.mmr}</TableCell>
                  <TableCell>{team.wins}</TableCell>
                  <TableCell>{team.losses}</TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </Table>
      </TableBodyContainer>
    </>
  );
};

export default LeaderboardTable;
