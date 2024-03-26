import { Theme } from "@/styles";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
