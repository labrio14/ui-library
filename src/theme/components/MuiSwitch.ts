import type { Components, Theme } from "@mui/material/styles";

/**
 * Component-level style overrides for MUI Switch.
 *
 * Track and thumb colors read from
 * `(theme.vars ?? theme).palette.componentTokens.switch`. The thumb maps to the
 * primary `contrastText` role, which is near-white in both schemes, so the knob
 * stays high-contrast on the colored (checked) and neutral (off) tracks alike.
 */
const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: {
      width: 44,
      height: 24,
      padding: 0,
    },
    switchBase: ({ theme }) => {
      const t = (theme.vars ?? theme).palette.componentTokens.switch;
      return {
        padding: 3,
        "&.Mui-checked": {
          transform: "translateX(20px)",
          color: t.thumb,
          "& + .MuiSwitch-track": {
            backgroundColor: t.trackChecked,
            opacity: 1,
          },
        },
      };
    },
    thumb: ({ theme }) => ({
      width: 18,
      height: 18,
      boxShadow: "none",
      backgroundColor: (theme.vars ?? theme).palette.componentTokens.switch.thumb,
    }),
    track: ({ theme }) => ({
      borderRadius: 12,
      opacity: 1,
      backgroundColor: (theme.vars ?? theme).palette.componentTokens.switch.track,
    }),
  },
};

export default MuiSwitch;
