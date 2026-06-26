import { describe, it, expect } from "vitest";
import { existsSync, statSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Build-artifact smoke test (no deployment required).
//
// Confirms `npm run build` produced a deployable artifact at the expected paths:
// the server entry bundle exists and is non-empty, and the client assets
// directory was emitted with files in it. This is the smoke check that gates the
// promotion PRs (main → staging, staging → production) before merge.
//
// We deliberately do NOT import/execute the server bundle here — that runs
// top-level Shopify app init + Prisma client construction, which need real
// credentials. Real boot is verified after deployment by live.smoke.test.ts
// hitting /healthz.
//
// Paths are resolved from this file (via import.meta.url) rather than
// process.cwd(), so the suite is independent of the working directory.

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..", "..");
const serverEntry = resolve(root, "build", "server", "index.js");
const clientDir = resolve(root, "build", "client");
const hint = "run `npm run build` first";

describe("production build artifact", () => {
  it("emits a non-empty server entry bundle", () => {
    expect(existsSync(serverEntry), `missing ${serverEntry} — ${hint}`).toBe(true);
    expect(statSync(serverEntry).size).toBeGreaterThan(0);
  });

  it("emits a non-empty client assets directory", () => {
    expect(existsSync(clientDir), `missing ${clientDir} — ${hint}`).toBe(true);
    expect(statSync(clientDir).isDirectory()).toBe(true);
    expect(readdirSync(clientDir).length).toBeGreaterThan(0);
  });
});
