import { useDispatch, useSelector } from 'react-redux'; 
import {addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { nanoid } from 'nanoid'; 
import { toast } from 'react-toastify'; 
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';


export const ContactForm = () => {
  const dispatch = useDispatch(); 
  const contacts = useSelector(selectContacts); 

  const handleSubmit = event => {
    event.preventDefault(); 

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      phone: event.currentTarget.elements.number.value,
    };
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); 
    event.currentTarget.reset(); 
  };

  return (
    <Form onSubmit={handleSubmit}> 
      <Label htmlFor={nanoid()}>
        Name   
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Label>
      <Label htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and shoud contain dashes"
          id={nanoid()}
          required
        />
      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
