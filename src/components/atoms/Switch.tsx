"use client";

import MuiSwitch, {
  type SwitchProps as MuiSwitchProps,
} from "@mui/material/Switch";

import { styled } from "@mui/material";
import type { StyledComponent } from "@emotion/styled";

export interface SwitchProps extends MuiSwitchProps {}

const Switch: StyledComponent<SwitchProps> = styled(MuiSwitch)();
Switch.displayName = "Switch";

export default Switch;
