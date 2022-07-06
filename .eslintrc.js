// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   rules: {
//     "no-console": ["error"],
//     "no-debugger": 1,
//   },
// };

module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  rules: {
    // "no-console": "error",
    // "no-debugger": "error",
  },
};
