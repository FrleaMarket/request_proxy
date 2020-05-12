var express = require('express')
var api = require('./rest/api')
var config = require('./config/config')

var app = express()
var router = express.Router()
var restPort = config.restPort

router.use('/api', api)

app.use('/', router)
app.listen(restPort, function () {
    console.log("Rest is listening on port " + restPort)
})