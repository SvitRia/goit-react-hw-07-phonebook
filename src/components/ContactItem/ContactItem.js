
import { ListItem, BtnTrash } from './ContactItem.styled';
import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

export const ContactItem = (({ contact: { id, name, phone }}) => {
    const dispatch = useDispatch();
    return (
            <ListItem>
                <span>{name}</span>
                <span>{phone}</span>
                <BtnTrash type="button" onClick={() => dispatch(deleteContact(id))}><HiTrash/></BtnTrash>
            </ListItem>
        )
})


