import styled from 'styled-components';
import { BannerTitle } from '../atoms/BannerTitle';

const StyledBanner = styled.div`
  position: relative;
  background-image: url('${process.env.PUBLIC_URL}/images/banner_1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const StyledButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 33px;
  color: #fff;
  width: 223px;
  background-image: url(/icons/arrow_down.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 0 top 0;
  text-align: left;
  -webkit-text-fill-color: #ffffff;
  -webkit-text-stroke-color: #000000;
  -webkit-text-stroke-width: 1px; 
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const ScrollButton = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledButton onClick={scrollToNextSection}>Explore tours</StyledButton>
  );
};

export const Banner = () => {
  return (
    <StyledBanner>
      <BannerTitle />
      <ScrollButton />
    </StyledBanner>
  );
};
