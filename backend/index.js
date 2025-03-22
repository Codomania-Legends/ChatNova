const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const app = express()
const PORT = 5000
Connect_MongoDB()

app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )

app.get("/" , (req,res) => {res.send("Hello home")})

app.listen( PORT , () => console.log(`Server Started at port : ${PORT}`) )
