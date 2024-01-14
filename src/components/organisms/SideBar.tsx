import styled from 'styled-components';
import { FavoriteButton } from '../atoms/FavoriteButton';
import { BlueButton } from '../atoms/BlueButton';
import { IconButtonType } from '../../types/Enums';

const StyledSideBar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
	width: 228px;
`;

export const SideBar = () => {
  return (
    <StyledSideBar>
      <FavoriteButton type={IconButtonType.Header}/>

			<BlueButton>
				sign in
			</BlueButton>

    </StyledSideBar>
  );
};