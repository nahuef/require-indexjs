'use strict'

const fs = require('fs')
const path = require('path')
delete require.cache[__filename]

module.exports = function requireModules () {
  // Get own calling file path && it's directory.
  const ownPath = module.parent.filename
  const parentDir = path.dirname(ownPath)

  // Fetch folders & files.
  const fetched = fs.readdirSync(parentDir)

  const toExport = {}
  fetched.forEach(item => {
    const itemsPath = `${parentDir}/${item}`

    // Skip if it's a file with unwanted extension. Or calling file.
    const extension = path.extname(itemsPath)
    if (!allowedExtensions.includes(extension)) return
    if (itemsPath === ownPath) return

    // Remove extensions to use as key.
    const noExtItem = path.basename(itemsPath, extension)

    // Collect module's exports.
    toExport[noExtItem] = require(itemsPath)
  })

  return toExport
}

const allowedExtensions = [
  '', // Directories.
  '.js',
  '.jsx',
  '.json'
]
