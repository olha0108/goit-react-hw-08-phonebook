import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'redux/actions';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
      id: nanoid(),
    };
    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === e.target.name.value.toLowerCase()) {
        alert(`${name} is already in contacts`);
        e.target.reset();
      }
    });
    dispatch(addContactAction(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          <p>Name</p>
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div>
        <label htmlFor="number">
          <p>Number</p>
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
      <button type="submit">Add contact</button>
    </form>
  );
};