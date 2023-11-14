import styled from 'styled-components';

export const ListItem = styled.div`
position: relative;
width: 400px;
 display: flex;
 flex-direction: row;
    gap: ${p => p.theme.spacing(6)} ;
     &:hover {color: ${p => p.theme.colors.blue}};
    &:focus {color: ${p => p.theme.colors.blue}};
`

export const BtnTrash = styled.button`
position: absolute;
right: 20px;
`