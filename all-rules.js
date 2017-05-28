const ava = require('./ava')
const esnext = require('./esnext')
const merge = require('lodash.merge')
const react = require('./react')

module.exports = merge({}, ava, esnext, react)
