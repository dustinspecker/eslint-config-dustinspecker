const ava = require('../ava')
const config = require('..')
const esnext = require('../esnext')
const isPlainObj = require('is-plain-obj')
const test = require('ava')

test('ava should set up ava plugin', t => {
  t.truthy(ava.plugins.indexOf('ava') > -1)
})

test('index should be an object', t => {
  t.truthy(isPlainObj(config))
})

test('index should have rules', t => {
  t.truthy(isPlainObj(config.rules))
})

test('index should include no-use-extend-native', t => {
  t.truthy(config.plugins.indexOf('no-use-extend-native') > -1)
})

test('index should include xo', t => {
  t.truthy(config.plugins.indexOf('unicorn') > -1)
})

test('esnext should es6 env', t => {
  t.truthy(esnext.env.es6)
  t.is(esnext.parserOptions.ecmaVersion, 6)
})
