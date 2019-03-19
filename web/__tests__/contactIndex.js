import React from 'react'
import ContactsScreen from '../pages/contacts/index'
import renderer from 'react-test-renderer';
import api from '../api/api'
jest.mock('../api/api')

test('snapshot of contactsScreen', (done) => {
  api.getContacts()
  .then(res => {
    const component = renderer.create(<ContactsScreen contacts={res}/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done()
  })
});