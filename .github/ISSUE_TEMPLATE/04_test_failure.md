---
name: Failing unit test
about: One or more Vitest unit tests failed in Stage 4.
title: "[Tests] <failing test or suite>"
labels: ["ci-failure", "tests"]
---

## Summary

The Stage 4 unit test run (Vitest) reported one or more failing tests. All tests
must pass before the merge is allowed.

## Failing tests

| File | Line | Suite | Test | Error |
| --- | ---: | --- | --- | --- |
| `path/to/test` |  |  |  |  |

## Details

Summarise the assertion or runtime error. If zero tests ran, the suite likely
failed to import or compile; check the run log for the underlying error.

## How to reproduce locally

```bash
npx vitest run --reporter=verbose
```

## Remediation

1. Reproduce the failure locally using the command above.
2. Fix the code under test, or correct the test if the expectation is wrong.
3. Confirm the full suite passes locally.
4. Re-push the branch and confirm Stage 4 passes.

## References

- Workflow run:
- Report artifacts: `vitest-results.json`, `vitest.log`.

## Definition of done

- [ ] Root cause identified.
- [ ] All unit tests pass locally and in CI.
- [ ] CI Stage 4 reports zero failures.
