import { styled } from 'styled-components';

const StyledButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 33px;
  color: #fff;
  width: 223px;
  background-image: url('${process.env.PUBLIC_URL}/icons/arrow_down.svg');
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
	cursor: pointer;
	z-index: 1000;
`;

export const ScrollButton = () => {
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