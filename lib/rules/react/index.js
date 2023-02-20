module.exports = {
  extends: [
    '@eslint-config-guide/base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
