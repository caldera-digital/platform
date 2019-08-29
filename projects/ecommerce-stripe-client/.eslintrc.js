// ESLint will yell at you until this is fixed
// https://github.com/facebook/create-react-app/issues/7529

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'node',
    'plugin:import/errors',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest', '@typescript-eslint/eslint-plugin', 'react'],
  rules: {
    'arrow-body-style': ['off'],
    'comma-dangle': ['off'],
    'class-methods-use-this': ['off'],
    'no-invalid-this': ['off'],
    'import/no-named-as-default': ['off'],
    quotes: [2, 'single'],
    semi: ['off'],
    'no-console': ['off'],
    'import/no-nodejs-modules': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-namespace': ['off'],
    'import/noextraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-sync': ['off', { allowRootLevel: true }],
    'jest/no-disabled-tests': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
  },
  globals: {
    jest: true,
  },
}
