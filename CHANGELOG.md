# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Added `osv-scanner` and `npm audit` to CI workflow for dependency vulnerability scanning.
- Added CodeQL analysis workflow.
- Added `husky` and `lint-staged` for automatic pre-commit formatting and linting.
- Updated `agent-ruleset.json` to be compliant with the latest rules.

## [1.0.0] - 2026-02-13

### Changed

- **BREAKING**: Migrated to ESM (`type: module`). This is a breaking change requiring consumers to support ESM.
- **BREAKING**: Updated Node.js engine requirement to `>=18.18.0`.
- Added ESLint and Prettier.
- Added standard repository files (SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md).
- Added GitHub Actions CI workflow.
- Updated `package.json` with `verify` script.
- Updated `SECURITY.md` to use private reporting.
- Enforced formatting check in CI.
