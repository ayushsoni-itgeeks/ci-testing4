---
name: Static analysis error
about: ESLint or TypeScript reported a blocking error (Stage 3).
title: "[Static analysis] "
labels: ["ci-failure", "static-analysis"]
---

## What failed
ESLint or TypeScript reported a blocking error.

## Details
- File / line / column:
- Rule or error code:
- Message:

## How to fix
- Fix the error at the reported location.
- Run `npx eslint .` and `npx tsc --noEmit` locally to confirm.
