import babel    from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss  from 'rollup-plugin-postcss';
import resolve  from "rollup-plugin-node-resolve";

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
  input: "./app/main.jsx",
  plugins: [
    resolve({
      jsnext: true,
      browser: false,
      extensions: [ '.js', '.jsx' ]
    }),
    commonjs(),
    babel(),
    postcss({
      extensions: ['.css'],
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ]
    })
  ],
  external: [ 'serialport', 'dsensor' ],
  output: {
    file: 'app.js',
    format: 'cjs',
    sourcemap: true
  }
};
