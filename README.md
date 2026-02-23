# @metyatech/docusaurus-download-assets

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

## How it works

The plugin registers a `configureWebpack` hook that inserts the following webpack module rule:

| Field     | Value                                                |
| --------- | ---------------------------------------------------- |
| `include` | Paths containing `/assets/` or `\assets\`            |
| `exclude` | `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.md`, `.mdx` |
| `type`    | `asset/resource`                                     |

Webpack emits matched files to the output directory with content-hashed filenames and exposes their public URLs for use in `require()` / `import` statements.

## Available options

This plugin takes no configuration options. Call it without arguments:

```ts
plugins: ['@metyatech/docusaurus-download-assets'],
```

## Development Commands

| Command                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `npm run build`        | Compile TypeScript to `dist/`                           |
| `npm run clean`        | Remove `dist/` and `dist-test/`                         |
| `npm test`             | Build, compile tests, and run Node built-in test runner |
| `npm run lint`         | Run ESLint                                              |
| `npm run format`       | Format source with Prettier                             |
| `npm run format:check` | Check formatting without writing                        |
| `npm run verify`       | format:check + lint + test (used in CI)                 |

## Release/Publish

To publish a new version:

1. Update the version in `package.json`.
2. Update `CHANGELOG.md`.
3. Run `npm run verify`.
4. Commit and tag the release.
5. Run `npm publish`.

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
