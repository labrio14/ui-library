import type { Components, Theme } from "@mui/material/styles";

/**
 * Component-level style overrides for MUI Chip.
 *
 * Per-variant colors are driven through `variants` (the same pattern as
 * MuiButton): each entry's `style` is a callback that reads
 * `(theme.vars ?? theme).palette.componentTokens.chip.*`, so the chip follows
 * the active color scheme with no re-render. Reading from `theme.vars` (never a
 * statically imported palette) is what makes light/dark work.
 */

const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {},
  variants: [
    { props: { size: "small" }, style: { height: 22 } },
    { props: { size: "medium" }, style: { height: 26 } },
    {
      props: { variant: "filled", color: "primary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.chip.filled
          .primary;
        return {
          backgroundColor: t.body.standard.background,
          color: t.body.standard.color,
          "&:hover": { backgroundColor: t.body.hover.background },
        };
      },
    },
    {
      props: { variant: "filled", color: "secondary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.chip.filled
          .secondary;
        return {
          backgroundColor: t.body.standard.background,
          color: t.body.standard.color,
          "&:hover": { backgroundColor: t.body.hover.background },
        };
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.chip.outlined
          .primary;
        return {
          backgroundColor: t.body.standard.background,
          color: t.body.standard.color,
          "&:hover": { backgroundColor: t.body.hover.background },
        };
      },
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: ({ theme }) => {
        const t = (theme.vars ?? theme).palette.componentTokens.chip.outlined
          .secondary;
        return {
          border: `1px solid ${t.body.standard.border}`,
          backgroundColor: t.body.standard.background,
          color: t.body.standard.color,
          "&:hover": { backgroundColor: t.body.hover.background },
        };
      },
    },
  ],
};

export default MuiChip;
