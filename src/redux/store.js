import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducer';
import { contactsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
