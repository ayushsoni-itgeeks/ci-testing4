import { describe, it, expect } from "vitest";
import { healthPayload, SERVICE_NAME } from "../../app/lib/health";

// Representative unit test. It exercises real application code (the health
// payload that the /healthz route serves), and is the pattern to extend as the
// app grows business logic. This suite is the gate for feature → main.
describe("healthPayload", () => {
  it("reports an ok status for the service", () => {
    const payload = healthPayload(new Date("2026-01-01T00:00:00.000Z"));
    expect(payload.status).toBe("ok");
    expect(payload.service).toBe(SERVICE_NAME);
    expect(payload.ts).toBe("2026-01-01T00:00:00.000Z");
  });

  it("defaults the timestamp to a valid ISO string", () => {
    const payload = healthPayload();
    expect(payload.ts).toBe(new Date(payload.ts).toISOString());
  });
});
