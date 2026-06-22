---
name: Production build failure
about: The Stage 5 production build failed.
title: "[Build] <short description of the build error>"
labels: ["ci-failure", "build"]
---

## Summary

The Stage 5 production build failed. This catches build-time breakage that the
type check cannot (bundler configuration, build-only imports, and similar).

## Affected location

| File | Line | Column | Error |
| --- | ---: | ---: | --- |
| `path/to/file` |  |  |  |

## Build error

```
Paste the relevant lines from build.log here.
```

## How to reproduce locally

```bash
npm run build
```

## Remediation

1. Reproduce the build locally using the command above.
2. Fix the reported error (import path, bundler config, missing dependency, etc.).
3. Confirm the build succeeds locally.
4. Re-push the branch and confirm Stage 5 passes.

## References

- Workflow run:
- Report artifact: `build.log` (full build output).

## Definition of done

- [ ] Production build succeeds locally and in CI.
- [ ] CI Stage 5 reports a successful build.
