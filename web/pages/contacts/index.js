import React, { Component } from 'react'
import api from '../../api/api'
import ContactCard from '../../components/contactCard'
import Link from 'next/link'

export default class ContactsScreen extends Component {

  static async getInitialProps() {
    let contacts = await api.getContacts()
    return {
      contacts
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts || []
    }
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link href="contacts/create">
          <button >Create new Contact</button>
        </Link>
        <div style={{ marginTop: 10 }}>
          {this.state.contacts.map(item =>
            <ContactCard key={item._id} contact={item} />
          )}
        </div>
      </div>
    )
  }
}