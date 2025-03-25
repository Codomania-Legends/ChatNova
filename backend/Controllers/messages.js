const { MSG } = require("../MongoDB/messages")

async function setMessage( req , res ) {
    if( 
        !req.body.user1,
        !req.body.user2,
        !req.body.sender,
        !req.body.text
    ){ return res.json({msg : "Body is required"}) }
    let { user1 , user2 , sender , text } = req.body
    let user = await MSG.findOne( { user1, user2 } )
    if( !user ) {
        user = await MSG.findOne( { user1 : user2, user2 : user1 } )
        let temp = user1
        user1 = user2
        user2 = temp 
    }
    
    if( !user || user.length == 0 ){
        const date = new Date()
        const result = await MSG.create( {
            user1 : user1,
            user2 : user2,
            recentMsg : text,
            msgs : [
                {
                    sender : sender,
                    text : text,
                    date : date.toLocaleDateString(),
                    time : date.toLocaleTimeString()
                }
            ]
        } )
        res.json(result)
    }
    else{
        const date = new Date()
        const result = await MSG.findOneAndUpdate( { user1 , user2 } , { $push : { msgs : {
            sender : sender,
            text : text,
            date : date.toLocaleDateString(),
            time : date.toLocaleTimeString()
        } } , $set : { recentMsg : text } } )
        
        res.json(result)
    }
}

async function getMessage( req , res ) {
    if( 
        !req.query.user1,
        !req.query.user2
    ){ return res.json({msg : "Users are required"}) }

    const { user1 , user2 } = req.query
    let user = await MSG.findOne( { "user1" : user1 , "user2" : user2} )
    if( !user ) user = await MSG.findOne( { user1 : user2, user2 : user1 } )
    if( !user ) return res.json({msg : "No chats available"})
    return res.json({msg:"user found" ,"msgs" : user.msgs})
}

async function getAllMsgs( req , res ) {
    const result = await MSG.find()
    return res.json(result)
}

module.exports = {
    setMessage,
    getMessage,
    getAllMsgs
}
