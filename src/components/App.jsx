import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import contactsJson from '../assets/contacts.json';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || contactsJson
  );

  const handleDelete = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleUpdateFilter = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={formSubmitHandler} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter onFilter={handleChangeFilter} />
      <ContactList
        contacts={handleUpdateFilter()}
        onDeleteContact={handleDelete}
      />
    </div>
  );
};
