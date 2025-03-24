const { AD_INFO } = require("../MongoDB/Additional_info")

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

module.exports = {
    setProfilePicture,
    getProfilePicture
}
