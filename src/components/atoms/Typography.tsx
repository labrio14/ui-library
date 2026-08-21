import type { StyledComponent } from "@emotion/styled";
import styled from "@emotion/styled";
import MuiTypography, {
  type TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";

const Typography: StyledComponent<MuiTypographyProps> = styled(MuiTypography)();

Typography.displayName = "Typography";

export default Typography;
