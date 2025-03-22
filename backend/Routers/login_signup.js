const express = require("express")
const { handleLoginUser } = require("../Controllers/userInfo")

const Login_Signup_Router = express.Router()

Login_Signup_Router.post( "/login" , handleLoginUser )
// Login_Signup_Router.post( "/signup" ,  )

module.exports = {
    Login_Signup_Router
}
