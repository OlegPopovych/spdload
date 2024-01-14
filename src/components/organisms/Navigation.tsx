import React from 'react';
import {NavigationItem} from '../molecules/NavigationItem';
import styled from 'styled-components';
import { NavItem } from '../../types/types';
import { NavType } from '../../types/Enums';

const StyledNav = styled.nav`
	padding: 0;
	margin: 0;
	height: 100%;
	display: flex;
	align-items: center;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
	gap: 32px;
	padding: 0;
	margin: 0;
	height: 100%;
`;

type Props = {
	navItems: NavItem[],
	type: NavType,
}

export const Navigation: React.FC<Props> = ({navItems, type}) => {
  return (
    <StyledNav>
      <StyledUl>
				{navItems.map(elem => {
					return (
						<NavigationItem label={elem.label} href={elem.href} type={type}/>
					)
				})}
      </StyledUl>
    </StyledNav>
  );
};
