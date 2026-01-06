type WebpackRule = {
  include: RegExp[];
  exclude: RegExp;
  type: 'asset/resource';
};

type ConfigureWebpackResult = {
  module: {
    rules: WebpackRule[];
  };
};

type Plugin = {
  name: string;
  configureWebpack: () => ConfigureWebpackResult;
};

const ASSET_INCLUDE = [/[/\\]assets[/\\]/];
const DEFAULT_EXCLUDE = /\.(js|jsx|ts|tsx|json|md|mdx)$/i;

export default function docusaurusDownloadAssetsPlugin(): Plugin {
  return {
    name: 'docusaurus-download-assets',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: ASSET_INCLUDE,
              exclude: DEFAULT_EXCLUDE,
              type: 'asset/resource',
            },
          ],
        },
      };
    },
  };
}
