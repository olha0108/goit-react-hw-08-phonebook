import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
//import { selectFilter } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  //  const contacts = useSelector(state => state.contacts);
  //const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const filteredContacts = contacts.filter(
  //   contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  // );

  //const handleDeleteContact = () => {
  //  dispatch(deleteContact(id));
  //};

  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button type="submit" onClick={() =>  dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
