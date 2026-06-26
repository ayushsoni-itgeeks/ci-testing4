// Shared health-check payload, used by both the public `/healthz` route and the
// unit test. Kept tiny and dependency-free so it is safe to import anywhere.

export interface HealthStatus {
  status: "ok";
  service: string;
  ts: string;
}

export const SERVICE_NAME = "ci-testing4";

/**
 * Build the JSON body returned by the health endpoint.
 *
 * @param now - injectable clock, so the result is deterministic in tests.
 */
export function healthPayload(now: Date = new Date()): HealthStatus {
  return {
    status: "ok",
    service: SERVICE_NAME,
    ts: now.toISOString(),
  };
}
