const ava = require('./ava')
const esnext = require('./esnext')
const merge = require('lodash.merge')

module.exports = merge({}, ava, esnext)
