# @metyatech/docusaurus-download-assets

Docusaurus の `docs/**/assets/` 配下に置いた付属ファイル（zip/html/txt/pdf 等）を、MDX/Markdown から `require()` / `import` で参照してダウンロードできるようにするためのプラグインです。

このプラグインは **webpack の `asset/resource`** 設定を追加し、`assets/` 配下の任意ファイルをバンドル出力へ含めます。

## Install

```bash
npm i @metyatech/docusaurus-download-assets
```

## Usage

`docusaurus.config.ts` に追加します。

```ts
// docusaurus.config.ts
const config = {
  plugins: [
    '@metyatech/docusaurus-download-assets',
  ],
};
export default config;
```

ドキュメントページは次の構成にします。

```
docs/<chapter>/<slug>/
  index.mdx
  assets/
    sample.zip
```

ページ側で `require()` して `href` に渡します（`download` 属性を付けるとファイル名が保持されます）。

```mdx
<a href={require('./assets/sample.zip')} download="sample.zip">sample.zip をダウンロード</a>
```

## Notes

- このプラグインは `assets/`（互換: `files/`）配下のみを対象にします。
- `js/ts/md/mdx/json` は対象外です（通常どおりDocusaurus/webpackの処理に任せます）。
