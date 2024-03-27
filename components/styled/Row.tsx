import { CombinedTheme } from "@/styles";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
`;
