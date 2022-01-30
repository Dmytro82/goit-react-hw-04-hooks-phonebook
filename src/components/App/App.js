// import React, { Component } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import useLocalStorage from '../../Hooks/useLocalStorage';

import { Container, Title, ContainerForm, ContactTitle } from './App.styled';

const initiaData = () => [
  { id: 'id-01', name: 'GREEN HOUSE (Плай)', number: '0973538467' },
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initiaData());
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   setContacts(
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: 'id-01', name: 'GREEN HOUSE (Плай)', number: '0973538467' },
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //   );
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const repeatСontact = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

  const handleFormSubmit = (name, number) => {
    if (repeatСontact(name)) {
      alert(`${name} is in the phone book`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const contactSearch = () => {
    console.log(filter);
    const normalizedFilter = filter.toLowerCase();
    const requiredСontact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return requiredСontact;
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <Container>
      <Title>phonebook</Title>
      <ContainerForm>
        <Form onSubmit={handleFormSubmit} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={contactSearch()}
          onDeleteContact={deleteContact}
        />
      </ContainerForm>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     // при первой загрузке
//     contacts: [
//       { id: 'id-01', name: 'GREEN HOUSE (Плай)', number: '0973538467' },
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('add componentDidUpdate');
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleFormSubmit = ({ name, number }) => {
//     if (this.repeatСontact(name)) {
//       alert(`${name} is in the phone book`);
//       return;
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   handleFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   contactSearch = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   repeatСontact = name => {
//     const normalizedName = name.toLowerCase();
//     return this.state.contacts.find(
//       contact => contact.name.toLowerCase() === normalizedName,
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const { handleFormSubmit, handleFilter, contactSearch, deleteContact } =
//       this;
//     return (
//       <Container>
//         <Title>phonebook</Title>
//         <ContainerForm>
//           <Form onSubmit={handleFormSubmit} />
//           <ContactTitle>Contacts</ContactTitle>
//           <Filter value={filter} onChange={handleFilter} />
//           <ContactList
//             contacts={contactSearch()}
//             onDeleteContact={deleteContact}
//           />
//         </ContainerForm>
//       </Container>
//     );
//   }
// }

// export default App;
