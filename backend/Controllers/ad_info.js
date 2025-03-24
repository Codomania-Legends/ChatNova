const { AD_INFO } = require("../MongoDB/Additional_info")

// Profile Picture
async function setProfilePicture( req , res ){
    if( !req.body.pp ) return res.json( { msg : "Profile picture is required" } )
    if( !req.body.username ) return res.json( { msg : "username is required" } )
    const { username , pp } = req.body 
    const result = AD_INFO.updateOne( 
        { "username" : username } , 
        { $set : { profile_picture : pp } } 
    )
    if( !result ) return res.json({msg : "Some err occured while updating pp"})
    else res.json( {msg : "Profile picture updated"} )
}

async function getProfilePicture( req , res ) {
    if( !req.params.username ) return
    const username = req.params.username
    const result = await AD_INFO.findOne({"username" : username})
    if( !result ) return res.json({msg : "No user found"})
    console.log(result)
    return res.json({msg:"Profile Picture found" , profile_picture : `${result.profile_picture}`})
}
// Profile Picture

// Archieve Users

async function getArchieveUsers( req , res ) {
    if( !req.query.username ) return
    const { username } = req.query
    const result = await AD_INFO.findOne({"username" : username})
    console.log(result)
    if( !result ) return res.json({msg:"Invalid Username"})
    const users = result.archieve_users
    return res.json( {msg : "User found" , users : users } )
}

async function setArchieveUsers( req , res ) {
    if( !req.body.username ) return
    const { username , user } = req.body
    const result = await AD_INFO.findOneAndUpdate({"username" : username} , { $push : { "archieve_users" : user } })
    if( !result ) return res.json({msg:"Invalid Username"})
    return res.json({msg : "Archieve users updated Set"})
}

// Archieve Users

module.exports = {
    setProfilePicture,
    getProfilePicture,

    getArchieveUsers,
    setArchieveUsers
}
