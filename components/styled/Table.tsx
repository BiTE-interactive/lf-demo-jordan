import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeaderContainer = styled.div`
  flex-shrink: 0;
`;

export const TableBodyContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 4rem;
`;

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 7px 5px;
  text-align: left;
  min-width: 50px;
  max-width: 100px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 10px;
    min-width: 100px;
    max-width: 200px;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export const TableCell = styled.td`
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  min-width: 50px;
  max-width: 100px;
  padding: 7px 5px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 10px;
    min-width: 100px;
    max-width: 200px;
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 0;
`;
