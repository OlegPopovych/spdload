import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 42px;
  color: #f83737;
  background-color: transparent;
`;

const StyledNavlogo = styled(NavLink)``;

export const Logo = () => {
  return (
    <StyledNavlogo to={'/'}>
      <StyledLogo
        src={process.env.PUBLIC_URL + '/icons/logo-removebg-preview.png'}
        alt='space x'
      />
    </StyledNavlogo>
  );
};
