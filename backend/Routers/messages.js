const express = require("express")
const { setMessage, getMessage , getAllMsgs } = require("../Controllers/messages")
const msgRouter = express.Router()

msgRouter.post( "/set" , setMessage )
msgRouter.get( "/get" , getMessage )
msgRouter.get( "/getAll" , getAllMsgs )

module.exports = {
    msgRouter
}
