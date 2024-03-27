import styled from "styled-components";

export interface ButtonProps {
  // all transient properties must be prefixed with $ to avoid being forwarded to the DOM
  $rounded?: boolean;
  $variant?: "primary" | "secondary" | "switch";
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${({ theme, $variant }) =>
    theme.button[$variant || "primary"].background};
  color: ${({ theme, $variant }) => theme.button[$variant || "primary"].color};
  border: ${({ theme, $variant }) =>
    theme.button[$variant || "primary"].border || "none"};
  border-radius: ${({ $rounded }) => ($rounded ? "100%" : "5px")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: ${({ theme, $variant }) =>
    theme.button[$variant || "primary"].boxShadow};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      theme.button[$variant || "primary"].backgroundHover};
    border: ${({ theme, $variant }) => {
      console.log(theme.button.switch);
      return theme.button[$variant || "primary"].borderHover || "none";
    }};
  }
`;
