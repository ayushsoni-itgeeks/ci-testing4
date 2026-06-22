---
name: Secret or credential detected
about: A secret, credential, private key, or committed environment file was found by the Stage 1 secret scan.
title: "[Secrets] <short description of the finding>"
labels: ["ci-failure", "security", "secrets"]
---

## Summary

The Stage 1 secret scan (Gitleaks, TruffleHog, committed `.env` and private-key
checks) detected a secret or credential. Secrets must never be present in the
repository, including in historical commits, because git history is fully
recoverable.

## Affected location

| File | Line | Rule / type | Commit |
| --- | ---: | --- | --- |
| `path/to/file` |  |  |  |

## What was detected

Describe the credential type (API key, connection string, private key, committed
`.env`, etc.) and which scanner reported it.

## Remediation

1. Remove the secret from the working tree and from git history (amend the
   introducing commit if it is the tip, or use `git filter-repo` for older
   commits).
2. Rotate or revoke the exposed credential immediately. Treat any value that has
   been pushed to the remote as compromised.
3. Ensure the path is covered by `.gitignore` so it cannot be re-committed.
4. Re-push the branch and confirm Stage 1 reports zero findings.

## References

- Workflow run:
- The Annotations tab on the pull request shows the exact file, line, and commit.

## Definition of done

- [ ] Secret removed from the working tree and from git history.
- [ ] Affected credential rotated or revoked.
- [ ] Path added to `.gitignore`.
- [ ] CI Stage 1 reports zero findings.
