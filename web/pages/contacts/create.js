import React, { Component } from 'react'
import Router from 'next/router'
import api from '../../api/api'

export default class CreateContactsScreen extends Component {

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    let data = {}
    formData.forEach((val, key) => {
      data[key] = val
    })
    console.log(data)
    api.postContact(data)
    .then(res => {
      //todo: check result for successful save
      Router.back()
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => Router.back()}>Go Back</button>
        <h1>Create new Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input type="text" name="first_name" />
          </label>
          <label>
            Last name:
            <input type="text" name="last_name" />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phone_number" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Address:
            <input type="text" name="address" />
          </label>
          <input type="submit" value="Submit" />
          <style jsx>{`
            label {
              display: block
            }
          `}</style>
        </form>
      </div>
    )
  }
}