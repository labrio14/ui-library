import type { StyledComponent } from "@emotion/styled";
import styled from "@emotion/styled";
import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import MuiTooltip, {
  type TooltipProps as MuiTooltipProps,
} from "@mui/material/Tooltip";

export type TooltipProps = Omit<MuiTooltipProps, "children">;

export interface ButtonProps extends MuiButtonProps {
  tooltipProps?: TooltipProps;
  target?: string;
}

const Button: StyledComponent<ButtonProps> = styled(
  ({ tooltipProps, ref, target, ...rest }: ButtonProps) => {
    // control to render the button with the tooltip or no
    if (tooltipProps !== undefined) {
      return (
        <MuiTooltip {...tooltipProps}>
          <MuiButton {...rest} ref={ref} {...(rest.href && { target })} />
        </MuiTooltip>
      );
    }
    return <MuiButton {...rest} ref={ref} {...(rest.href && { target })} />;
  },
)();

Button.displayName = "Button";

export default Button;
