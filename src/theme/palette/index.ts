import type { PaletteOptions } from "@mui/material/styles";

import {
  darkComponentTokens,
  lightComponentTokens,
  type ComponentTokens,
} from "./componentTokens";

/**
 * Translate a set of semantic roles into a MUI {@link PaletteOptions}, plus the
 * design system's own `componentTokens` bag (typed via module augmentation in
 * ../types.ts). This is the only place that knows the shape MUI expects; the
 * semantic layer stays framework-agnostic.
 */
const buildPalette = (
  mode: "light" | "dark",
  componentTokens: ComponentTokens,
): PaletteOptions => ({
  mode,
  componentTokens,
});

export const lightPalette = buildPalette("light", lightComponentTokens);
export const darkPalette = buildPalette("dark", darkComponentTokens);
