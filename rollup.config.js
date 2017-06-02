import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const info = require('./package.json')

const config = {
  entry: 'src/layzr.js',
  plugins: [
    resolve(),
    babel(),
    uglify({}, minify)
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'Layzr'
    },
    {
      dest: 'dist/layzr.min.js',
      format: 'umd',
      moduleName: 'Layzr'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
