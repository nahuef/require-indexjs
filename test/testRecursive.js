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
      'have-hyphen':require('./mocks/modules/have-hyphen'),
      haveHyphen: require('./mocks/modules/have-hyphen'),
      secondModule: require('./mocks/modules/secondModule'),
      jsonMock: require('./mocks/modules/jsonMock'),
      noFolder: require('./mocks/modules/noFolder'),
      mockFile: require('./mocks/modules/mockFile')
    },
    noExport: {}
  }
)

console.log('\nAll tests have passed!')
