import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilter } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="submit" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
