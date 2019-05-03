/* eslint-disable import/no-commonjs */
// Mostly taken from https://github.com/phenomic/phenomic/blob/master/packages/babel-preset/src/index.js

// most of this has been inspired by
// https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app

module.exports = ({ modules } = { modules: false }) => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules,
      },
    ],
    [
      require('@babel/preset-react'),
      {
        // Will use the native built-in instead of trying to polyfill
        // behavior for any plugins that require one.
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    // Enable loose mode to use assignment instead of defineProperty
    // See discussion in https://github.com/facebook/create-react-app/issues/4263
    [
      require('@babel/plugin-proposal-class-properties'),
      {
        loose: true,
      },
    ],
    // The following two plugins use Object.assign directly, instead of Babel's
    // extends helper. Note that this assumes `Object.assign` is available.
    // { ...todo, completed: true }
    [
      require('@babel/plugin-proposal-object-rest-spread'),
      {
        useBuiltIns: true,
      },
    ],
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [
      require('@babel/plugin-transform-runtime'),
      {
        corejs: false,
        helpers: false,
        regenerator: true,
        useESModules: true,
      },
    ],
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            // Remove PropTypes from production build
            require('babel-plugin-transform-react-remove-prop-types'),
            {
              removeImport: true,
            },
          ],
        ]
      : []),
    // Adds syntax support for import()
    require('@babel/plugin-syntax-dynamic-import'),
    require('babel-plugin-inline-react-svg'),
  ],
})
