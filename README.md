# @metyatech/docusaurus-download-assets

A Docusaurus plugin that makes attachments under `docs/**/assets/` downloadable from MDX/Markdown via `require()` / `import`.

This plugin adds a webpack `asset/resource` rule and emits those assets to the build output.

## Setup

### Installation

```bash
npm i @metyatech/docusaurus-download-assets
```

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

## Security

See [SECURITY.md](SECURITY.md) for details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## License

MIT
