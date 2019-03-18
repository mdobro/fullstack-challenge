import React, { Component } from 'react'
import fetch from 'node-fetch'
import ContactCard from '../components/contactCard'

export default class Index extends Component {

  static async getInitialProps() {
    let res = await fetch('http://localhost:3000/contacts')
    let json = await res.json()
    console.log(json)
    return {
      contacts: json
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <div>
          {this.state.contacts.map(item =>
            <ContactCard key={item._id} contact={item} />
          )}
        </div>
      </div>
    )
  }
}