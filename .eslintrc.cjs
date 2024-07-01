module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
   ],
   overrides: [
      {
         env: {
            node: true,
         },
         files: [".eslintrc.{js,cjs}"],
         parserOptions: {
            sourceType: "script",
         },
      },
   ],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["@typescript-eslint", "react"],
   rules: {
      indent: ["warn", 3, { SwitchCase: 1 }],
      "linebreak-style": ["warn", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": "off",
   },
};
