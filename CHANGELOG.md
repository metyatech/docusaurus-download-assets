# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed

- **Security**: Resolved dependency vulnerabilities (ajv, minimatch).
- **Core**: Improved `ASSET_INCLUDE` regex to correctly match `assets/` at the start of a path.

### Added

- Added `task-tracker` for persistent task management.
- Improved test coverage for asset inclusion and exclusion logic.
- Updated `AGENTS.md` and `agent-ruleset.json` to the latest standards.

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
