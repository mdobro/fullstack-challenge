let MongoClient = require('mongodb').MongoClient

const DB_NAME = 'ggg'

module.exports = {
  findOne: async function(collection_name, query) {
    let client = await MongoClient.connect('mongodb://localhost:27017')
    let db = client.db(DB_NAME)
    const collection = db.collection(collection_name)
    return collection.findOne(query)
  },

  find: async function(collection_name, query) {
    let client = await MongoClient.connect('mongodb://localhost:27017')
    let db = client.db(DB_NAME)
    const collection = db.collection(collection_name)
    return collection.find(query).toArray()
  },

  insertOne: async function(collection_name, doc) {
    let client = await MongoClient.connect('mongodb://localhost:27017')
    let db = client.db(DB_NAME)
    const collection = db.collection(collection_name)
    return collection.insertOne(doc)
  }
}