module.exports = {
  overrides: [
    {
      files: ['tests/**/*.ts', '**/*.spec.ts', '**/*.spec.tsx'],
      env: {
        mocha: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'latest',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['airbnb'],
  // parserOptions: {
  //   ecmaVersion: 12,
  //   sourceType: 'module',
  // },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': 'off', // better than the alternatives in this simple project
  },
};
