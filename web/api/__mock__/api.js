module.exports = {
  getContacts: async function () {
    return [
      {
        first_name: "Test",
        last_name: "Tester",
        phone_number: "111-222-3333",
        email: "test@email.com",
        address: "123 Easy St"
      }
    ]
  },

  postContact: async function (data) {
    return {
      ok: 1,
      n: data.length
    }
  }
}