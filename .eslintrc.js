module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
