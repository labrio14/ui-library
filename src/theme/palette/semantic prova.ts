import Colors from "./colors";

/**
 * Makes every property optional, recursively (at every depth). While drafting
 * you can fill `lightSemantic` / `darkSemantic` one role at a time without TS
 * complaining about the roles you haven't defined yet.
 */
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/** The full semantic vocabulary — all roles required. */
interface SemanticColorsShape {
  background: {
    accent: {
      sand: {
        subtlest: {
          rested: string;
          hover: string;
          focus: string;
        };
        subtler: { rested: string; hover: string; focus: string };
        subtle: { rested: string; hover: string; focus: string };
        bolder: { rested: string; hover: string; focus: string };
      };
      cerulean: {
        subtlest: {
          rested: string;
          hover: string;
          focus: string;
        };
        subtler: { rested: string; hover: string; focus: string };
        subtle: { rested: string; hover: string; focus: string };
        bolder: { rested: string; hover: string; focus: string };
      };
      neutral: {
        subtlest: {
          rested: string;
          hover: string;
          focus: string;
        };
        subtler: { rested: string; hover: string; focus: string };
        subtle: { rested: string; hover: string; focus: string };
        bolder: { rested: string; hover: string; focus: string };
      };
    };
    input: {
      subtle: {
        rested: string;
        hover: string;
        focus: string;
      };
    };
    selected: {
      subtle: { rested: string; hover: string; focus: string };
      bolder: { rested: string; hover: string; focus: string };
    };
    danger: {
      subtle: { rested: string; hover: string; focus: string };
    };
    warning: {
      subtle: { rested: string; hover: string; focus: string };
    };
    info: {
      subtle: { rested: string; hover: string; focus: string };
    };
    success: {
      subtle: { rested: string; hover: string; focus: string };
    };
    disabled: {
      subtle: string;
      bold: string;
    };
  };
  border: {
    sand: string;
    cerulean: string;
    neutral: string;
    disabled: string;
    danger: string;
    warning: string;
    success: string;
    info: string;
  };
  text: {
    cerulean: string;
    sand: string;
    neutral: string;
    disabled: string;
    danger: string;
    warning: string;
    success: string;
    info: string;
  };
  link: {
    neutral: string;
    pressed: string;
    visited: string;
    warning: string;
    success: string;
    info: string;
  };
  skeleton: {
    neutral: string;
    subtle: string;
  };
}

/** Same shape as {@link SemanticColorsShape}, but every element optional. */
export type SemanticColors = DeepPartial<SemanticColorsShape>;

/** Light mode: dark ink on light surfaces. */
export const lightSemantic: SemanticColors = {
  background: {
    accent: {
      sand: {
        subtlest: {
          rested: Colors.sand[50],
          hover: Colors.sand[100],
          focus: Colors.sand[200],
        },
        subtler: {
          rested: Colors.sand[200],
          hover: Colors.sand[300],
          focus: Colors.sand[400],
        },
        subtle: {
          rested: Colors.sand[400],
          hover: Colors.sand[500],
          focus: Colors.sand[600],
        },
        bolder: {
          rested: Colors.sand[700],
          hover: Colors.sand[800],
          focus: Colors.sand[950],
        },
      },
      cerulean: {
        subtlest: {
          rested: Colors.cerulean[50],
          hover: Colors.cerulean[100],
          focus: Colors.cerulean[200],
        },
        subtler: {
          rested: Colors.cerulean[200],
          hover: Colors.cerulean[300],
          focus: Colors.cerulean[400],
        },
        subtle: {
          rested: Colors.cerulean[500],
          hover: Colors.cerulean[600],
          focus: Colors.cerulean[700],
        },
        bolder: {
          rested: Colors.cerulean[700],
          hover: Colors.cerulean[800],
          focus: Colors.cerulean[950],
        },
      },
      neutral: {
        subtlest: {
          rested: Colors.gray[50],
          hover: Colors.gray[100],
          focus: Colors.gray[200],
        },
        subtler: {
          rested: Colors.gray[200],
          hover: Colors.gray[300],
          focus: Colors.gray[400],
        },
        subtle: {
          rested: Colors.gray[400],
          hover: Colors.gray[500],
          focus: Colors.gray[600],
        },
        bolder: {
          rested: Colors.gray[700],
          hover: Colors.gray[800],
          focus: Colors.gray[950],
        },
      },
    },
    input: {
      subtle: {
        rested: Colors.gray[50],
        hover: Colors.gray[100],
        focus: Colors.gray[200],
      },
    },
    selected: {
      subtle: {
        rested: Colors.cerulean[200],
        hover: Colors.cerulean[300],
        focus: Colors.cerulean[400],
      },
      bolder: {
        rested: Colors.cerulean[500],
        hover: Colors.cerulean[600],
        focus: Colors.cerulean[700],
      },
    },
    disabled: {
      subtle: Colors.gray[200],
      bold: Colors.gray[400],
    },
  },
  border: {
    sand: Colors.sand[600],
    cerulean: Colors.cerulean[600],
    neutral: Colors.gray[600],
    disabled: Colors.gray[300],
  },
  text: {
    sand: Colors.sand[600],
    cerulean: Colors.cerulean[600],
    neutral: Colors.gray[900],
    disabled: Colors.gray[300],
  },
  skeleton: {
    neutral: Colors.gray[600],
    subtle: Colors.gray[400],
  },
};

/** Dark mode: light ink on dark surfaces (accent lightened for contrast). */
export const darkSemantic: SemanticColors = {
  background: {
    accent: {
      sand: {
        subtlest: {
          rested: Colors.sand[950],
          hover: Colors.sand[800],
          focus: Colors.sand[700],
        },
        subtler: {
          rested: Colors.sand[600],
          hover: Colors.sand[500],
          focus: Colors.sand[400],
        },
        subtle: {
          rested: Colors.sand[400],
          hover: Colors.sand[300],
          focus: Colors.sand[200],
        },
        bolder: {
          rested: Colors.sand[200],
          hover: Colors.sand[100],
          focus: Colors.sand[50],
        },
      },
      cerulean: {
        subtlest: {
          rested: Colors.cerulean[950],
          hover: Colors.cerulean[800],
          focus: Colors.cerulean[700],
        },
        subtler: {
          rested: Colors.cerulean[600],
          hover: Colors.cerulean[500],
          focus: Colors.cerulean[400],
        },
        subtle: {
          rested: Colors.cerulean[400],
          hover: Colors.cerulean[300],
          focus: Colors.cerulean[200],
        },
        bolder: {
          rested: Colors.cerulean[200],
          hover: Colors.cerulean[100],
          focus: Colors.cerulean[50],
        },
      },
      neutral: {
        subtlest: {
          rested: Colors.gray[950],
          hover: Colors.gray[800],
          focus: Colors.gray[700],
        },
        subtler: {
          rested: Colors.gray[600],
          hover: Colors.gray[500],
          focus: Colors.gray[400],
        },
        subtle: {
          rested: Colors.gray[400],
          hover: Colors.gray[300],
          focus: Colors.gray[200],
        },
        bolder: {
          rested: Colors.gray[200],
          hover: Colors.gray[100],
          focus: Colors.gray[50],
        },
      },
    },
    input: {
      subtle: {
        rested: Colors.gray[950],
        hover: Colors.gray[800],
        focus: Colors.gray[700],
      },
    },
    selected: {
      subtle: {
        rested: Colors.cerulean[900],
        hover: Colors.cerulean[800],
        focus: Colors.cerulean[700],
      },
      bolder: {
        rested: Colors.cerulean[500],
        hover: Colors.cerulean[400],
        focus: Colors.cerulean[300],
      },
    },
    disabled: {
      subtle: Colors.gray[400],
      bold: Colors.gray[200],
    },
  },
  border: {
    sand: Colors.sand[600],
    cerulean: Colors.cerulean[600],
    neutral: Colors.gray[600],
    disabled: Colors.gray[300],
  },
  text: {
    sand: Colors.sand[400],
    cerulean: Colors.cerulean[400],
    neutral: Colors.gray[50],
    disabled: Colors.gray[500],
  },
  skeleton: {
    neutral: Colors.gray[600],
    subtle: Colors.gray[400],
  },
};
