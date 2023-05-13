import React from "react";
import styled from "styled-components";

const TradingStrategyWrapper = styled.section`
  padding: 30px 0;
  @media (min-width: 992px) {
    padding: 80px 0;
  }
`;

const Heading2 = styled.h2`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.sharpblack};
  font-weight: 600;
  margin-bottom: 60px;
`;

const AccountBox = styled.div`
  padding: 32px;
  position: relative;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const Button = styled.a`
  border: 1px solid transparent;
  min-width: 125px;
  padding: 6px;
  font-weight: 600;
  font-size: 14px;
  margin: 0 5px 10px 5px;
  position: absolute;
  right: 15px;
  bottom: 7px;
  @media (min-width: 1366px) {
    min-width: 180px;
    padding: 11px 11px;
    font-weight: 600;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-color: ${({ theme }) => theme.color.olive};
  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

const Heading3 = styled.h3`
  color: ${({ theme }) => theme.color.sharpblack};
`;
const Heading4 = styled.h4`
  color: ${({ theme }) => theme.color.sharpblack};
`;

const Paragraph = styled.p`
  font-size: 17px;
`;

const SmallParagrap = styled.p`
  margin-bottom: 60px;
  font-size: 20px;
`;
const TradingStratigy = () => {
  return (
    <TradingStrategyWrapper className="tradingStrategy text-center">
      <div className="container">
        <Heading2>Accounts to suit your trading strategy</Heading2>
        <div className="row">
          <AccountBox
            color={"white"}
            background="black"
            className="col-md-6 accountBox  text-left"
          >
            <h3>Standard accounts</h3>
            <SmallParagrap>
              Feature-rich, commission-free accounts that suit the needs of
              today’s traders. Sign up and experience the advantages of our most
              popular account.
            </SmallParagrap>
            <div className="row px-0 mb-5">
              <div className="col-md-4 mb-3">
                <h4>Standard</h4>
                <p>Our most popular account, suitable for all traders.</p>
              </div>
            </div>
            <SecondaryButton
              background="black"
              color="white"
              href="#"
              className="btn btn-black"
            >
              See details
            </SecondaryButton>
          </AccountBox>
          <AccountBox
            color={"#000"}
            background="#F4F5F6"
            className="col-md-6 accountBox professional text-left"
          >
            <Heading3>Professional accounts</Heading3>
            <Paragraph className="smallDesc">
              Flexible choice between raw spread model, zero spread and zero
              commission. For experienced traders, scalpers and algotraders.
            </Paragraph>
            <div className="row px-0 mb-5">
              <div className="col-md-4 mb-3">
                <Heading4>Raw Spread</Heading4>
                <Paragraph>
                  Lowest spreads with fixed commission per lot. Market
                  execution.
                </Paragraph>
              </div>
              <div className="col-md-4 mb-3">
                <Heading4>Pro</Heading4>
                <Paragraph>
                  Zero spread on the top 30 instruments. Market execution, no
                  requotes.
                </Paragraph>
              </div>
              <div className="col-md-4 mb-3">
                <Heading4>Raw Spread</Heading4>
                <Paragraph>
                  Our instant execution account, with zero commission & low
                  spread.
                </Paragraph>
              </div>
            </div>
            <SecondaryButton
              background="transparent"
              color="#000"
              href="#"
              className="btn btn-black"
            >
              See details
            </SecondaryButton>
          </AccountBox>
        </div>
      </div>
    </TradingStrategyWrapper>
  );
};

export default TradingStratigy;
