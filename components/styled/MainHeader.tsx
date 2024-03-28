import styled from "styled-components";
import { Center } from "./Center";

export const MainHeader = styled(Center)`
  position: relative;
  padding: 1rem 0;
  height: 100px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 2rem 0;
    height: 120px;
  }
  width: 100%;
`;
