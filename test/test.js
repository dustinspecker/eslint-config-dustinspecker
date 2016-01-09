/* global describe, it */
'use strict';
import config from '../';
import esnext from '../esnext';
import {expect} from 'chai';
import jsx from '../jsx';
import isPlainObj from 'is-plain-obj';

describe('eslint-config-angular', () => {
  describe('index', () => {
    it('should be an object', () => {
      expect(isPlainObj(config)).to.eql(true);
    });

    describe('rules', () => {
      it('should have rules', () => {
        expect(isPlainObj(config.rules)).to.eql(true);
      });
    });
  });

  describe('esnext', () => {
    describe('env', () => {
      it('should have es6', () => {
        expect(esnext.env.es6).to.eql(true);
      });
    });

    it('should have ecmaFeatures', () => {
      expect(isPlainObj(esnext.ecmaFeatures)).to.eql(true);
    });
  });

  describe('jsx', () => {
    describe('env', () => {
      it('should have browser', () => {
        expect(jsx.env.browser).to.equal(true);
      });
    });

    describe('ecmaFeatures', () => {
      it('should have jsx', () => {
        expect(jsx.ecmaFeatures.jsx).to.equal(true);
      });
    });
  });
});
