const { MSG } = require("../MongoDB/messages")

async function setMessage( req , res ) {
    if( 
        !req.body.user1,
        !req.body.user2,
        !req.body.sender,
        !req.body.text
    ){ return res.json({msg : "Body is required"}) }
    const { user1 , user2 , sender , text } = req.body
    let user = await MSG.findOne( { user1, user2 } )
    
    if( !user || user.length == 0 ){
        const date = new Date()
        const result = await MSG.create( {
            user1 : user1,
            user2 : user2,
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
        } } } )
        
        res.json(result)
    }
}

async function getMessage( req , res ) {
    if( 
        !req.query.user1,
        !req.query.user2
    ){ return res.json({msg : "Users are required"}) }

    const { user1 , user2 } = req.query
    let user = await MSG.findOne( { user1 , user2} )
    if( !user ) return res.json({msg : "No chats available"})
    return res.json(user.msgs)
}

module.exports = {
    setMessage,
    getMessage
}
