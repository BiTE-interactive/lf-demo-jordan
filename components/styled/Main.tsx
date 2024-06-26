import styled from "styled-components";

import { Col } from "./Col";

export const Main = styled(Col)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) =>
    `linear-gradient(
      to bottom,
      transparent,
      ${theme.colors.backgroundStart}
    )
    ${theme.colors.backgroundEnd}
  `};
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;
