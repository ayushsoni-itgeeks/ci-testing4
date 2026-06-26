import { describe, it, expect } from "vitest";

// Live deployment smoke test.
//
// Runs only when SMOKE_URL is set — the post-deploy verify workflows set it to
// the DigitalOcean preview (staging) or live (production) URL. Locally and in the
// PR gates SMOKE_URL is unset, so the whole suite is skipped; `npm run test:smoke`
// then only runs the build-artifact checks.
//
// `process` is declared locally (rather than relying on @types/node globals,
// which this project's tsconfig intentionally omits from `types`).
declare const process: { env: Record<string, string | undefined> };

const base = process.env.SMOKE_URL?.replace(/\/+$/, "");

describe.skipIf(!base)("live deployment", () => {
  it("GET /healthz returns 200 with an ok status", async () => {
    const res = await fetch(`${base}/healthz`, {
      headers: { accept: "application/json" },
    });
    expect(res.status, `unexpected status from ${base}/healthz`).toBe(200);

    const body = (await res.json()) as { status?: string; service?: string };
    expect(body.status).toBe("ok");
  });
});
