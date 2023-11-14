import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = (() => {
    const contacts = useSelector(getContacts);
   
    const filterName = useSelector(getFilters).name;
   
    const filteredContacts = [...contacts].filter(({ name }) =>
        name.toUpperCase().includes(filterName.toUpperCase())
  );

    return (
            <div>
                <List>
                    {filteredContacts.map((contact) => (<li key={contact.id}> <ContactItem
                        contact = {contact} />
                    </li>) 
                )}
                </List>
            </div>
        )
})

