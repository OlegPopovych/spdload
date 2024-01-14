import { useRecoilValue } from 'recoil';
import { favoritePageState } from '../../recoil/selectors';
import { Card } from '../molecules/Card';
import { styled } from 'styled-components';
import { ClearFavoritesButton } from '../atoms/ClearFavoritesButton';

const StyledFavoritesContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-block: 64px;
  padding-top: 69px;
  max-width: 1440px;
  margin-inline: auto;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    margin-inline: auto;
    width: 1024px;
  }

  @media (max-width: 1024px) {
    margin-inline: auto;
    width: 800px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
	gap: 24px;
	justify-content: center;
	flex-wrap: wrap;
`;

export const FavoritesContent = () => {
  const favorites = useRecoilValue(favoritePageState);
  return (
    <StyledFavoritesContent>
      {Boolean(favorites.length) && <ClearFavoritesButton />}

      <StyledContainer>
        {favorites &&
          favorites.map((tour, index) => (
            <Card
              id={tour.id}
              imageSrc={tour.imageSrc}
              mission_name={tour.mission_name}
              details={tour.details}
            />
          ))}
      </StyledContainer>
    </StyledFavoritesContent>
  );
};
