import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = (() => {
   
    const contacts = useSelector(selectFilteredContacts);

    return (
            <div>
                <List>
                    {contacts.map(item => (<li key={item.id}> <ContactItem
                        contact = {item} />
                    </li>) 
                )}
                </List>
            </div>
        )
})

