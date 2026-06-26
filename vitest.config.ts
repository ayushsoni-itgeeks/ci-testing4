import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// Two isolated test suites, selected on the command line with `--project <name>`:
//
//   • unit  — fast, hermetic logic tests. Gates feature → main (full code-quality
//             gate). Run with `npm test`.
//   • smoke — coarse "does the release candidate work" checks. Gates the promotion
//             PRs (main → staging, staging → production) and verifies the live
//             DigitalOcean deployments. Run with `npm run test:smoke`.
//
// Keeping them in separate projects is what lets `main` run only unit tests while
// staging/production run only smoke tests, with no overlap.
export default defineConfig({
  test: {
    projects: [
      {
        plugins: [tsconfigPaths()],
        test: {
          name: "unit",
          environment: "jsdom",
          include: [
            "tests/unit/**/*.{test,spec}.{ts,tsx}",
            "app/**/*.{test,spec}.{ts,tsx}",
          ],
        },
      },
      {
        test: {
          name: "smoke",
          environment: "node",
          include: ["tests/smoke/**/*.smoke.test.ts"],
          // Build artifact checks shell out to `node`; live checks make network
          // calls to a freshly-deployed app — both need generous timeouts.
          testTimeout: 120_000,
          hookTimeout: 120_000,
        },
      },
    ],
  },
});
