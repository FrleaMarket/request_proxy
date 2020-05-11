let express = require('express')
let bodyParser = require('body-parser')
let logger = require('./../../logger')

let router = express.Router()
router.use(bodyParser.json())

router.post("/buy", (req, res) => {
        let body = req.body
        let tokenId = body.tokenId
        let requester = body.requester
        let signedTransaction = body.signedTransaction

        logger.info(`tokenId : ${tokenId} requester : ${requester} signedTransaction : ${signedTransaction}`)
        res.send()
    }
)

router.post("/accept", (req, res) => {
        let body = req.body
        let tokenId = body.tokenId
        let requester = body.requester

        logger.info(`tokenId : ${tokenId} requester : ${requester}`)
        res.send()
    }
)

module.exports = router