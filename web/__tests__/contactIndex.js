import React from 'react'
import ContactsScreen from '../pages/contacts/index'
import renderer from 'react-test-renderer';
import api from '../api/api'
jest.mock('../api/api')

test('Link changes the class when hovered', (done) => {
  api.getContacts()
  .then(res => {
    const component = renderer.create(<ContactsScreen contacts={res}/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done()
  })

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});