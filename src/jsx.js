require('eslint-plugin-react')

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'react/display-name': [2, {ignoreTranspilerName: false}],
    'react/forbid-component-props': 2,
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': [2, {forbid: ['any']}],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx']}],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, {maximum: 1}],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-danger': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-unescaped-entities': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-render-return-value': 2,
    'react/no-set-state': 2,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-es6-class': [2, 'never'],
    'react/prefer-stateless-function': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-render-return': 2,
    'react/require-optimization': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2
  }
}
