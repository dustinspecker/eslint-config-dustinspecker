const config = require('.')

config.env.es6 = true

config.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
}

config.rules['arrow-body-style'] = ['error', 'as-needed']
config.rules['arrow-parens'] = ['error', 'as-needed']
config.rules['arrow-spacing'] = ['error', {after: true, before: true}]
config.rules['class-methods-use-this'] = 'error'
config.rules['constructor-super'] = 'error'
config.rules['func-style'] = ['error', 'expression', {allowArrowFunctions: true}]
config.rules['generator-star-spacing'] = ['error', {after: true, before: false}]
config.rules['lines-between-class-members'] = 'off'
config.rules['no-arrow-condition'] = 'off'
config.rules['no-await-in-loop'] = 'error'
config.rules['no-class-assign'] = 'error'
config.rules['no-confusing-arrow'] = 'off'
config.rules['no-const-assign'] = 'error'
config.rules['no-dupe-class-members'] = 'error'
config.rules['no-duplicate-imports'] = 'error'
config.rules['no-new-symbol'] = 'error'
config.rules['no-restricted-imports'] = 'off'
config.rules['no-return-await'] = 'error'
config.rules['no-template-curly-in-string'] = 'error'
config.rules['no-this-before-super'] = 'error'
config.rules['no-useless-constructor'] = 'error'
config.rules['no-useless-rename'] = 'off'
config.rules['no-var'] = 'error'
config.rules['object-shorthand'] = 'error'
config.rules['prefer-arrow-callback'] = 'error'
config.rules['prefer-const'] = 'error'
config.rules['prefer-destructuring'] = 'error'
config.rules['prefer-numeric-literals'] = 'error'
config.rules['prefer-reflect'] = 'error'
config.rules['prefer-rest-params'] = 'error'
config.rules['prefer-spread'] = 'error'
config.rules['prefer-template'] = 'error'
config.rules['require-await'] = 'error'
config.rules['require-yield'] = 'error'
config.rules['rest-spread-spacing'] = 'error'
config.rules['sort-imports'] = 'off'
config.rules['symbol-description'] = 'error'
config.rules['template-curly-spacing'] = 'error'
config.rules['template-tag-spacing'] = 'error'
config.rules['yield-star-spacing'] = ['error', 'after']

module.exports = config
