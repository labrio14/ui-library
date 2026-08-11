import { createTheme } from "@mui/material/styles";

// Side-effect import: registers this library's MUI module augmentations.
import "./types";

import breakpoints from "./breakpoints";
import components from "./components";
import { darkPalette, lightPalette } from "./palette";
import typography from "./typography";
import "./font.css";

/**
 * The design system theme.
 *
 * A single theme carrying both color schemes. MUI generates CSS variables for
 * each scheme and switches by toggling a class on the root element, so dark
 * mode has no re-render and no first-paint flash (SSR-safe).
 *
 * Consumers wrap their app in a single provider:
 *
 *   import { ThemeProvider, CssBaseline } from "@mui/material";
 *   import theme from "@labrio/ui/theme";
 *
 *   <ThemeProvider theme={theme} defaultMode="system">
 *     <CssBaseline />
 *     <App />
 *   </ThemeProvider>
 *
 * and switch schemes with MUI's `useColorScheme()` hook.
 */
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography,
  breakpoints,
  components,
});

export default theme;
