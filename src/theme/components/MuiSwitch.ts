import type { Components, Theme } from "@mui/material/styles";

const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      const t = (theme.vars ?? theme).palette.componentTokens.switch;

      return {
        "& + .MuiFormControlLabel-label": {
          margin: ".5rem",
        },
        width: "2.25rem",
        height: "1.25rem",
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: "1px !important",
          margin: ".125rem !important",
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(1rem)",
            "& + .MuiSwitch-track": {
              backgroundColor: t.checked.track,
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 1,
              background: t.disabled.track,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: t.rested.thumb,
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: t.disabled.thumb,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: t.disabled.track,
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: ".875rem",
          height: ".875rem",
          color: t.rested.thumb,
        },
        "& .MuiSwitch-track": {
          borderRadius: ".8125rem",
          backgroundColor: t.rested.track,
          opacity: 1,
          transition: "background-color 500ms",
        },
      };
    },
  },
};

export default MuiSwitch;
