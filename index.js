'use strict'

const fs = require('fs')
const path = require('path')
delete require.cache[__filename]

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

module.exports = function requireModules() {
  // Get own calling file path and its directory.
  const ownPath = module.parent.filename
  const parentDir = path.dirname(ownPath)

  // Fetch folders & files.
  const fetched = fs.readdirSync(parentDir)

  const toExport = {}
  fetched.forEach(item => {
    const itemsPath = `${parentDir}/${item}`

    // Skip if it's a file with an unwanted extension (or hidden) or the calling file.
    const extension = path.extname(itemsPath)
    if (
      !allowedExtensions.includes(extension) ||
      item.charAt(0) === '.' ||
      itemsPath === ownPath
    ) return

    // Remove extensions and prepare both camelCase and original keys.
    const noExtItem = path.basename(itemsPath, extension)
    const camelCaseKey = toCamelCase(noExtItem)

    // Collect module's exports (if any).
    try {
      const moduleExport = require(itemsPath)
      toExport[noExtItem] = moduleExport
      toExport[camelCaseKey] = moduleExport
    } catch (e) {
      console.error(`Failed to require ${itemsPath}:`, e)
    }
  })

  return toExport
}

const allowedExtensions = [
  '', // Directories.
  '.js',
  '.jsx',
  '.json'
]
