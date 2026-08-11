import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, relative } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCAN_PATHS = ["src/components/atoms", "src/components/molecules"];

const USE_CLIENT_DIRECTIVE = "'use client';\n\n";

const PROJECT_ROOT = join(__dirname, "..");

/**
 * Check if file should have "use client" directive added
 */
function shouldAddDirective(filePath: string, content: string): boolean {
  // Only process .tsx files
  if (!filePath.endsWith(".tsx")) {
    return false;
  }

  // Skip story files
  if (filePath.endsWith(".stories.tsx")) {
    return false;
  }

  // Skip test files
  if (filePath.endsWith(".test.tsx") || filePath.endsWith(".spec.tsx")) {
    return false;
  }

  // Skip if already has "use client" directive
  if (
    content.startsWith("'use client'") ||
    content.startsWith('"use client"') ||
    content.includes("\n'use client'") ||
    content.includes('\n"use client"')
  ) {
    return false;
  }

  // Only add if file exports something (is a module)
  if (
    !content.includes("export default") &&
    !content.includes("export {") &&
    !content.includes("export const")
  ) {
    return false;
  }

  return true;
}

/**
 * Recursively scan directory and process files
 */
function scanDirectory(
  dirPath: string,
  stats: { processed: number; skipped: number; modified: number },
) {
  const entries = readdirSync(dirPath);

  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Recurse into subdirectories
      scanDirectory(fullPath, stats);
    } else if (stat.isFile()) {
      stats.processed++;

      try {
        const content = readFileSync(fullPath, "utf-8");

        if (shouldAddDirective(fullPath, content)) {
          const newContent = USE_CLIENT_DIRECTIVE + content;
          writeFileSync(fullPath, newContent, "utf-8");
          stats.modified++;

          const relativePath = relative(PROJECT_ROOT, fullPath);
          console.log(`  ✅ Added "use client" to: ${relativePath}`);
        } else {
          stats.skipped++;
        }
      } catch (error) {
        console.error(`  ❌ Error processing ${fullPath}:`, error);
      }
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Adding "use client" directives to React components...\n');

  const stats = {
    processed: 0,
    skipped: 0,
    modified: 0,
  };

  for (const scanPath of SCAN_PATHS) {
    const fullPath = join(PROJECT_ROOT, scanPath);
    console.log(`📂 Scanning: ${scanPath}`);

    try {
      scanDirectory(fullPath, stats);
    } catch (error) {
      console.error(`❌ Error scanning ${scanPath}:`, error);
    }
  }

  console.log("\n📊 Summary:");
  console.log(`  Total files processed: ${stats.processed}`);
  console.log(`  Files modified: ${stats.modified}`);
  console.log(`  Files skipped: ${stats.skipped}`);

  if (stats.modified > 0) {
    console.log('\n✅ Successfully added "use client" directives!');
  } else {
    console.log(
      "\n⚠️  No files were modified (all already have directives or were excluded)",
    );
  }
}

main();
