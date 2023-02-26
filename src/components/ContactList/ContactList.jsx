import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { Button } from '@mui/material';
import css from './ContactList.module.css';

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
          <>

            <li key={id} className={css.li}>
              {name}: {number}
              <Button
                variant="outlined"
                color="success"
                size="small"
                type="submit"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </li>
          </>
        );
      })}
    </ul>
  );
};
