'use strict'

const assert = require('assert')
const modulesFolder = require('./mocks/modules')

assert.deepStrictEqual(
  modulesFolder,
  {
    firstModule: require('./mocks/modules/firstModule'),
    secondModule: require('./mocks/modules/secondModule'),
    mockFile: require('./mocks/modules/mockFile.js'),
    jsonMock: require('./mocks/modules/jsonMock.json')
  }
)

console.log('\nTests have passed!')
