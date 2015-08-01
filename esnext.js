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

module.exports = config;