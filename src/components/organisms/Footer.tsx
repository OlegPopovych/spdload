import { styled } from 'styled-components';
import { NavItem } from '../../types/types';
import { Navigation } from './Navigation';
import { NavType } from '../../types/Enums';

const navItems: NavItem[] = [
  {
    label: 'MY LINKEDIN',
    href: 'https://www.linkedin.com/in/oleh-popovych-a23152246/',
  },
  { label: 'MY GITHUB', href: 'https://github.com/OlegPopovych' },
  { label: 'MY TELEGRAM', href: 'https://t.me/olehpopovych0' },
];

const StyledFooter = styled.div`
  position: relative;
  bottom: 0;
  height: 80px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: #161617;
  padding-inline: 80px;
  box-sizing: border-box;
  z-index: 1;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Navigation navItems={navItems} type={NavType.Footer} />
    </StyledFooter>
  );
};
