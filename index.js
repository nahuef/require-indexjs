'use strict'

const fs = require('fs')
const path = require('path')
delete require.cache[__filename]

module.exports = function requireModules () {
  // Directory from where it's called.
  const parentDir = path.dirname(module.parent.filename)

  // Fetch folders & files.
  const fetched = fs.readdirSync(parentDir)

  const toExport = {}
  fetched.forEach(item => {
    const itemsPath = `${parentDir}/${item}`

    // Skip if it's a file and not a folder.
    // BEWARE: Only files with extension will be filtered.
    if (path.extname(itemsPath)) return

    // Collect module's exports.
    toExport[item] = require(itemsPath)
  })

  return toExport
}
