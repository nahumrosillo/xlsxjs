# xlsxjs

Parser and writer for various spreadsheet formats such as XLSX, HTM and MHTML. Emphasis on parsing and writing robustness, cross-format feature compatibility with a unified JS representation.

# Installation

With NPM in your terminal:

```javascript
$ npm install 
```

Import all functions you need

```javascript
// Dependencies
var XLSX = require('xlsx');
const pify = require('pify');

//  Functions
const getColumn = require('../services/gets').getColumn;
const getRow = require('../services/gets').getRow;
const getFirstRow = require('../public/javascripts/utils').getFirstRow;
const addRow = require('../public/javascripts/utils').addRow;
const addColumn = require('../public/javascripts/utils').addColumn;
const getAll = require('../services/gets').getAll;
```
For more information... [Wiki](https://github.com/nahumrosillo/xlsxjs/wiki)
