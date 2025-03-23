const express = require("express")
const { setProfilePicture } = require("../Controllers/ad_info")

const ad_info_Router = express.Router()

ad_info_Router.post( "/pp" , setProfilePicture )

module.exports = {
    ad_info_Router
}
