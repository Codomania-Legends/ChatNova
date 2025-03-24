const express = require("express")
const { setMessage, getMessage } = require("../Controllers/messages")
const msgRouter = express.Router()

msgRouter.post( "/set" , setMessage )
msgRouter.get( "/get" , getMessage )

module.exports = {
    msgRouter
}
