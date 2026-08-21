import type { Components, Theme } from "@mui/material/styles";

/**
 * Component-level style overrides for MUI ToggleButton.
 *
 * Colors read from `(theme.vars ?? theme).palette.componentTokens.toggleButton`
 * so the persistent selected state adapts to the active color scheme with no
 * re-render. Radius matches the design system (0.5rem); the default MUI
 * uppercase transform is dropped to stay consistent with the rest of the kit.
 */
const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  styleOverrides: {
    root: ({ theme }) => {
      const t = (theme.vars ?? theme).palette.componentTokens.toggleButton;
      return {
        borderRadius: "0.5rem",
        textTransform: "none",
        color: t.standard.color,
        borderColor: t.standard.border,
        "&:hover": {
          backgroundColor: t.hover.background,
        },
        "&.Mui-selected": {
          backgroundColor: t.selected.background,
          color: t.selected.color,
          borderColor: t.selected.border,
          "&:hover": {
            backgroundColor: t.selectedHover.background,
          },
        },
      };
    },
  },
};

export default MuiToggleButton;
