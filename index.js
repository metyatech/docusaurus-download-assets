module.exports = function assetResourcePlugin() {
  return {
    name: 'docusaurus-download-assets',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              include: [/[/\\]files[/\\]/],
              exclude: /\.(js|jsx|ts|tsx|json|md|mdx)$/i,
              type: 'asset/resource',
            },
          ],
        },
      };
    },
  };
};
