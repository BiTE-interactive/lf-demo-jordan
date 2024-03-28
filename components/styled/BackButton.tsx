import styled from "styled-components";

export const BackButton = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
  }

  &::before {
    content: "";
    border-style: solid;
    border-width: 2px 2px 0 0;
    border-color: ${(props) => props.theme.colors.primary};
    display: inline-block;
    height: 15px;
    width: 15px;
    left: 0;
    position: relative;
    transform: rotate(-135deg);
    margin-right: 10px;
  }
`;
