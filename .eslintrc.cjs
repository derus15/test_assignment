module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: [2, 4],
    camelcase: 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'max-len': ['error', { code: 125, ignoreComments: true }],
    'no-param-reassign': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'quote-props': 'off',
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'import/order': 'off',
    'import/no-absolute-path': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'consistent-return': 'off',
  },
}