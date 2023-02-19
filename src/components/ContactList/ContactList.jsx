import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const handleDeleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="submit" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};