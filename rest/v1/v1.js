var express = require("express")
var request = require('./request')

var router = express.Router()

router.use('/request', request)

module.exports = router