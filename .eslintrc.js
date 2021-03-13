module.exports = {
    overrides: [
      {
        files: ['**/*.spec.js', '**/*.spec.jsx'],
        env: {
          mocha: true,
        },
      },
    ],
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
      'no-underscore-dangle': 'off', // better than the alternatives in this simple project
    },
  };
  