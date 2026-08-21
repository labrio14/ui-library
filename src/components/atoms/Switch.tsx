"use client";

import MuiSwitch, {
  type SwitchProps as MuiSwitchProps,
} from "@mui/material/Switch";

import { styled } from "@mui/material";
import type { StyledComponent } from "@emotion/styled";

const Switch: StyledComponent<MuiSwitchProps> = styled(MuiSwitch)();
Switch.displayName = "Switch";

export default Switch;
