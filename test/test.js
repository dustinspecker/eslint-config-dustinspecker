import config from '../'
import esnext from '../esnext'
import isPlainObj from 'is-plain-obj'
import jsx from '../jsx'
import test from 'ava'

test('index should be an object', t => {
  t.truthy(isPlainObj(config))
})

test('index should have rules', t => {
  t.truthy(isPlainObj(config.rules))
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

test('jsx should have react plugin', t => {
  t.true(jsx.plugins.indexOf('react') > -1)
})

test('jsx should have jsx ecmaFeature', t => {
  t.truthy(jsx.parserOptions.ecmaFeatures.jsx)
})
