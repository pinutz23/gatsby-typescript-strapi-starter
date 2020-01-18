// https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
module.exports = {
  'extends': [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "prettier/prettier": "error"
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
}