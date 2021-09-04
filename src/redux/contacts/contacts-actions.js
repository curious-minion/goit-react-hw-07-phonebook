import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
