# @metyatech/docusaurus-download-assets

![CI](https://github.com/metyatech/docusaurus-download-assets/actions/workflows/ci.yml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@metyatech/docusaurus-download-assets)
![License](https://img.shields.io/npm/l/@metyatech/docusaurus-download-assets)

A Docusaurus plugin that makes attachments under `docs/**/assets/` downloadable from MDX/Markdown via `require()` / `import`.

This plugin adds a webpack `asset/resource` rule and emits those assets to the build output.

## Setup

### Installation

```bash
npm i @metyatech/docusaurus-download-assets
```

> **Note:** Since version 1.0.0, this package is ESM-only. Ensure your Docusaurus project (and any consumers) supports ESM resolution.

## Migration from 0.1.x

Version 1.0.0 is a major update that migrates the package to ESM-only.

1. **Docusaurus Config:** If you are using `docusaurus.config.js`, rename it to `docusaurus.config.mjs` or `docusaurus.config.ts`. ESM packages cannot be `require()`d in CommonJS files.
2. **Imports:** Use `import` instead of `require()` if you are using the plugin in TypeScript/ESM files.
3. **Version Requirements:** Ensure you are using Node.js 18.18.0 or later and Docusaurus v3.0 or later (for full ESM support).

## Usage

Add the plugin to `docusaurus.config.ts`.

```ts
// docusaurus.config.ts
const config = {
  plugins: ['@metyatech/docusaurus-download-assets'],
};
export default config;
```

Use the following structure.

```
docs/<chapter>/<slug>/
  index.mdx
  assets/
    sample.zip
```

Then `require()` the asset and pass it to `href`. Add `download` to preserve the filename.

```mdx
<a href={require('./assets/sample.zip')} download="sample.zip">
  Download sample.zip
</a>
```

## Development Commands

- `npm run build`: Build the project.
- `npm run test`: Run tests.
- `npm run lint`: Lint the code.
- `npm run format`: Format the code.
- `npm run verify`: Run all checks.
- `npm run clean`: Remove generated files.

## Release/Publish

Releases are automated via GitHub Actions using [Release Please](https://github.com/google-github-actions/release-please-action).

When features or fixes are merged to `master`, Release Please creates a Pull Request that updates the version and changelog. Merging this PR triggers the release and publishes to npm.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for details.

## Security

See [SECURITY.md](SECURITY.md) for details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## License

[MIT](LICENSE)
