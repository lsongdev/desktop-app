import babel    from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve  from "rollup-plugin-node-resolve";

export default {
  input: "./app/main.jsx",
  plugins: [
    resolve({
      jsnext: true,
      browser: false,
      extensions: [ '.js', '.jsx' ]
    }),
    commonjs(),
    babel()
  ],
  external: [ 'serialport', 'dsensor' ],
  output: {
    file: 'app.js',
    format: 'cjs',
    sourcemap: true
  }
};
