const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const { Login_Signup_Router } = require("./Routers/login_signup")
const app = express()
const PORT = 5000
Connect_MongoDB()

app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )

app.use( "/user" , Login_Signup_Router )

app.listen( PORT , () => console.log(`Server Started at port : ${PORT}`) )
