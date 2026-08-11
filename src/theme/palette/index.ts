import type { PaletteOptions } from "@mui/material/styles";

import {
  darkComponentTokens,
  lightComponentTokens,
  type ComponentTokens,
} from "./componentTokens";
import { darkSemantic, lightSemantic, type SemanticColors } from "./semantic";

/**
 * Translate a set of semantic roles into a MUI {@link PaletteOptions}, plus the
 * design system's own `componentTokens` bag (typed via module augmentation in
 * ../types.ts). This is the only place that knows the shape MUI expects; the
 * semantic layer stays framework-agnostic.
 */
const buildPalette = (
  mode: "light" | "dark",
  semantic: SemanticColors,
  componentTokens: ComponentTokens,
): PaletteOptions => ({
  mode,
  primary: {
    main: semantic.primary.main,
    contrastText: semantic.primary.contrastText,
  },
  secondary: {
    main: semantic.secondary.main,
    contrastText: semantic.secondary.contrastText,
  },
  background: {
    default: semantic.background.default,
    paper: semantic.background.paper,
  },
  text: {
    primary: semantic.text.primary,
    secondary: semantic.text.secondary,
    disabled: semantic.text.disabled,
  },
  divider: semantic.divider,
  componentTokens,
});

export const lightPalette = buildPalette(
  "light",
  lightSemantic,
  lightComponentTokens,
);
export const darkPalette = buildPalette(
  "dark",
  darkSemantic,
  darkComponentTokens,
);
