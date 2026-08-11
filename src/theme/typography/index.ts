import type { TypographyVariantsOptions } from "@mui/material/styles";

import { fontFamily, fontWeight } from "./tokens";

const typography: TypographyVariantsOptions = {
  fontFamily,

  button: {
    textTransform: "none",
    fontWeight: fontWeight.semibold,
  },
  title_sm: {
    fontWeight: fontWeight.medium,
    fontSize: "0.875rem",
    lineHeight: "20px",
    letterSpacing: 0,
  },
  callout: {
    fontWeight: fontWeight.semibold,
    fontSize: "0.75rem",
    lineHeight: "16px",
    letterSpacing: 0,
  },
  label: {
    fontWeight: fontWeight.medium,
    fontSize: "0.75rem",
    lineHeight: "16px",
    letterSpacing: 0,
  },
  body_lg: {
    fontWeight: fontWeight.regular,
    fontSize: "1rem",
    lineHeight: "22px",
    letterSpacing: 0,
  },
  body_md: {
    fontWeight: fontWeight.regular,
    fontSize: "0.875rem",
    lineHeight: "20px",
    letterSpacing: 0,
  },
  body_sm: {
    fontWeight: fontWeight.regular,
    fontSize: "0.75rem",
    lineHeight: "16px",
    letterSpacing: 0,
  },
  description: {
    fontWeight: fontWeight.regular,
    fontSize: "0.625rem",
    lineHeight: "14px",
    letterSpacing: 0.2,
  },
};

export default typography;
