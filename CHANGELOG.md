# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2026-03-09

### Added

- Added `author`, `homepage`, and `bugs` metadata to `package.json` for compliance.
- Added `markdownlint-cli2` and configured markdown linting.
- Updated `AGENTS.md` and `agent-ruleset.json` to the latest standards.

### Fixed

- Fixed dependency vulnerabilities (`ajv`, `minimatch`) via `npm audit fix`.

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
