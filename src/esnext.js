const config = require('./')

config.env.es6 = true

config.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
}

config.ecmaFeatures = {
  arrowFunctions: true,
  binaryLiterals: false,
  blockBindings: true,
  classes: true,
  defaultParams: true,
  destructuring: true,
  experimentalObjectRestSpread: true,
  forOf: true,
  generators: true,
  globalReturn: false,
  objectLiteralComputedProperties: true,
  objectLiteralDuplicateProperties: false,
  objectLiteralShorthandMethods: true,
  objectLiteralShorthandProperties: true,
  octalLiterals: false,
  regexUFlag: true,
  regexYFlrag: true,
  restParams: true,
  spread: true,
  superInFunctions: true,
  templateString: true,
  unicodeCodePointEscape: true
}

config.rules['arrow-body-style'] = [2, 'as-needed']
config.rules['arrow-parens'] = [2, 'as-needed']
config.rules['arrow-spacing'] = [2, {after: true, before: true}]
config.rules['constructor-super'] = 2
config.rules['func-style'] = [2, 'expression', {allowArrowFunctions: true}]
config.rules['generator-star-spacing'] = [2, {after: true, before: false}]
config.rules['no-arrow-condition'] = 0
config.rules['no-class-assign'] = 2
config.rules['no-confusing-arrow'] = 0
config.rules['no-const-assign'] = 2
config.rules['no-dupe-class-members'] = 2
config.rules['no-duplicate-imports'] = 2
config.rules['no-new-symbol'] = 2
config.rules['no-restricted-imports'] = 0
config.rules['no-this-before-super'] = 2
config.rules['no-useless-constructor'] = 2
config.rules['no-useless-rename'] = 2
config.rules['no-var'] = 2
config.rules['object-shorthand'] = 2
config.rules['prefer-arrow-callback'] = 2
config.rules['prefer-const'] = 2
config.rules['prefer-reflect'] = 2
config.rules['prefer-rest-params'] = 2
config.rules['prefer-spread'] = 2
config.rules['prefer-template'] = 2
config.rules['require-yield'] = 2
config.rules['sort-imports'] = 0
config.rules['template-curly-spacing'] = 2
config.rules['yield-star-spacing'] = [2, 'after']

module.exports = config
