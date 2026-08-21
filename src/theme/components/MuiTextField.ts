import type { Components, Theme } from "@mui/material/styles";

/**
 * Component-level defaults + style overrides for MUI TextField (outlined).
 *
 * Border colors come from `(theme.vars ?? theme).palette.componentTokens.input`
 * so the field follows the active color scheme with no re-render — same pattern
 * as MuiButton. Radius matches the design system's 0.5rem; typography is
 * inherited (Work Sans), no per-component font.
 */
const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => {
      const t = (theme.vars ?? theme).palette.componentTokens.input;
      return {
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.5rem",
          backgroundColor: t.standard.background,
          "& fieldset": { borderColor: t.standard.border },
          "&:hover fieldset": { borderColor: t.hover.border },
          "&.Mui-focused fieldset": {
            borderColor: t.focus.border,
            borderWidth: 1,
          },
        },
        "& .MuiInputLabel-root": {
          color: t.label.color,
        },
      };
    },
  },
};

export default MuiTextField;
