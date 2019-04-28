'use strict'

const assert = require('assert')
const modules = require('./mocks')

assert.deepStrictEqual(
  modules,
  {
    classes: {
      FirstClass: require('./mocks/classes/FirstClass')
    },
    modules: {
      firstModule: require('./mocks/modules/firstModule'),
      secondModule: require('./mocks/modules/secondModule'),
      jsonMock: require('./mocks/modules/jsonMock.json'),
      mockFile: require('./mocks/modules/mockFile.js')
    },
    noExport: {}
  }
)

console.log('\nAll tests have passed!')
