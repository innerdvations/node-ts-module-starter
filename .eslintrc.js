module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ['airbnb/base'],
  ignorePatterns: ['**/dist/*.js'],
  overrides: [{
    env: {
      mocha: true,
    },
    files: ['tests/**/*.ts', 'tests/**/*.tsx'],
  }],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // parserOptions: {
  //   ecmaVersion: 12,
  //   sourceType: 'module',
  // },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'linebreak-style': ['error', 'unix'],
    'no-underscore-dangle': 'off', // better than the alternatives in this simple project

  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
