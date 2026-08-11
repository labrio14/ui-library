import { useEffect } from "react";
import type { Decorator } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

import theme from "../src/theme";

type ColorScheme = "light" | "dark";

/**
 * Keeps MUI's active color scheme in sync with the Storybook toolbar.
 *
 * Unlike a multi-brand setup (one `createTheme` per brand, swapped wholesale),
 * this library ships a single theme carrying both schemes as CSS variables.
 * We never replace the theme object — we just tell MUI which scheme is active,
 * which toggles a class on the root and lets the CSS variables switch with no
 * re-render and no flash.
 */
const ColorSchemeSync = ({ scheme }: { scheme: ColorScheme }) => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(scheme);
  }, [scheme, setMode]);

  return null;
};

export const withTheme: Decorator = (StoryFn, context) => {
  const scheme = (context.globals.colorScheme ?? "light") as ColorScheme;

  return (
    <ThemeProvider theme={theme} defaultMode={scheme}>
      <CssBaseline />
      <ColorSchemeSync scheme={scheme} />
      <StoryFn />
    </ThemeProvider>
  );
};

export default withTheme;
