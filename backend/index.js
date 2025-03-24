const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const { Login_Signup_Router } = require("./Routers/login_signup")
const { ad_info_Router } = require("./Routers/ad_info")
const app = express()
const cors = require("cors")
const { User_Router } = require("./Routers/users")
<<<<<<< HEAD
const { msgRouter } = require("./Routers/messages")
=======
>>>>>>> f9625bdc31772df294d4ba701a218199da9c5f94
const PORT = 5000
Connect_MongoDB()

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )

app.use( "/user" , Login_Signup_Router )
app.use( "/ad_info" , ad_info_Router )
app.use( "/user" , User_Router )
<<<<<<< HEAD
app.use( "/msg" , msgRouter )
=======
>>>>>>> f9625bdc31772df294d4ba701a218199da9c5f94

app.listen( PORT , () => console.log(`Server Started at port : ${PORT}`) )
