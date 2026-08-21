import type { Components, Theme } from "@mui/material/styles";

import MuiButton from "./MuiButton";
import MuiChip from "./MuiChip";
import MuiSwitch from "./MuiSwitch";
import MuiTextField from "./MuiTextField";
import MuiToggleButton from "./MuiToggleButton";

/**
 * Aggregated component overrides. Add one file per component and wire it here.
 */
const components: Components<Theme> = {
  MuiButton,
  MuiChip,
  MuiSwitch,
  MuiTextField,
  MuiToggleButton,
};

export default components;
