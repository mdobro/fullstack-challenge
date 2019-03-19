let express = require('express')
let cors = require('cors')
let app = express()

app.use(cors())
app.use(express.json())

//add routers
let contacts = require('./router/contacts')
app.use('/contacts', contacts)

console.log("Starting server on port 3000")

let server = app.listen(3000)

module.exports = server