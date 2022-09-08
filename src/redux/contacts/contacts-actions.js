import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: shortid(),
    },
  };
});
export const removeContact = createAction('contact/remove');

// -----------  For example  -------------
// const createAction = (type) => {
//   const function (payload) => {
//   return {
//     type,
//     payload,
//     }
// };
//    return function;
// }

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: shortid(),
//       ...payload,
//     },
//   };
// };

// export const removeContact = payload => {
//   return {
//     type: REMOVE_CONTACT,
//     payload,
//   };
// };
