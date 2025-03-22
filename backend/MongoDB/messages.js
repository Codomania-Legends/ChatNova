const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    "sender" : {type : String},
    "text" : { type : String },
    "read" : { type : Boolean },
    "time" : { type : String },
    "date" : { type : String }
})

const Schema = new mongoose.Schema( {
    "user1" : {
        type : String,
        required : true,
    },
    "user2" : {
        type : String,
        required : true,
    },
    "msgs" : [ messageSchema ]
} )

const MSG = mongoose.model( "messages" , Schema )

module.exports = { MSG }
