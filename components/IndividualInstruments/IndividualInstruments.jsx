import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 30px 0;
  background-color: ${({ theme }) => theme.color.sharpblack};
  color: ${({ theme }) => theme.color.white};
  @media (min-width: 768px) {
    padding: 80px 0;
  }
`;

const BodyWrapper = styled.div`
  margin-bottom: 30px;
  font-size: 17px;
`;

const HyperLink = styled.a`
  color: ${({ theme }) => theme.color.green};
  &:hover {
    text-decoration: underline;
  }
`;

const IndividualInstruments = () => {
  return (
    <Wrapper className="individualInstruments">
      <div className="container">
        <h2>
          Learn more about commission and <br /> spreads for individual
          instruments
        </h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <BodyWrapper>
              <h3>Currencies</h3>
              <p>
                Trade the world’s largest market with spreads starting from 0
                pips
              </p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
          <div className="col-md-4">
            <BodyWrapper className="txtBx">
              <h3>Cryptocurrencies</h3>
              <p>
                24/7 swap-free trading on top cryptocurrencies including
                Bitcoin, Ethereum, XRP, Cardano, Solana
              </p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
          <div className="col-md-4">
            <BodyWrapper>
              <h3>Stocks</h3>
              <p>
                Invest in global companies with no overnight fees and spreads
                from 0.1 pips
              </p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
          <div className="col-md-4">
            <BodyWrapper className="txtBx">
              <h3>Indices</h3>
              <p>
                Capitalize on the biggest names in tech and other industries
              </p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
          <div className="col-md-4">
            <BodyWrapper className="txtBx">
              <h3>Metals</h3>
              <p>
                Diversify your portfolio with the most popular safe- haven
                assets
              </p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
          <div className="col-md-4">
            <BodyWrapper className="txtBx">
              <h3>Energies</h3>
              <p>Invest in oil and natural gas with leverage up to 1:200</p>
              <HyperLink href="#">Learn more</HyperLink>
            </BodyWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default IndividualInstruments;
