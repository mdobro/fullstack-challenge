import fetch from 'node-fetch'

module.exports = {
  getContacts: async function () {
    let res = await fetch('http://localhost:3000/contacts')
    return await res.json()
  },

  postContact: async function (data) {
    let res = await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    return await res.json()
  }
}