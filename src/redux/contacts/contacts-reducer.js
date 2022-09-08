import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContact.type]: (store, { payload }) => [...store, payload],
  [removeContact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

export default contactsReducer;

// addContact.type - повертає на своє місце строку 'contacts/add'
// removeContact - скорочена версія, повертає також строку.
// це базове створення:
// 'contacts/add': (store, action) => [...store, action.payload],
