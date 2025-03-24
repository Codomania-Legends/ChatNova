const express = require("express")
const { setProfilePicture, getProfilePicture } = require("../Controllers/ad_info")

const ad_info_Router = express.Router()

ad_info_Router.post( "/pp" , setProfilePicture )
ad_info_Router.get( "/pp/:username" , getProfilePicture )

module.exports = {
    ad_info_Router
}
