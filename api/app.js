let express = require('express')
let app = express()

app.use(express.json())

//add routers
let contacts = require('./router/contacts')
app.use('/contacts', contacts)

console.log("Starting server on port 3000")
app.listen(3000)