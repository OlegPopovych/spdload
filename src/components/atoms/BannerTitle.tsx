import styled from 'styled-components';

const StyledBannerTitle = styled.div`
  display: flex;
  flex-direction: column;
	height: 100%;
	justify-content: center;
	
`;
const StyledTitleSmall = styled.p`
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
	margin:0;
`;

const StyledBannerHuge = styled.p`
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 310px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
	margin:0;
`;

export const BannerTitle = () => {
  return (
    <StyledBannerTitle>
      <StyledTitleSmall>
				the space is waiting for
			</StyledTitleSmall>
      <StyledBannerHuge>
				you
			</StyledBannerHuge>
    </StyledBannerTitle>
  );
};
