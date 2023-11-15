import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';


import * as Yup from 'yup';
import "yup-phone"; 
import { ErrMessage, StyledForm, StyledField, Label, BtnAdd } from './ContactForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, 'Must be in format: 000-000-0000').required('This field is required!')
  
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts)
  
  function addNewContact({ name, phone }) {
   
    const hasContact = contacts.some(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
    
    if (hasContact) {
      return alert(
        `WARNING! ${name} is already in contacts`) 
    }
    dispatch(addContact({ name, phone }));
  }

   function handleFormSubmit(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    addNewContact(values);
    resetForm();
    setSubmitting(false);
  }

    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleFormSubmit}
        validationSchema={quizSchema}
        >
        <StyledForm>
        
          <Label>
            Name
            <StyledField type="text" name="name" placeholder=" " />
            <ErrMessage name="name" component="div" />
          </Label>

          <Label>
            Number (000-000-0000)
            <StyledField type="text" name="number" />
            <ErrMessage name="number" component="div" />
          </Label>

          <BtnAdd type="submit">Add contact</BtnAdd>
        </StyledForm>
      </Formik>
    );
  };


export default ContactForm;