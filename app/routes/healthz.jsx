import { healthPayload } from "../lib/health";

// Public, unauthenticated health endpoint.
//
// It deliberately lives OUTSIDE the `app.*` route tree (which requires a Shopify
// embedded session), so it is reachable without authentication. It is the target
// for:
//   • the DigitalOcean App Platform health check, and
//   • the post-deploy live smoke tests (tests/smoke/live.smoke.test.ts).
//
// Resource route: a `loader` with no default export, returning a raw Response.
export const loader = () => {
  return new Response(JSON.stringify(healthPayload()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
