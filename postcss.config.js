const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./src/**/*.jsx', './src/**/*.html'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
  ].filter(Boolean)
};
