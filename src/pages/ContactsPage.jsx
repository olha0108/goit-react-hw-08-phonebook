import { useSelector } from 'react-redux';
//import { getIsLoggedIn } from 'redux/auth/auth.selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ThreeDots } from 'react-loader-spinner';
import { selectIsLoading, selectContacts, selectError } from 'redux/selectors';

export const ContactsPage = () => {
  //const isLoggedIn = useSelector(getIsLoggedIn);

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <ThreeDots />}
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
      {/* {isLoggedIn && <ContactForm />}
      {isLoggedIn && <Filter />}
      {isLoggedIn && <ContactList />}
      {!isLoggedIn && <ThreeDots />}
      <ListItemText  /> */}
    </>
  );
};
