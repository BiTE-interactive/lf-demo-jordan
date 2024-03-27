import { CombinedTheme } from "@/styles";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends CombinedTheme {}
}
