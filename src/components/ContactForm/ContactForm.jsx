import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Button } from '@mui/material';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (contacts.some(e => e.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      e.target.reset();
      return;
    }
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.div}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={css.div}>
        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <input
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button variant="contained" color="success" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
};
