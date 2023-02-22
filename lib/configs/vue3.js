const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended'
  ],
  rules: {
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-named-as-default': 'off'
  }
};
