import Container from './components/container';
import ContactEditor from './components/contactEditor/';
import Filter from './components/filter';
import ContactList from './components/contactList/';

export default function App() {
  // const initialContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
