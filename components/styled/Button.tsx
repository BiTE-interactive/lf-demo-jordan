import styled from "styled-components";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  // all transient properties must be prefixed with $ to avoid being forwarded to the DOM
  $rounded?: boolean;
  $size?: ButtonSize;
  $variant?: "primary" | "secondary" | "switch";
}

const buttonSize = (size?: ButtonSize) => {
  switch (size) {
    case "sm":
      return "25px";
    case "md":
      return "30px";
    case "lg":
      return "40px";
    default:
      return "auto";
  }
};

export const Button = styled.button<ButtonProps>`
  padding: ${({ $rounded }) => ($rounded ? "0" : "10px 20px")};
  height: ${({ $size }) => buttonSize($size)};
  width: ${({ $size }) => buttonSize($size)};
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
    border: ${({ theme, $variant }) =>
      theme.button[$variant || "primary"].borderHover || "none"};
  }
`;
