import React from "react";
import styled from "styled-components";

const Button = styled.a`
  border: 1px solid transparent;
  min-width: 125px;
  padding: 6px;
  font-weight: 600;
  font-size: 14px;
  margin: 0 5px 10px 5px;
  @media (min-width: 1366px) {
    min-width: 180px;
    padding: 11px 11px;
    font-weight: 600;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.black};
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.white};
  }
`;

const Heading1 = styled.h1`
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  @media (min-width: 992px) {
    font-size: 23px;
    line-height: 1.5;
    margin-bottom: 80px;
  }
`;

const BannerWrapper = styled.section`
  overflow: hidden;
`;

const BannerImage = styled.img`
  margin-top: -1px;
  margin-bottom: -1px;
`;

const BannerTextWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`;
const BannerCaption = styled.div`
  max-width: 456px;
`;
const Banner = () => {
  return (
    <BannerWrapper className="homeBanner position-relative">
      <BannerImage src="image/homebanner.jpg" width="1920" height="825" />
      <BannerTextWrapper className="bannerText">
        <div className="container">
          <BannerCaption className="BannerCaption">
            <Heading1>
              Trade across multiple markets with the most stable and reliable
              pricing in the industry.
            </Heading1>
            <PrimaryButton href="#" className="btn">
              Open account
            </PrimaryButton>
          </BannerCaption>
        </div>
      </BannerTextWrapper>
    </BannerWrapper>
  );
};

export default Banner;
