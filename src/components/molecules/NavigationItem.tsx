import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavType } from '../../types/Enums';
import { NavigationItemProps } from '../../types/types';

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  line-height: 80px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &::after {
    content: '';
    display: block;
    bottom: 27px;
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }

  &:hover::after {
    background-color: #fff;
  }
`;

const StyledHeaderLink = styled(StyledNavLink)`
  &.active::after {
    background-color: #fff;
  }
`;

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  href,
  type,
}) => {
  return (
    <>
      {type === NavType.Header && (
        <li>
          <StyledHeaderLink to={href}>{label}</StyledHeaderLink>
        </li>
      )}

      {type === NavType.Footer && (
        <li>
          <StyledNavLink to={href}>{label}</StyledNavLink>
        </li>
      )}
    </>
  );
};
