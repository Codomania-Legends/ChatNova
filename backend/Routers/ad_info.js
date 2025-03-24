const express = require("express")
const { setProfilePicture, getProfilePicture, getArchieveUsers, setArchieveUsers } = require("../Controllers/ad_info")

const ad_info_Router = express.Router()

// Profile Picture
ad_info_Router.post( "/pp" , setProfilePicture )
ad_info_Router.get( "/pp/:username" , getProfilePicture )

// Archieve Users
ad_info_Router.get( "/archieve" , getArchieveUsers )
ad_info_Router.post( "/archieve" , setArchieveUsers )

// // Description 
// ad_info_Router.get( "/description" , )
// ad_info_Router.post( "/description" , )

// // Archieve Users
// ad_info_Router.get( "/blocked" ,  )
// ad_info_Router.post( "/blocked" ,  )

module.exports = {
    ad_info_Router
}
