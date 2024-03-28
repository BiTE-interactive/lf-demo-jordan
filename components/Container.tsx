import { Center, Container as StyledContainer } from "@styled/index";
import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Center>
      <StyledContainer>{children}</StyledContainer>
    </Center>
  );
};

export default Container;
