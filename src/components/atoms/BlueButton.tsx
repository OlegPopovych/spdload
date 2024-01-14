import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledBlueButton = styled.button`
  color: #000;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  background-color: #d3eaff;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 24px;
  color: #000;
  height: 53px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  transition: background-color 0.2s ease-in;
  text-transform: uppercase;

  &:hover {
    background-color: #b6cadc;
  }

  &:active {
    background-color: #b6cadc;
  }
`;

interface Props {
  children: ReactNode;
}

export const BlueButton: React.FC<Props> = ({
  children,
}) => {
  return <StyledBlueButton onClick={() => {}}>{children}</StyledBlueButton>;
};
