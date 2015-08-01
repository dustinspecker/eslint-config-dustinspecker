/* global describe, it */
'use strict';
var config = require('../')
  , esnext = require('../esnext')
  , expect = require('chai').expect
  , isPlainObj = require('is-plain-obj');

describe('eslint-config-angular', function () {
  describe('index', function () {
    it('should be an object', function () {
      expect(isPlainObj(config)).to.eql(true);
    });

    describe('rules', function () {
      it('should have rules', function () {
        expect(isPlainObj(config.rules)).to.eql(true);
      });
    });
  });

  describe('esnext', function () {
    describe('env', function () {
      it('should have es6', function () {
        expect(esnext.env.es6).to.eql(true);
      });
    });

    it('should have ecmaFeatures', function () {
      expect(isPlainObj(esnext.ecmaFeatures)).to.eql(true);
    });
  });
});
