![GitHub package.json version](https://img.shields.io/github/package-json/v/nahue-f/require-indexjs.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/nahue-f/require-indexjs.svg)
![dependencies](https://img.shields.io/badge/dependencies-0-blue.svg)

# require-indexjs

Helper to ease the use of `index.js` to export modules using .js files or index.js folder pattern.

# Installation
```sh
npm i  require-indexjs
```

# Usage
```js
module.exports = require('require-indexjs')()
```

# Example

Given this directory:
```
src
 |-- MockModule
 |   |-- index.js
 |-- ExampleClass
 |   |-- index.js
 |-- augmenter.js
 |-- index.js // require-indexjs
```

And `src/index.js`:
```js
module.exports = require('require-indexjs')()
```

When required, you get an object containing every module exported in that directory:
```js
{
    MockModule: [Function: MockModule],
    ExampleClass: [Function: ExampleClass],
    augmenter: [Function: augmenter]
}
```


### Making it recursively
Using `require-indexjs` per directory depth, you can get every module and its folder names:
```
src
 |-- classes
 |   |-- DbHelper
 |   |   |-- index.js
 |   |-- Parser
 |   |   |-- index.js
 |   |-- modules
 |   |   |-- augmenter
 |   |   |   |-- index.js
 |   |   |-- index.js // require-indexjs
 |   |-- index.js // require-indexjs
 |-- data.json
 |-- index.js // require-indexjs
```

You get an object containing every module exported in folder tree structure:
```js
{
    classes: {
        DbHelper: [Function: DbHelper],
        Parser: [Function: Parser],
        modules: {
            augmenter: [Function: augmenter]
        }
    },
    data: {}
}
```

> Tip
When required you could apply destructuring like this:
`const { classes, data } = require(./src)`
`const { DbHelper, Parser, modules } = classes`
`const { augmenter } = modules`

# File types/extensions

Allowed extensions are: `js`, `jsx` and `json`.
Any other type will be ignored.
