'use strict'

const assert = require('assert')
const modules = require('./')

assert.deepStrictEqual(
  modules,
  {
    classes: {
      FirstClass: require('./classes/FirstClass')
    },
    modules: {
      firstModule: require('./modules/firstModule'),
      secondModule: require('./modules/secondModule')
    }
  }
)
console.log('\nAll tests have passed!')
