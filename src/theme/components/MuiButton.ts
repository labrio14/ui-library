import type { Components, Theme } from "@mui/material/styles";

/**
 * Component-level defaults + style overrides for MUI Button.
 *
 * Colors come from `(theme.vars ?? theme).palette.componentTokens.button` —
 * preferring the CSS variable form, read inside each variant's `style` function.
 * Reading from `theme.vars` (not a statically imported palette) is what lets a
 * single button definition follow the active color scheme: the same var
 * resolves to the light or dark value depending on the class on the root, with
 * no re-render. The `?? theme` fallback covers the (typed) case where CSS
 * variables are disabled — the token shape is identical either way.
 */
const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: "0.5rem",
      fontWeight: 500,
    },
  },
  variants: [
    {
      props: { variant: "contained", color: "primary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button.contained
          .primary;
        return {
          backgroundColor: t.standard.background,
          color: t.standard.color,
          "&:hover": { backgroundColor: t.standard.background },
          "&.Mui-disabled": {
            backgroundColor: t.disabled.background,
            color: t.disabled.color,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "secondary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button.contained
          .secondary;
        return {
          backgroundColor: t.standard.background,
          color: t.standard.color,
          "&:hover": { backgroundColor: t.hover.background },
          "&.Mui-disabled": {
            backgroundColor: t.disabled.background,
            color: t.disabled.color,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button.outlined
          .primary;
        return {
          color: t.standard.color,
          border: `1px solid ${t.standard.border}`,
          "&:hover": {
            backgroundColor: t.hover.background,
            border: `1px solid ${t.hover.border}`,
          },
          "&.Mui-disabled": {
            color: t.disabled.color,
            border: `1px solid ${t.disabled.border}`,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button.outlined
          .secondary;
        return {
          color: t.standard.color,
          border: `1px solid ${t.standard.border}`,
          "&:hover": {
            backgroundColor: t.hover.background,
            border: `1px solid ${t.hover.border}`,
          },
          "&.Mui-disabled": {
            color: t.disabled.color,
            border: `1px solid ${t.disabled.border}`,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "primary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button
          .underlined.primary;
        return {
          color: t.standard.color,
          "&:hover": {
            backgroundColor: t.hover.background,
            color: t.hover.color,
          },
          "&.Mui-disabled": { color: t.disabled.color },
        };
      },
    },
    {
      props: { variant: "text", color: "secondary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.button
          .underlined.secondary;
        return {
          color: t.standard.color,
          "&:hover": {
            backgroundColor: t.hover.background,
            color: t.hover.color,
          },
          "&.Mui-disabled": { color: t.disabled.color },
        };
      },
    },
  ],
};

export default MuiButton;
