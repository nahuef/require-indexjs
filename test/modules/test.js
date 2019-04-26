'use strict'

const assert = require('assert')
const modules = require('./')

assert.deepStrictEqual(
  modules,
  {
    firstModule: require('./firstModule'),
    secondModule: require('./secondModule')
  }
)
