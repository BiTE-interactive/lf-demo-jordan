import styled from "styled-components";

interface FlexProps {
  $flex?: number;
  $direction?: string;
  $gap?: string;
  $justify?: string;
  $align?: string;
  $position?: string;
  $p?: number;
  $height?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: ${({ $flex }) => $flex};
  height: ${({ $height }) => $height || "100%"};
  padding: ${({ $p }) => ($p ? `${$p * 0.25}rem` : "0")};
  position: ${({ $position }) => $position};
  flex: ${({ $flex }) => $flex};
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;
