import { grayDark, blueDark, redDark, greenDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const baseTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
  fonts: {
    sans: "DM Sans, sans-serif",
  },
};

export const { styled, getCssText, globalCss, keyframes } = createStitches({
  theme: baseTheme,
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    background: "#161616",
  },
});
