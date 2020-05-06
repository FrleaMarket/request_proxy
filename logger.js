let winston = require('winston')
let moment = require('moment-timezone')
let format = winston.format
let combine = format.combine
let loggingLabel = require('./config/config').loggingLabel
let label = format.label
let printf = format.printf

let loggingFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`
})

let appendTimestamp = format((information) => {
    information.timestamp = moment()

    return information
})

const logger = winston.createLogger({
    format: combine(label({label: loggingLabel}), appendTimestamp(), loggingFormat),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger