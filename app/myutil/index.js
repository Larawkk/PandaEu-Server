'use strict'
const myutil = {}

myutil.email = require('./email')
myutil.paramsHandler = require('./params-handler')
myutil.resHandler = require('./response-handler')

module.exports = myutil
