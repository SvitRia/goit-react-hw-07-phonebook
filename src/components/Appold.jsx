import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Sections/Sections.styled';

export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('name-contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('name-contacts', JSON.stringify(this.state.contacts));
    }
  }
  onChangeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value.trim() });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    
    return contacts.filter(contact => {
      const nameFilter = filter.toLowerCase();
      const hasName = contact.name.toLowerCase().includes(nameFilter);
     return hasName
   
    });
  }

  addContact = newContact => {
    const addContact = this.state.contacts.some(({ name }) => newContact.name === name)
    if (addContact) {
      return alert(
        `WARNING! ${newContact.name} is already in contacts`)
    } else { 
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }))

    };
  };
 
 deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
   
  };
  render() {
    
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
   
      return (
        <div>
          <Section>
            <h1>Phonebook</h1>
            <ContactForm onAdd={this.addContact} />
            </Section>
           <Section>
           <h2>Contacts</h2>
          <Filter
            value = {filter}
            onFilter={this.onChangeFilter} />
          {visibleContacts.length === 0? (<p>Not Found</p>):(<ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          /> )}
          </Section>
        </div>
       
      );
    };
  };

