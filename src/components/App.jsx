import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import contactsJson from '../assets/contacts.json';
export class App extends Component {
  state = {
    filter: '',
    contacts: [
      //  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    //  console.log('App componentDidmount');
    const contacts =
      JSON.parse(localStorage.getItem('contacts')) || contactsJson;
    this.setState({ contacts });
    // const parsedContacts = JSON.parse(contacts);
    // if (parsedContacts) {
    //    this.setState({ contacts: parsedContacts });
    //}
  }

  componentDidUpdate(prevProps, prevState) {
    //   console.log('App componentDidupt');
    if (this.state.contacts !== prevState.contacts) {
      //    console.log('reset');
    }
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = data => {
    const newContact = { ...data, id: shortid.generate() };
    if (
      this.state.contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleUpdateFilter = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={this.handleUpdateFilter()}
          onDeleteContact={this.handleDelete}
        />
      </div>
    );
  }
}
