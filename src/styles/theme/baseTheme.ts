import { breakpoints as baseBreakPoints, Breakpoints } from "../foundations/breakpoints";
import { baseColors, lightColors } from "../foundations/colors";

import { Typography, typography as baseTypography } from "../foundations/typography";

export type TypeBaseTheme = typeof baseTheme;

const typography: Typography = baseTypography;
const breakpoints: Breakpoints = baseBreakPoints;

export const baseTheme = {
  breakpoints,
  typography
};
