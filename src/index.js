module.exports = {
  env: {
    node: true
  },
  plugins: [
    'no-use-extend-native',
    'xo'
  ],
  rules: {
    'accessor-pairs': 2,
    'array-bracket-spacing': [2, 'never'],
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', {allowSingleLine: false}],
    'callback-return': 2,
    camelcase: 2,
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      after: true,
      before: false
    }],
    'comma-style': 0,
    complexity: [2, 7],
    'computed-property-spacing': 2,
    'consistent-return': 0,
    'consistent-this': [2, 'self'],
    curly: 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    eqeqeq: 2,
    'eol-last': 2,
    'func-names': 0,
    'func-style': [2, 'declaration'],
    'global-require': 2,
    'guard-for-in': 2,
    'handle-callback-err': 2,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    indent: [2, 2, {SwitchCase: 1, VariableDeclarator: 2}],
    'init-declarations': 0,
    'key-spacing': [2, {
      afterColon: true,
      beforeColon: false
    }],
    'keyword-spacing': [2, {"after": true, "before": true}],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0,
    'max-depth': 2,
    'max-len': [2, 120, 2],
    'max-lines': 0,
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 7],
    'max-statements': 0,
    'max-statements-per-line': [2, {max: 1}],
    'new-cap': [2, {
      capIsNew: true,
      capIsNewExceptions: ['List', 'Map'],
      newIsCap: true
    }],
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-before-return': 2,
    'newline-per-chained-call': [2, {ignoreChainWithDepth: 2}],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 2,
    'no-cond-assign': [2, 'always'],
    'no-console': 0,
    'no-constant-condition': 2,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': [2, 'all'],
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': [2, {boolean: false, number: true, string: true}],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-mixed-operators': 2,
    'no-mixed-requires': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-native-reassign': 2,
    'no-negated-condition': 0,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-path-concat': 2,
    'no-plusplus': 0,
    'no-process-env': 2,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-globals': 0,
    'no-restricted-modules': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-use-extend-native/no-use-extend-native': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': [2, {
      location: 'anywhere',
      terms: [
        'fixme',
        'todo',
        'xxx'
      ]
    }],
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'object-curly-newline': 0,
    'object-curly-spacing': 2,
    'object-property-newline': 0,
    'one-var': [2, {let: 'always', var: 'always'}],
    'one-var-declaration-per-line': [2, 'initializations'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single'],
    radix: 2,
    'require-jsdoc': 0,
    semi: [2, 'never'],
    'semi-spacing': [2, {
      after: true,
      before: false
    }],
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      nonwords: false,
      words: true
    }],
    'spaced-comment': [2, 'always'],
    strict: [0],
    'unicode-bom': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      requireParamDescription: true,
      requireReturn: false,
      requireReturnDescription: true
    }],
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'outside'],
    'wrap-regex': 2,
    'xo/catch-error-name': 0,
    'xo/filename-case': [2, {case: 'kebabCase'}],
    'xo/no-process-exit': 2,
    'xo/throw-new-error': 2,
    yoda: [2, 'never']
  }
}
