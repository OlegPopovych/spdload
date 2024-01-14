import { Navigation } from './Navigation';
import { Logo } from '../atoms/Logo';
import styled from 'styled-components';
import { SideBar } from './SideBar';
import { NavItem } from '../../types/types';
import { NavType } from '../../types/Enums';

const StyledHeader = styled.div`
  position: absolute;
  height: 80px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.48);
  padding-inline: 80px;
  box-sizing: border-box;
  z-index: 1;

	@media (max-width: 1250px) {
		padding-inline: 10px;
  }
`;

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'TOURS', href: '/tours' },
  { label: 'ABOUT', href: '/about' },
  { label: 'HELP', href: '/help' },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <Navigation navItems={navItems} type={NavType.Header}/>

      <SideBar />
    </StyledHeader>
  );
};
