import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Sections/Sections.styled';


export const App = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    const сontacts = useSelector(selectContacts);

            return (
                <div>
                    <Section>
                        <h1>Phonebook</h1>
                        <ContactForm  />
                    </Section>
                    <Section>
                        <h2>Contacts</h2>
                        <Filter  />
                        {сontacts.length?<ContactList />: <h3>Your phonebook is empty. Add your first contact</h3>}
                    </Section>
                </div>
            );
};
        
   

