import React from "react";
import { button_det } from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);

  const dispatch = useDispatch();

  return contacts.filter(({ name }) => name.toLowerCase().match(filterValue.toLowerCase())).map((contact) => {
    return (
      <li key={contact.id} id={contact.id}>
        {`${contact.name}: ${contact.number}`}
        <button
          className={button_det}
          data-id={contact.id}
          onClick={() => dispatch(remove({ id: contact.id }))}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactList;