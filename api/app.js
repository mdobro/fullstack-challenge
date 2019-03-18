var express = require('express')
var app = express()

app.use(express.json())

//add routers
var contacts = require('./contacts')
app.use('/contacts', contacts)

console.log("Starting server on port 3000")
app.listen(3000)