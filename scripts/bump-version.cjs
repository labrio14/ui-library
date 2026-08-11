/**
 * Bump version script for monorepo (Linked Versions)
 *
 * Updates all package.json files to the same version.
 *
 * Usage:
 *   npm run version:bump patch  # 2.2.0 → 2.2.1
 *   npm run version:bump minor  # 2.2.0 → 2.3.0
 *   npm run version:bump major  # 2.2.0 → 3.0.0
 *   npm run version:bump 2.5.0  # Set specific version
 */

const fs = require("fs");
const path = require("path");

const package = "package.json";

const bumpType = process.argv[2];

if (!bumpType) {
  console.error("❌ Error: Please specify bump type or version");
  console.error("");
  console.error("Usage:");
  console.error("  npm run version:bump patch   # 2.2.0 → 2.2.1");
  console.error("  npm run version:bump minor   # 2.2.0 → 2.3.0");
  console.error("  npm run version:bump major   # 2.2.0 → 3.0.0");
  console.error("  npm run version:bump 2.5.0   # Set specific version");
  process.exit(1);
}

// Get current version from core package
const PkgPath = path.join(process.cwd(), package);
const Pkg = JSON.parse(fs.readFileSync(PkgPath, "utf8"));
const currentVersion = Pkg.version;

console.log(`Current version: ${currentVersion}`);
console.log("");

let newVersion;

// Check if specific version provided (e.g., "2.5.0")
if (/^\d+\.\d+\.\d+$/.test(bumpType)) {
  newVersion = bumpType;
  console.log(`Setting specific version: ${newVersion}`);
} else {
  // Semantic versioning bump
  const [major, minor, patch] = currentVersion.split(".").map(Number);

  switch (bumpType) {
    case "major":
      newVersion = `${major + 1}.0.0`;
      break;
    case "minor":
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case "patch":
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
    default:
      console.error(`❌ Error: Invalid bump type "${bumpType}"`);
      console.error(
        "Valid types: major, minor, patch, or a specific version (e.g., 2.5.0)",
      );
      process.exit(1);
  }

  console.log(
    `Bumping version (${bumpType}): ${currentVersion} → ${newVersion}`,
  );
}

console.log("");
console.log("Updating packages:");

// Update all packages

const oldVersion = Pkg.version;
Pkg.version = newVersion;

fs.writeFileSync(PkgPath, JSON.stringify(Pkg, null, 2) + "\n");
console.log(`  ✅ ${PkgPath}: ${oldVersion} → ${newVersion}`);

console.log("");
console.log("✅ All package versions synced to", newVersion);
console.log("");
console.log("Next steps:");
console.log("  1. Review changes: git diff");
console.log("  2. Update CHANGELOG.md");
console.log(
  '  3. Commit: git add . && git commit -m "chore: bump version to ' +
    newVersion +
    '"',
);
console.log("  4. Push and create PR");
