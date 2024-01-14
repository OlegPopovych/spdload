import styled from 'styled-components';
import { ItemSlider } from '../components/organisms/ItemSlider/ItemSlider';
import { Footer } from '../components/organisms/Footer';
import { BannerSlider } from '../components/organisms/BannerSlider/BannerSlider';

const StyledHome = styled.div`
  position: relative;
  background-color: $color-black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export const HomePage = () => {
  return (
    <StyledHome>
      <BannerSlider name={'baner'} />

      <ItemSlider name={'popular tours'} />

      <Footer />
    </StyledHome>
  );
};
