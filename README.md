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

- `npm run build`: Build the project
- `npm test`: Run tests
- `npm run lint`: Run ESLint
- `npm run format`: Format the codebase with Prettier
- `npm run verify`: Run all checks (lint, format, build, test)
- `npm run clean`: Remove generated files

## AGENTS.md

This project uses `agent-rules` and `agent-rules-tools` as git submodules.
After cloning, initialize submodules:

```bash
git submodule update --init --recursive
```

Update `agent-ruleset.json` as needed and regenerate:

```bash
node agent-rules-tools/tools/compose-agents.cjs
```

## Environment Variables/Settings

None.

## Release/Deploy

```bash
npm publish
```

## Notes

- Only `assets/` is supported.
- `js/ts/md/mdx/json` are excluded (handled by Docusaurus/webpack as usual).
