---
name: Secret detected
about: A secret, credential, or .env file was found by the secret scan (Stage 1).
title: "[Secrets] "
labels: ["ci-failure", "secrets", "security"]
---

## What failed
The secret scan found a credential in the code or git history.

> ⚠️ Treat the exposed credential as compromised: **rotate / revoke it immediately**, then remove it from the working tree and from git history.

## Details
- Type (API key, token, .env, private key):
- File / line:
- Commit:

## Remediation
- [ ] Credential rotated / revoked
- [ ] Secret removed from the working tree and covered by `.gitignore`
