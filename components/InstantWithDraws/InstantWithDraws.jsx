import React from "react";
import styled from "styled-components";

const InstantWitDrawsWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.darkgray};
  padding: 30px 0 0 0;
  overflow: hidden;
  color: ${({ theme }) => theme.color.white};
  @media (min-width: 992px) {
    padding: 80px 0 0 0;
  }
`;

const Heading2 = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  @media (min-width: 992px) {
    font-size: 42px;
    margin-bottom: 15px;
  }
`;

const HyperLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const TextWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  padding: 20px 25px;
  @media (min-width: 992px) {
    padding: 80px 40px;
  }
`;

const TextInnerWrapper = styled.div`
  max-width: 400px;
`;
const InstantWithDraws = () => {
  return (
    <InstantWitDrawsWrapper className="instantWtihdrawals">
      <div className="container text-center">
        <Heading2>Instant withdrawals, 24/7</Heading2>
        <br />
        <br />
        <p>
          Our withdrawals are carried out in seconds with no manual processing,
          including on weekends.
        </p>
        <p>
          <HyperLink href="#">
            Learn more about deposits & withdrawals at Exness
          </HyperLink>
        </p>
        <br />
        <img src="image/deposits.png" width="1280" height="337" />
      </div>
      <div className="row px-0">
        <TextWrapper className="col-md-6 iwTexBox bxLeft" bxLeft={"bxLeft"}>
          <TextInnerWrapper className="InnerBox">
            <h3>Fast & reliable execution</h3>
            <p>With free VPS hosting</p>
            <HyperLink href="#">See VPS details</HyperLink>
          </TextInnerWrapper>
        </TextWrapper>
        <TextWrapper className="col-md-6 iwTexBox bxRight">
          <TextInnerWrapper className="InnerBox">
            <h3>Transparent price history</h3>
            <p>Tick-level data across all instruments</p>
            <HyperLink href="#">See price history</HyperLink>
          </TextInnerWrapper>
        </TextWrapper>
      </div>
    </InstantWitDrawsWrapper>
  );
};

export default InstantWithDraws;
