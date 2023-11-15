import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = (() => {
  
    const contacts = useSelector(selectFilteredContacts);
console.log(contacts)
    return (
            <div>
                <List>
                    {contacts.map((contact) => (<li key={contact.id}> <ContactItem
                        contact = {contact} />
                    </li>) 
                )}
                </List>
            </div>
        )
})

