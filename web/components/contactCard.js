import React, { Component } from 'react'

export default class ContactCard extends Component {
  render() {
    const contact = this.props.contact
    return (
      <div style={{borderStyle: 'double', marginBottom: 10}}>
        <h1>{contact.first_name} {contact.last_name}</h1>
        <ul>
          <li>Phone Number: {contact.phone_number}</li>
          <li>Email: {contact.email}</li>
          <li>Address: {contact.address}</li>
        </ul>
      </div>
    )
  }
}