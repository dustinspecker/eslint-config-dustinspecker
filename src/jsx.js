const config = require('./esnext')

config.parserOptions.ecmaFeatures = {
  jsx: true
}

config.env.browser = true

config.plugins.push('react')

config.rules['jsx-quotes'] = [2, 'prefer-single']
config.rules['react/display-name'] = [2, {ignoreTranspilerName: false}]
config.rules['react/forbid-component-props'] = 2
config.rules['react/forbid-elements'] = 0
config.rules['react/forbid-foreign-prop-types'] = 2
config.rules['react/forbid-prop-types'] = [2, {forbid: ['any']}]
config.rules['react/jsx-boolean-value'] = [2, 'never']
config.rules['react/jsx-closing-bracket-location'] = [2, 'line-aligned']
config.rules['react/jsx-curly-spacing'] = [2, 'never']
config.rules['react/jsx-equals-spacing'] = [2, 'never']
config.rules['react/jsx-filename-extension'] = [2, {extensions: ['.js', '.jsx']}]
config.rules['react/jsx-first-prop-new-line'] = [2, 'multiline']
config.rules['react/jsx-handler-names'] = [2, {
  eventHandlerPrefix: 'handle',
  eventHandlerPropPrefix: 'on'
}]
config.rules['react/jsx-indent'] = [2, 2]
config.rules['react/jsx-indent-props'] = [2, 2]
config.rules['react/jsx-key'] = 2
config.rules['react/jsx-max-props-per-line'] = [2, {maximum: 1}]
config.rules['react/jsx-no-bind'] = 2
config.rules['react/jsx-no-comment-textnodes'] = 2
config.rules['react/jsx-no-duplicate-props'] = 2
config.rules['react/jsx-no-literals'] = 2
config.rules['react/jsx-no-target-blank'] = 2
config.rules['react/jsx-no-undef'] = 2
config.rules['react/jsx-pascal-case'] = 2
config.rules['react/jsx-sort-prop-types'] = 2
config.rules['react/jsx-sort-props'] = 2
config.rules['react/jsx-space-before-closing'] = [2, 'always']
config.rules['react/jsx-tag-spacing'] = 2
config.rules['react/jsx-uses-react'] = 2
config.rules['react/jsx-uses-vars'] = 2
config.rules['react/jsx-wrap-multilines'] = 2
config.rules['react/no-array-index-key'] = 2
config.rules['react/no-children-prop'] = 2
config.rules['react/no-comment-textnodes'] = 2
config.rules['react/no-danger'] = 2
config.rules['react/no-danger-with-children'] = 2
config.rules['react/no-deprecated'] = 2
config.rules['react/no-did-mount-set-state'] = 2
config.rules['react/no-did-update-set-state'] = 2
config.rules['react/no-direct-mutation-state'] = 2
config.rules['react/no-find-dom-node'] = 2
config.rules['react/no-unescaped-entities'] = 2
config.rules['react/no-is-mounted'] = 2
config.rules['react/no-multi-comp'] = 2
config.rules['react/no-render-return-value'] = 2
config.rules['react/no-set-state'] = 2
config.rules['react/no-string-refs'] = 2
config.rules['react/no-unknown-property'] = 2
config.rules['react/no-unused-prop-types'] = 2
config.rules['react/no-will-update-set-state'] = 2
config.rules['react/prefer-es6-class'] = [2, 'never']
config.rules['react/prefer-stateless-function'] = 2
config.rules['react/prop-types'] = 2
config.rules['react/react-in-jsx-scope'] = 2
config.rules['react/require-extension'] = [2, {extensions: ['.js', '.jsx']}]
config.rules['react/require-default-props'] = 2
config.rules['react/require-render-return'] = 2
config.rules['react/require-optimization'] = 2
config.rules['react/self-closing-comp'] = 2
config.rules['react/sort-comp'] = 2
config.rules['react/sort-prop-types'] = 2
config.rules['react/style-prop-object'] = 2
config.rules['react/wrap-multilines'] = [2, {assignment: false, declaration: false, return: false}]
config.rules['react/void-dom-elements-no-children'] = 2

module.exports = config
