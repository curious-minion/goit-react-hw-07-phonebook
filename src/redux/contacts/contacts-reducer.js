import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const savedContact = state.find(contact => contact.name === payload.name);
    if (savedContact) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }

    const savedNumber = state.find(
      contact => contact.number === payload.number,
    );

    if (savedNumber) {
      alert(`${payload.number} has already been saved`);
      return state;
    }

    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
