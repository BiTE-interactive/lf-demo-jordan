import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 10px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    border-radius: 8px;
    padding: 20px;
    width: 800px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
