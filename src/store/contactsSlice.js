import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default persistReducer(
  {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  },
  contactsSlice.reducer
);
