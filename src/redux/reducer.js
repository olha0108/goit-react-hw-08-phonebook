import { createReducer } from '@reduxjs/toolkit';
import { addContactAction } from './actions';
import { deleteContactAction } from './actions';
import { filterContactAction } from './actions';
import contactsJson from '../assets/contacts.json';

const contactsInitState =
  JSON.parse(localStorage.getItem('contacts')) || contactsJson;

const filterInitState = '';

export const contactsReducer = createReducer(contactsInitState, {
  [addContactAction]: (state, action) => {
    const newState = [...state, action.payload];
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },

  [deleteContactAction]: (state, action) => {
    const newState = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },
});

export const filterReducer = createReducer(filterInitState, {
  [filterContactAction]: (state, action) => (state = action.payload),
});
