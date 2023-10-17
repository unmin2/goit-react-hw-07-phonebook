import { useState } from 'react';
import { contactform} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', number: '' });
  const contacts = useSelector(state => state.contacts);

  //////
  const handleChange = evt => {
    setUserData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = userData;

    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(add({ name, number }));
    }

    setUserData({ name: '', number: '' });
  };

  return (
    <form
      className={contactform}
      onSubmit={submitHandler}
    >
      <div>
        <label>
          <span>Name</span>
        </label>
        <input
          value={userData.name}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />
  <label>
          <span>Number</span>
        </label>
        <input
          value={userData.number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder='+380673595600'
          pattern="^\+[\d]{12}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button  type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};