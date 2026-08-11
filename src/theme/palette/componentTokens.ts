import type { SemanticColors } from "./semantic";
import { darkSemantic, lightSemantic } from "./semantic";

/**
 * Component tokens — the third and final token layer.
 *
 *   colors (primitives) → semantic (roles) → componentTokens (per-component decisions)
 *
 * A component never picks a color itself; it reads the decision from here, and
 * these decisions read from the semantic layer (never from primitives directly).
 * Because the tokens are built per color scheme, MUI emits distinct CSS
 * variables for light and dark, so a component's styles adapt with no re-render.
 */

/** State triplet shared by most interactive tokens. */
interface ButtonStateColors {
  standard: {
    background: string;
    color: string;
    /** Present only for variants that draw a stroke (e.g. outlined). */
    border?: string;
  };
  hover: {
    background: string;
    color: string;
    border?: string;
  };
  disabled: {
    background: string;
    color: string;
    border?: string;
  };
}

export interface ButtonTokens {
  contained: {
    primary: ButtonStateColors;
    secondary: ButtonStateColors;
  };
  outlined: {
    primary: ButtonStateColors;
    secondary: ButtonStateColors;
  };
  /** Text button ("underlined" in DS parlance): no background, no border. */
  underlined: {
    primary: ButtonStateColors;
    secondary: ButtonStateColors;
  };
}

export interface ComponentTokens {
  button: ButtonTokens;
}

/** Build every component token for a given scheme from its semantic roles. */
const buildComponentTokens = (s: SemanticColors): ComponentTokens => ({
  button: {
    contained: {
      primary: {
        standard: {
          background: s.primary.main,
          color: s.primary.contrastText,
        },
        hover: {
          background: s.primary.hover,
          color: s.primary.contrastText,
        },
        disabled: {
          background: s.background.disabled,
          color: s.text.disabled,
        },
      },
      secondary: {
        standard: {
          background: s.secondary.main,
          color: s.secondary.contrastText,
        },
        hover: {
          background: s.secondary.hover,
          color: s.secondary.contrastText,
        },
        disabled: {
          background: s.background.disabled,
          color: s.text.disabled,
        },
      },
    },
    outlined: {
      primary: {
        standard: {
          background: s.background.default,
          color: s.primary.main,
          border: s.primary.main,
        },
        hover: {
          background: s.action.hover,
          color: s.primary.hover,
          border: s.primary.hover,
        },
        disabled: {
          background: s.background.disabled,
          color: s.text.disabled,
          border: s.border,
        },
      },
      secondary: {
        standard: {
          background: s.background.default,
          color: s.text.secondary,
          border: s.border,
        },
        hover: {
          background: s.action.hover,
          color: s.text.primary,
          border: s.secondary.main,
        },
        disabled: {
          background: "transparent",
          color: s.text.disabled,
          border: s.border,
        },
      },
    },
    underlined: {
      primary: {
        standard: { background: "transparent", color: s.primary.main },
        hover: { background: s.action.hover, color: s.primary.hover },
        disabled: { background: "transparent", color: s.text.disabled },
      },
      secondary: {
        standard: { background: "transparent", color: s.text.primary },
        hover: { background: s.action.hover, color: s.text.primary },
        disabled: { background: "transparent", color: s.text.disabled },
      },
    },
  },
});

export const lightComponentTokens = buildComponentTokens(lightSemantic);
export const darkComponentTokens = buildComponentTokens(darkSemantic);
