module.exports = function docusaurusDownloadAssetsPlugin() {
  return {
    name: 'docusaurus-download-assets',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: [/[/\\]assets[/\\]/],
              exclude: /\.(js|jsx|ts|tsx|json|md|mdx)$/i,
              type: 'asset/resource',
            },
          ],
        },
      };
    },
  };
};
