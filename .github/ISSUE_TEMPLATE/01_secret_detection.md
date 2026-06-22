---
name: Secret detected
about: A secret, credential, or .env file was found by the secret scan (Stage 1).
title: "[Secrets] "
labels: ["ci-failure", "secrets"]
---

## What failed
The secret scan found a credential in the code or git history.

## Details
- File / line:
- Commit:
- Type (API key, token, .env, private key):

## How to fix
- Remove the secret from the working tree and git history.
- Rotate the exposed credential.
- Add the file to `.gitignore`.
