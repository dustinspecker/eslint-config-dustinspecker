import ava from '../ava'
import config from '..'
import esnext from '../esnext'
import isPlainObj from 'is-plain-obj'
import react from '../react'
import test from 'ava'

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
  t.truthy(esnext.parserOptions.ecmaVersion, 6)
})

test('react should have browser env', t => {
  t.truthy(react.env.browser)
})

test('react should set up react plugin', t => {
  t.truthy(react.plugins.indexOf('react') > -1)
})

test('react should have react ecmaFeature', t => {
  t.truthy(react.parserOptions.ecmaFeatures.jsx)
})
