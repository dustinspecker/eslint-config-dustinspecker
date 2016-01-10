import config from '../'
import esnext from '../esnext'
import isPlainObj from 'is-plain-obj'
import jsx from '../jsx'
import test from 'ava'

test('index should be an object', t => {
  t.ok(isPlainObj(config))
})

test('index should have rules', t => {
  t.ok(isPlainObj(config.rules))
})

test('esnext should es6 env', t => {
  t.ok(esnext.env.es6)
})

test('esnext should have ecmaFeatures', t => {
  t.ok(isPlainObj(esnext.ecmaFeatures))
})

test('jsx should have browser env', t => {
  t.ok(jsx.env.browser)
})

test('jsx should have jsx ecmaFeature', t => {
  t.ok(jsx.ecmaFeatures.jsx)
})
