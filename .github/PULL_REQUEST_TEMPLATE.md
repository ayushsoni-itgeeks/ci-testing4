<!--
  Target the right base branch:
    feature → main        full gate: secrets · deps · static · unit tests · build
    main → staging         lean gate: secrets · deps · build · smoke   (then preview deploy verify)
    staging → production   lean gate: secrets · deps · build · smoke   (then live deploy verify)
-->

## Summary

<!-- What does this PR do, and why? -->

## Related issues

<!-- e.g. Closes #123 -->

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor / chore
- [ ] CI / tooling
- [ ] Docs

## Checklist

- [ ] I ran `npm run lint` and `npm run typecheck` locally.
- [ ] I ran `npm test` (unit) locally and it passes.
- [ ] For behavior changes: I added or updated tests.
- [ ] I did **not** commit secrets, `.env` files, or private keys.
- [ ] `npm run build` succeeds.

## Verification

<!-- How did you verify this works? Commands run, screenshots, smoke results. -->
