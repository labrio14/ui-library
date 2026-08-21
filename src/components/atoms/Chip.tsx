import type { StyledComponent } from "@emotion/styled";
import styled from "@emotion/styled";
import MuiChip, { type ChipProps as MuiChipProps } from "@mui/material/Chip";

const Chip: StyledComponent<MuiChipProps> = styled(MuiChip)();

Chip.displayName = "Chip";

export default Chip;
