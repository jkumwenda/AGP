
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./frontend.cjs.production.min.js')
} else {
  module.exports = require('./frontend.cjs.development.js')
}
