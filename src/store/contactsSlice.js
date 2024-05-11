import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.contacts.items = action.payload;
    });
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.contacts.items.push(action.payload);
    });
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
