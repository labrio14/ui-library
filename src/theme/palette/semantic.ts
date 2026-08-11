import Colors from "./colors";

/**
 * Semantic color roles — the vocabulary the design system speaks in.
 *
 * Primitives ({@link Colors}) never change between light and dark; only the
 * assignment of a primitive to a role does. Each mode is therefore a pure
 * mapping `colors → roles` with the exact same shape.
 *
 * Component tokens (see ./componentTokens) are built on top of these roles, so
 * a color decision lives here once and flows out to every component.
 */
export interface SemanticColors {
  /** Brand / interactive accent. */
  primary: {
    main: string;
    /** Emphasized state (hover / active). */
    hover: string;
    /** Text/icon color placed on top of `main`. */
    contrastText: string;
  };
  /** Neutral, lower-emphasis accent. */
  secondary: {
    main: string;
    hover: string;
    contrastText: string;
  };
  background: {
    /** App canvas. */
    default: string;
    /** Raised surfaces (cards, dialogs, menus). */
    paper: string;
    /** Filled surface of a disabled control. */
    disabled: string;
  };
  text: {
    /** High-emphasis text. */
    primary: string;
    /** Low-emphasis text. */
    secondary: string;
    /** Text/icon color of a disabled control. */
    disabled: string;
  };
  /** Outline/stroke color for controls (inputs, outlined buttons). */
  border: string;
  /** Hairline borders and separators. */
  divider: string;
  action: {
    /** Subtle background wash on hover for low-emphasis controls. */
    hover: string;
  };
}

/** Light mode: dark ink on light surfaces. */
export const lightSemantic: SemanticColors = {
  primary: {
    main: Colors.cerulean[600],
    hover: Colors.cerulean[700],
    contrastText: Colors.gray[50],
  },
  secondary: {
    main: Colors.sand[800],
    hover: Colors.sand[900],
    contrastText: Colors.gray[0],
  },
  background: {
    default: Colors.gray[50],
    paper: Colors.gray[0],
    disabled: Colors.gray[200],
  },
  text: {
    primary: Colors.gray[900],
    secondary: Colors.gray[600],
    disabled: Colors.gray[400],
  },
  border: Colors.gray[300],
  divider: Colors.gray[200],
  action: {
    hover: Colors.gray[100],
  },
};

/** Dark mode: light ink on dark surfaces (accent lightened for contrast). */
export const darkSemantic: SemanticColors = {
  primary: {
    main: Colors.cerulean[500],
    hover: Colors.cerulean[600],
    contrastText: Colors.gray[950],
  },
  secondary: {
    main: Colors.sand[300],
    hover: Colors.sand[200],
    contrastText: Colors.gray[950],
  },
  background: {
    default: Colors.gray[950],
    paper: Colors.gray[900],
    disabled: Colors.gray[800],
  },
  text: {
    primary: Colors.gray[50],
    secondary: Colors.gray[300],
    disabled: Colors.gray[600],
  },
  border: Colors.gray[700],
  divider: Colors.gray[800],
  action: {
    hover: Colors.gray[800],
  },
};
