import styled from "styled-components";

export const Portrait = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 3px solid ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundStart};
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
`;

export const DecalImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 60px;
  border: 2px solid rgba(153, 204, 255, 0.275);
  ${({ theme }) => theme.mediaQueries.md} {
    height: 60px;
    width: 60px;
  }
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
`;
