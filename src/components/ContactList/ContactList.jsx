import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts, deleteContact } from '../redux/operations'; 
import { Button, Item, List, Text, Spinner } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); 
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); 
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}
      {error && <Text>{error}</Text>}
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <AiFillPhone size={20} color="pink" />
            <Text>
              {name}: {phone}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

