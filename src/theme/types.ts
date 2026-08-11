import type { ComponentTokens } from "./palette/componentTokens";

/**
 * MUI module augmentation — where the design system extends MUI's own types.
 *
 * Importing this file (see ./index.ts) makes the augmentations below part of
 * the compiled types, so `theme.palette.componentTokens.*` is fully typed for
 * both this library and its consumers.
 */
declare module "@mui/material/styles" {
  interface Palette {
    componentTokens: ComponentTokens;
  }
  interface PaletteOptions {
    componentTokens?: ComponentTokens;
  }

  interface TypographyVariants {
    title_sm: React.CSSProperties;
    callout: React.CSSProperties;
    label: React.CSSProperties;
    body_lg: React.CSSProperties;
    body_md: React.CSSProperties;
    body_sm: React.CSSProperties;
    description: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title_sm?: React.CSSProperties;
    callout?: React.CSSProperties;
    label?: React.CSSProperties;
    body_lg?: React.CSSProperties;
    body_md?: React.CSSProperties;
    body_sm?: React.CSSProperties;
    description?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title_sm: true;
    callout: true;
    label: true;
    body_lg: true;
    body_md: true;
    body_sm: true;
    description: true;
  }
}

export {};
