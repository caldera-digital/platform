import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import svgr from '@svgr/rollup'
import builtins from 'rollup-plugin-node-builtins'
import calderaDigitalBabelPreset from '@caldera-digital/babel-preset'

// const isProd = process.env.NODE_ENV === 'production'

const globals = {
  'styled-components': 'StyledComponents',
  react: 'React',
  'react-dom': 'ReactDOM',
  // Don't package because then it will bundle into packages and we need to use the
  // same instance in memory for context for work.
  '@caldera-digital/theme': '@caldera-digital/theme',
}

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default ({ name }, input = './src/index.js') => ({
  input,
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      name,
      globals,
      sourcemap: true,
    },
    {
      file: './dist/index.module.js',
      format: 'es',
      globals,
      sourcemap: true,
    },
  ],
  plugins: [
    builtins(),
    resolve({ extensions }),
    babel({
      exclude: /node_modules/,
      extensions,
      presets: [calderaDigitalBabelPreset],
    }),
    commonjs({
      include: /node_modules/,
    }),
    json({
      compact: true,
      preferConst: true,
    }),
    svgr(),
  ],
  external: Object.keys(globals),
})
