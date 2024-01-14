import styled from 'styled-components';

interface StyledBannerElementProps {
  id: number;
}

const StyledBannerElement = styled.div<StyledBannerElementProps>`
  position: relative;
  background-image: url('${(props) => `${process.env.PUBLIC_URL}/images/banner_${props.id}.png`}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export const BannerElement: React.FC<StyledBannerElementProps> = ({ id }) => {
  return <StyledBannerElement id={id} />;
};
