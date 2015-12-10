'use strict';
var config = require('./');

config.env.es6 = true;

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
  modules: true,
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
};

config.rules['arrow-body-style'] = [2, 'as-needed'];
config.rules['arrow-parens'] = [2, 'as-needed'];
config.rules['arrow-spacing'] = [2, {after: true, before: true}];
config.rules['constructor-super'] = 2;
config.rules['generator-star-spacing'] = [2, {after: true, before: false}];
config.rules['no-arrow-condition'] = 0;
config.rules['no-class-assign'] = 2;
config.rules['no-const-assign'] = 2;
config.rules['no-dupe-class-members'] = 2;
config.rules['no-this-before-super'] = 2;
config.rules['no-var'] = 2;
config.rules['object-shorthand'] = 2;
config.rules['prefer-arrow-callback'] = 2;
config.rules['prefer-const'] = 2;
config.rules['prefer-reflect'] = 2;
config.rules['prefer-spread'] = 2;
config.rules['prefer-template'] = 2;
config.rules['require-yield'] = 2;

module.exports = config;
