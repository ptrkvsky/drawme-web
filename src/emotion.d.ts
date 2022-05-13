import { Breakpoints, Typography } from "./styles/foundations";
import { Colors } from "./styles/foundations/colors/types";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: Breakpoints;
    colors: Colors;
    typography: Typography;
  }
}
