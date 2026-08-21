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

/** Text input (outlined) — border color per state, plus label. */
export interface InputTokens {
  standard: {
    background: string;
    border: string;
  };
  hover: {
    border: string;
  };
  focus: {
    border: string;
  };
  label: {
    color: string;
  };
}

/** Toggle button — a control that carries a persistent selected state. */
export interface ToggleButtonTokens {
  standard: {
    background: string;
    color: string;
    border: string;
  };
  hover: {
    background: string;
  };
  selected: {
    background: string;
    color: string;
    border: string;
  };
  selectedHover: {
    background: string;
  };
}

/** Switch — thumb plus the two track states. */
export interface SwitchTokens {
  /** Track color when off. */
  track: string;
  /** Track color when on. */
  trackChecked: string;
  /** The sliding knob (stays high-contrast in both schemes). */
  thumb: string;
}

/** One color's chip styling: body + icons, per interaction state. */
export interface ChipVariantColors {
  body: {
    standard: { background: string; color: string; border: string };
    hover: { background: string; color: string; border: string };
  };
  icon: {
    standard: { color: string };
    hover: { color: string };
  };
}

/** Chip — filled / outlined, each available in primary / secondary. */
export interface ChipTokens {
  filled: { primary: ChipVariantColors; secondary: ChipVariantColors };
  outlined: { primary: ChipVariantColors; secondary: ChipVariantColors };
}

export interface ComponentTokens {
  button: ButtonTokens;
  input: InputTokens;
  toggleButton: ToggleButtonTokens;
  switch: SwitchTokens;
  chip: ChipTokens;
}

/** Build every component token for a given scheme from its semantic roles. */
const buildComponentTokens = (s: SemanticColors): ComponentTokens => ({
  button: {
    contained: {
      primary: {
        standard: {
          background: s.background?.accent?.cerulean?.subtle?.rested,
          color: s.text?.neutral,
        },
        hover: {
          background: s.background?.accent?.cerulean?.subtle?.hover,
          color: s.text?.contrast,
        },
        disabled: {
          background: s.background?.disabled?.bold,
          color: s.text?.disabled,
        },
      },
      secondary: {
        standard: {
          background: s.background?.accent?.sand?.subtle?.rested,
          color: s.text?.neutral,
        },
        hover: {
          background: s.background?.accent?.sand?.subtle?.hover,
          color: s.text?.contrast,
        },
        disabled: {
          background: s.background?.disabled?.bold,
          color: s.text?.disabled,
        },
      },
    },
    outlined: {
      primary: {
        standard: {
          background: s.background?.accent?.neutral?.subtlest?.rested,
          color: s.text?.cerulean,
          border: s.border?.cerulean,
        },
        hover: {
          background: s.background?.accent?.neutral?.subtlest?.hover,
          color: s.text?.cerulean,
          border: s.border?.cerulean,
        },
        disabled: {
          background: s.background?.accent?.neutral?.subtlest?.rested,
          color: s.text?.disabled,
          border: s.border?.disabled,
        },
      },
      secondary: {
        standard: {
          background: s.background?.accent?.neutral?.subtlest?.rested,
          color: s.text?.sand,
          border: s.border?.sand,
        },
        hover: {
          background: s.background?.accent?.neutral?.subtlest?.hover,
          color: s.text?.sand,
          border: s.border?.sand,
        },
        disabled: {
          background: s.background?.accent?.neutral?.subtlest?.rested,
          color: s.text?.disabled,
          border: s.border?.disabled,
        },
      },
    },
    underlined: {
      primary: {
        standard: { background: "transparent", color: s.text?.cerulean },
        hover: {
          background: s.background?.accent?.cerulean?.subtler?.hover,
          color: s.text?.cerulean,
        },
        disabled: { background: "transparent", color: s.text?.disabled },
      },
      secondary: {
        standard: { background: "transparent", color: s.text?.sand },
        hover: {
          background: s.background?.accent?.sand?.subtler?.hover,
          color: s.text?.sand,
        },
        disabled: { background: "transparent", color: s.text?.disabled },
      },
    },
  },
  /* input: {
    standard: { background: s.background.paper, border: s.border },
    hover: { border: s.primary.main },
    focus: { border: s.primary.accent },
    label: { color: s.text.secondary },
  },
  toggleButton: {
    standard: {
      background: "transparent",
      color: s.text.secondary,
      border: s.border,
    },
    hover: { background: s.action.hover },
    selected: {
      background: s.primary.subtle,
      color: s.primary.main,
      border: s.primary.accent,
    },
    selectedHover: { background: s.primary.subtleHover },
  },
  switch: {
    track: s.border,
    trackChecked: s.primary.accent,
    thumb: s.primary.contrastText,
  }, */
  chip: {
    filled: {
      primary: {
        body: {
          standard: {
            background: s.background?.accent?.cerulean?.bolder?.rested,
            color: s.text?.contrast,
          },
          hover: {
            background: s.background?.accent?.cerulean?.bolder?.hover,
            color: s.text?.contrast,
          },
        },
        icon: {
          standard: { color: s.text?.contrast },
          hover: { color: s.text?.contrast },
        },
      },
      secondary: {
        body: {
          standard: {
            background: s.background?.accent?.sand?.subtle?.rested,
            color: s.text?.neutral,
          },
          hover: {
            background: s.background?.accent?.sand?.subtle?.hover,
            color: s.text?.neutral,
          },
        },
        icon: {
          standard: { color: s.text?.contrast },
          hover: { color: s.text?.contrast },
        },
      },
    },
    outlined: {
      primary: {
        body: {
          standard: {
            background: s.background?.accent?.cerulean?.subtlest?.rested,
            color: s.text?.cerulean,
            border: s.border?.cerulean,
          },
          hover: {
            background: s.background?.accent?.cerulean?.subtlest?.hover,
            color: s.text?.cerulean,
            border: s.border?.cerulean,
          },
        },
        icon: {
          standard: { color: s.text?.cerulean },
          hover: { color: s.text?.cerulean },
        },
      },
      secondary: {
        body: {
          standard: {
            background: s.background?.accent?.sand?.subtlest?.rested,
            color: s.text?.sand,
            border: s.border?.sand,
          },
          hover: {
            background: s.background?.accent?.sand?.subtlest?.hover,
            color: s.text?.sand,
            border: s.border?.sand,
          },
        },
        icon: {
          standard: { color: s.text?.sand },
          hover: { color: s.text?.sand },
        },
      },
    },
  },
});

export const lightComponentTokens = buildComponentTokens(lightSemantic);
export const darkComponentTokens = buildComponentTokens(darkSemantic);
