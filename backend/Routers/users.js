const express = require("express")
const { getAllUsers } = require("../Controllers/user")

const User_Router = express.Router()

User_Router.get( "/" , getAllUsers )

module.exports = {
    User_Router
}
