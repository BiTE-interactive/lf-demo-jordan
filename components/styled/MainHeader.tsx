import styled from "styled-components";
import { Center } from "./Center";

export const MainHeader = styled(Center)`
  position: relative;
  padding: 4rem 0;

  &::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 450px;
    height: 320px;
    margin-left: -250px;
  }

  &::after {
    background: var(--primary-glow);
    width: 350px;
    height: 220px;
    z-index: -1;
  }

  &::before,
  &::after {
    content: "";
    left: 51%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }
`;
