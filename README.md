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
  plugins: [
    '@metyatech/docusaurus-download-assets',
  ],
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
<a href={require('./assets/sample.zip')} download="sample.zip">Download sample.zip</a>
```

## Development Commands

- `npm run build`: build
- `npm test`: build + tests
- `npm run clean`: remove generated files

## AGENTS.md

This project uses `agent-rules` as a git submodule.
Update `agent-ruleset.json` as needed and regenerate:

```bash
node agent-rules/tools/compose-agents.cjs
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
