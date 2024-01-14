import styled from 'styled-components';
import { IconButtonType } from '../../types/Enums';
import { useNavigate } from 'react-router-dom';
import { favoritePageState } from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';

const StyledButtonBase = styled.button`
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 24px;
  height: 53px;
  min-width: 53px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  transition: background-color 0.2s ease-in;

  &:active {
    transform: scale(1);
  }
`;

const StyledHeart = styled(StyledButtonBase)`
  background-image: url('${process.env.PUBLIC_URL}/icons/Heart.svg');
  background-color: #ececec;

	&:hover {
		background-color: #d2d1d1;
  }
`;

const StyledHeartPurple = styled(StyledButtonBase)`
  background-image: url('${process.env.PUBLIC_URL}/icons/Heart_white.svg');
  background-color: #DD377D;

	&:hover {
		background-color: #c53270;
  }
`;

const StyledDump = styled(StyledButtonBase)`
  background-image: url('${process.env.PUBLIC_URL}/icons/dump.svg');
  background-color: #ececec;

	&:hover {
		background-color: #d2d1d1;
  }
`;

interface Props {
  type: IconButtonType;
  onChange?: () => void;
}

export const FavoriteButton: React.FC<Props> = ({ type, onChange }) => {
  const navigate = useNavigate();
	const isFavorites = Boolean(useRecoilValue(favoritePageState).length);

  return (
    <>
      {type === IconButtonType.Header && !isFavorites && (
        <StyledHeart onClick={() => navigate('/favorite')} />
      )}

      {type === IconButtonType.Header && isFavorites && (
        <StyledHeartPurple onClick={() => navigate('/favorite')} />
      )}

      {type === IconButtonType.Dump && <StyledDump onClick={onChange}/>}

      {type === IconButtonType.Heart && <StyledHeart onClick={onChange}/>}
    </>
  );
};
