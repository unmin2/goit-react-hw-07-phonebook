import React from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import { AiFillPhone } from 'react-icons/ai';

function App() {

  return (
      <div className="App">
    <h1> <AiFillPhone size={30} color="pink" /> Phonebook <AiFillPhone size={30} color="pink" /></h1>
    <ContactForm />
    <h1>Contacts</h1>
    <Filter />
    <ContactList />
  </div>

  );
}

export default App;
