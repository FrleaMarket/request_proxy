var express = require("express")
var v1 = require('./v1/v1')

var router = express.Router()

router.use('/v1', v1)

module.exports = router