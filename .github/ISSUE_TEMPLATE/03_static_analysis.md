---
name: Static analysis error
about: ESLint or TypeScript reported a blocking error in the Stage 3 static analysis.
title: "[Static analysis] <rule or error code>"
labels: ["ci-failure", "static-analysis"]
---

## Summary

The Stage 3 static analysis (ESLint and TypeScript `tsc --noEmit`) reported one
or more blocking errors. Warnings (including Prettier formatting) do not block
the merge; errors do.

## Affected location

| File | Line | Column | Rule / code | Message |
| --- | ---: | ---: | --- | --- |
| `path/to/file` |  |  |  |  |

## Details

Describe the error and why it occurs. Reference the ESLint rule id or the
TypeScript error code (for example, `TS2345`).

## How to reproduce locally

```bash
npx eslint . --ext .js,.jsx,.ts,.tsx
npx tsc --noEmit
```

## Remediation

1. Fix each reported error at the indicated file, line, and column.
2. Re-run the commands above and confirm there are no errors.
3. Re-push the branch and confirm Stage 3 passes.

## References

- Workflow run:
- Report artifacts: `eslint-report.json`, `tsc.log`.

## Definition of done

- [ ] All ESLint errors resolved.
- [ ] All TypeScript errors resolved.
- [ ] CI Stage 3 reports zero blocking findings.
