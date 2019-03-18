var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient


router.get('/:id', (req, res) => {
  //unpack req
  let id = req.params.id
  //query db
  MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err

    var db = client.db('ggg')


  })
})

router.post('/', (req, res) => {
  //unpack req
  res.send(req.body)
})

module.exports = router
