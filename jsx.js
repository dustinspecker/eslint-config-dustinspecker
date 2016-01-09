'use strict';
var config = require('./esnext');

config.ecmaFeatures.jsx = true;

config.env.browser = true;

config.rules['func-style'] = [2, 'declaration', {allowArrowFunctions: true}];
config.rules['jsx-quotes'] = [2, 'prefer-single'];
config.rules['new-cap'] = [2, {capIsNewExceptions: ['List', 'Map']}];
config.rules['react/display-name'] = [2, {acceptTranspilerName: true}];
config.rules['react/forbid-prop-types'] = [2, {forbid: ['any']}];
config.rules['react/jsx-boolean-value'] = [2, 'never'];
config.rules['react/jsx-closing-bracket-location'] = [2, 'line-aligned'];
config.rules['react/jsx-curly-spacing'] = [2, 'never'];
config.rules['react/jsx-handler-names'] = [2, {
  eventHandlerPrefix: 'handle',
  eventHandlerPropPrefix: 'on'
}];
config.rules['react/jsx-indent'] = [2, 2];
config.rules['react/jsx-indent-props'] = [2, 2];
config.rules['react/jsx-key'] = 2;
config.rules['react/jsx-max-props-per-line'] = [2, {maximum: 1}];
config.rules['react/jsx-no-bind'] = 2;
config.rules['react/jsx-no-duplicate-props'] = 2;
config.rules['react/jsx-no-literals'] = 2;
config.rules['react/jsx-no-undef'] = 2;
config.rules['react/jsx-pascal-case'] = 2;
config.rules['react/jsx-sort-prop-types'] = 2;
config.rules['react/jsx-sort-props'] = 2;
config.rules['react/jsx-uses-react'] = 2;
config.rules['react/jsx-uses-vars'] = 2;
config.rules['react/no-danger'] = 2;
config.rules['react/no-deprecated'] = 2;
config.rules['react/no-did-mount-set-state'] = 2;
config.rules['react/no-did-update-set-state'] = 2;
config.rules['react/no-direct-mutation-state'] = 2;
config.rules['react/no-is-mounted'] = 2;
config.rules['react/no-multi-comp'] = 2;
config.rules['react/no-set-state'] = 2;
config.rules['react/no-string-refs'] = 2;
config.rules['react/no-unknown-property'] = 2;
config.rules['react/prefer-es6-class'] = [2, 'never'];
config.rules['react/prop-types'] = 2;
config.rules['react/react-in-jsx-scope'] = 2;
config.rules['react/require-extension'] = [2, {extensions: ['.js', '.jsx']}];
config.rules['react/self-closing-comp'] = 2;
config.rules['react/sort-comp'] = 2;
config.rules['react/wrap-multilines'] = [2, {assignment: false, declaration: false, return: false}];
config.rules.semi = [2, 'never'];

module.exports = config;
