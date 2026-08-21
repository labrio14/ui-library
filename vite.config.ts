/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
import path, { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import dts from "vite-plugin-dts";

// Vite 8 exposes this natively in ESM config files.
const dirname = import.meta.dirname;

/**
 * Match every runtime dependency so it stays *external* — NOT bundled into the
 * library. Consumers provide React/MUI/Emotion from their own install, avoiding
 * duplicate copies. Matches the bare name (`@mui/material`) and any subpath
 * (`@mui/material/Button`). Replaces `vite-plugin-externalize-deps`, which does
 * not yet support Vite 8.
 */
function externalDeps(): (id: string) => boolean {
  const pkg = JSON.parse(
    readFileSync(resolve(dirname, "package.json"), "utf-8"),
  ) as {
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
  };

  const names = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ];

  return (id: string) =>
    names.some((name) => id === name || id.startsWith(`${name}/`));
}

// Plugin to add 'use client' directive to component files
function addUseClientDirective(): Plugin {
  return {
    name: "add-use-client-directive",
    generateBundle(_options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        // Only process .js files in components directories
        if (
          chunk.type === "chunk" &&
          fileName.endsWith(".js") &&
          (fileName.includes("components/atoms/") ||
            fileName.includes("components/molecules/"))
        ) {
          // Skip index files and files that already have the directive
          if (
            !fileName.endsWith("/index.js") &&
            !chunk.code.startsWith("'use client'")
          ) {
            chunk.code = `'use client';\n${chunk.code}`;
          }
        }
      }
    },
  };
}

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    addUseClientDirective(),
    dts({
      // v5 renamed `rollupTypes` → `bundleTypes`; default false keeps one .d.ts
      // per module, matching `preserveModules` below.
      tsconfigPath: "./tsconfig.app.json",
      // Stories are dev-only — keep them out of the published package.
      exclude: ["**/*.stories.tsx"],
    }),
  ],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
  build: {
    sourcemap: true,
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(dirname, "src/index.ts"),
        "components/atoms/index": resolve(
          dirname,
          "src/components/atoms/index.ts",
        ),
        "components/molecules/index": resolve(
          dirname,
          "src/components/molecules/index.ts",
        ),
        "theme/index": resolve(dirname, "src/theme/index.ts"),
      },
      name: "Labrio-ui-lib",
      formats: ["es"],
    },
    rollupOptions: {
      external: externalDeps(),
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        entryFileNames: "[name].js",
      },
    },
  },
});
