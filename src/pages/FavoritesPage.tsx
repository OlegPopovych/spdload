import styled from 'styled-components';
import { FavoritesContent } from '../components/organisms/FavoritesContent';
import { Footer } from '../components/organisms/Footer';

const StyledFavorites = styled.div`
  position: relative;
  background-color: $color-black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
`;

const StyledBanner = styled.div`
  position: relative;
  background-image: url('${process.env.PUBLIC_URL}/images/favorites_header.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right 0 top -200px;
  height: 50vh;

	@media (max-width: 1250px) {
			height: 25vh;
  }
`;

export const FavoritesPage = () => {
  return (
    <StyledFavorites>
      <StyledBanner />

      <FavoritesContent />

			<Footer />

    </StyledFavorites>
  );
};
