import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      react: pluginReact,
      'react-compiler': reactCompiler,
    },
  },
  {
    ignores: ['postcss.config.cjs', 'tailwind.config.js'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-compiler/react-compiler': 'error',
    },
  },
];
