import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { favoriteState } from '../../recoil/atoms';

const StyledClearFavoritesButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  color: #556b84;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #babec1;
  }
`;

export const ClearFavoritesButton = () => {
  const [, setData] = useRecoilState(favoriteState);

  const handleClearFavorites = () => {
    setData([]);
  };

  return (
    <StyledClearFavoritesButton onClick={handleClearFavorites}>
      Clear all
    </StyledClearFavoritesButton>
  );
};
