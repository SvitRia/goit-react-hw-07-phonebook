import { styled } from 'styled-components';

export const Section = styled.section`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:  ${p => p.theme.spacing(4)};
  margin: 50px auto 0 auto;
  border: 2px solid ${p => p.theme.colors.black}};
  border-radius: ${p => p.theme.radius.sm};
  background-color: ${p => p.theme.colors.box_color}};
`;