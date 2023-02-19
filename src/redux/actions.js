import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('contact/addNewContact');

export const filterContactAction = createAction('filter/filterContact');

export const deleteContactAction = createAction('contact/deleteContact');