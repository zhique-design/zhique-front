module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "@typescript-eslint/no-var-requires": [0],
    "react/function-component-definition": [0],
    "prettier/prettier": [2],
    "import/extensions": [
      2,
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    "react/prop-types": [0],
    "react/jsx-props-no-spreading": [0],
    "react/require-default-props": [0],
  },
};
