const purgecss =
  process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: [
            './src/pages/**/*.{ts,tsx}',
            './src/components/**/*.{ts,tsx}',
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelist: ['html', 'body'],
        },
      }
    : {};

module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-nested': {},
    'postcss-preset-env': { stage: 1 },
    autoprefixer: {},
    ...purgecss,
  },
};
