
import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};

  padding: ${p => p.theme.spacing(1)};
  margin-left: ${p => p.theme.spacing(2)};
`;

export const StyledField = styled(Field)`
  width: 400px;
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(3)};
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.orange};
  font-size: 14px;
`;

export const Label = styled.label`
   
   color: ${p => p.theme.colors.green};
   font-size: 18px;
`

export const BtnAdd = styled.button`

  padding: ${p => p.theme.spacing(3)};
 
   &:hover {color: ${p => p.theme.colors.blue}};
    &:focus {color: ${p => p.theme.colors.blue}};
`