import ts from "@wessberg/rollup-plugin-ts";
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import image from '@rollup/plugin-image';

const external = Object.keys(pkg.dependencies).concat(['path', 'fs', 'typescript']);

export default {
    input: 'src/index.tsx',
    plugins: [ts(), babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: ['@babel/env', '@babel/preset-react']

    }), scss(), image()],
    external,
    output: [
        { format: 'cjs', file: pkg.main },
        { format: 'esm', file: pkg.module }
    ]
};