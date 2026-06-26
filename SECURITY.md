# Security Policy

## Reporting a vulnerability

**Please do not open a public issue for security vulnerabilities.**

Report privately through GitHub Security Advisories:
[**Report a vulnerability**](https://github.com/ayushsoni-itgeeks/ci-testing4/security/advisories/new)

We aim to acknowledge reports within **3 business days** and to provide a
remediation timeline after triage. Please include:

- a description of the issue and its impact,
- steps to reproduce (or a proof of concept),
- affected branch / environment (staging preview or production), and
- any suggested mitigation.

## Supported branches

| Branch | Environment | Supported |
| --- | --- | --- |
| `production` | live site (DigitalOcean) | ✅ |
| `staging` | preview (DigitalOcean) | ✅ |
| `main` | integration | ✅ |
| feature branches | — | ❌ |

## Automated safeguards

Every pull request runs a CI gate before it can merge:

- **Secret scanning** — Gitleaks + TruffleHog over full git history, plus `.env`
  and private-key detection. A finding blocks the merge.
- **Dependency & vulnerability scanning** — `npm audit` + Trivy. Critical/high
  findings block the merge.
- **Static analysis, tests, and build** must pass.

A leaked credential should be treated as compromised: **rotate it immediately**,
then remove it from history. See `.github/workflows/pr-to-main.yml` for details..
