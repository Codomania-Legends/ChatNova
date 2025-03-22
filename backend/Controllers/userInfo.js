const { USER_D } = require("../MongoDB/user_info")
const { CheckForAnotherUser } = require("../Service/functions")

async function handleLoginUser( req , res ) {
    if( !req.body ) return res.json({"msg" : "Body is required"})
    const { name , dob , age , gender , username , password } = req.body
    const user = await CheckForAnotherUser(username)
    if( user ) return res.json( {"msg" : "Username already exists"} )
    const result = await USER_D.create( {
        name,
        dob,
        age,
        gender,
        username,
        password
    } ) 
    if( result ) return res.json( { msg : "User created" } )
    else res.json( { msg : "Some error Occured please try again" } ) 
}

module.exports = {
    handleLoginUser
}
