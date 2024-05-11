import React from 'react';
import AddContactForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';
import { Provider } from 'react-redux';
import store from '../store/store';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <AddContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
