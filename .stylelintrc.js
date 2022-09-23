module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['node_modules'],
  overrides: [
    {
      files: 'src/**/*.{ts,tsx}',
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
}
