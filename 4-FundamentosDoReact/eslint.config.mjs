import globals from "globals";
import pluginJs from "@eslint/js";
import babelParser from "babel-eslint";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser, // Inclui variáveis globais do navegador
    },
    parser: babelParser, // Usa o babel-eslint como parser
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Regras básicas de estilo
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^next$" }],
      "react/jsx-uses-react": "off", // Desativa a regra para React 17+
      "react/react-in-jsx-scope": "off", // Desativa a regra para React 17+
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },
  pluginJs.configs.recommended,
  prettierConfig, // Adiciona as configurações do Prettier
];
