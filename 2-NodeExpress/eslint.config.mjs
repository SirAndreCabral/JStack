import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      // Regras básicas de estilo
      "semi": ["error", "always"], 
      "quotes": ["error", "double"], 
      "indent": ["error", 2], 
      "comma-dangle": ["error", "always-multiline"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^next$" }],
    },
  },
  pluginJs.configs.recommended, 
];