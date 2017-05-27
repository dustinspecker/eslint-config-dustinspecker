import ava from '../ava'
import config from '../'
import esnext from '../esnext'
import isPlainObj from 'is-plain-obj'
import jsx from '../jsx'
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

test('esnext should have ecmaFeatures', t => {
  t.truthy(isPlainObj(esnext.ecmaFeatures))
})

test('jsx should have browser env', t => {
  t.truthy(jsx.env.browser)
})

test('jsx should add react plugin', t => {
  t.truthy(jsx.plugins.indexOf('no-use-extend-native') > -1)
  t.truthy(jsx.plugins.indexOf('react') > -1)
  t.truthy(jsx.plugins.indexOf('unicorn') > -1)
})

test('jsx should have jsx ecmaFeature', t => {
  t.truthy(jsx.parserOptions.ecmaFeatures.jsx)
})
