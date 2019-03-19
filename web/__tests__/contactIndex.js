import ContactsScreen from '../pages/contacts/index'
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(ContactsScreen);
  let tree = component.toJSON();
  console.log(tree)
  expect(tree).toMatchSnapshot();

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