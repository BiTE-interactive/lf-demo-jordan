"use client";

import { LadderMember } from "@data/ladder";
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
  members?: LadderMember[];
}

export const LeaderboardTable: React.FC<
  LeaderboardTableProps & DataFetchingProps
> = ({ error, loading, members }) => {
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
              <TableHeader>Points</TableHeader>
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
            {members?.map((member, index) => (
              <TableRow
                onClick={() => handleRowClick(member.character.id)}
                key={index}
              >
                <TableCell>{member.character.displayName || "N/A"}</TableCell>
                <TableCell>{member.previousRank}</TableCell>
                <TableCell>{member.points}</TableCell>
                <TableCell>{member.wins}</TableCell>
                <TableCell>{member.losses}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableBodyContainer>
    </>
  );
};

export default LeaderboardTable;
