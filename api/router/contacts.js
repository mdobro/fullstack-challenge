let express = require('express')
let router = express.Router()
let paperwork = require('paperwork')

let db = require('../model/db')


router.get('/:id?', (req, res) => {
  //unpack req
  let id = req.params.id
  //query db
  let query = {
    id,
    ...req.query
  }
  db.find('contacts', query)
  .then(search_result => {
    res.send(search_result)
  })
})

let contactTemplate = {
  first_name: String,
  last_name: String,
  phone_number: String,
  address: String,
  email: String
}
router.post('/', paperwork.accept(contactTemplate), (req, res) => {
  //unpack req
  let contact = req.body
  db.insertOne('contacts', contact)
  .then(query_result => {
    res.send(query_result)
  })
})

module.exports = router
