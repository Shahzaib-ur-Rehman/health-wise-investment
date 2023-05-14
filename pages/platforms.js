import React from "react";
import styled from "styled-components";

const AccountsNavWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  padding: 20px 0 0 0;
`;

const AccountsNavHyperLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  padding: 10px 8px;
  border-radius: 4px 4px 0px 0px;
  &:active {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
`;

const AccountsCategoryWrapper = styled.div`
  padding-top: 20px;
  & h2 {
    color: ${({ theme }) => theme.color.sharpblack};
  }
  & h3 {
    color: ${({ theme }) => theme.color.sharpblack};
  }
  & h4 {
    color: ${({ theme }) => theme.color.sharpblack};
  }
`;

const AccountDetailSection = styled.section`
  @media (min-width: 992px) {
    margin: -250px 0 0 0;
    position: relative;
  }

  @media (min-width: 1200px) {
    margin: -316px 0 0 0;
  }
`;

const AccountCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const CardHead = styled.div`
  font-size: 16px;
  padding: 30px 25px 30px 40px;
  background-color: ${({ theme }) => theme.color.sharpblack};
  color: ${({ theme }) => theme.color.white};
  text-align: left;
  position: relative;
  &::before {
    content: "";
    width: 90px;
    height: 90px;
    background-color: ${({ theme }) => theme.color.green};
    position: absolute;
    left: -45px;
    top: -45px;
    transform: rotate(45deg);
  }
  &::after {
    content: "";
    width: 26px;
    height: 26px;
    position: absolute;
    left: 6px;
    top: 6px;
    background: url(../public/image/star.svg) no-repeat center center / cover;
  }
`;
const CardBody = styled.div`
  padding: 15px;
  & .btn {
    display: block;
  }
  @media (min-width: 768px) {
    padding: 40px 40px;
  }
`;
const Heading3 = styled.h3`
  color: ${({ theme }) => theme.color.white};
`;

const InfoListWrapper = styled.div`
  & strong {
    font-size: 16px;
  }
`;

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

const ReasonWrapper = styled.div`
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
  @media (min-width: 1200px) {
    padding: 100px 0;
  }
`;

const Platforms = () => {
  return (
    <div className="wrapper">
      <AccountsNavWrapper className="accountNav">
        <div className="container">
          <AccountsNavHyperLink href="#" className="active">
            Standard Accounts
          </AccountsNavHyperLink>
          <AccountsNavHyperLink href="#">
            Professional Accounts
          </AccountsNavHyperLink>
        </div>
      </AccountsNavWrapper>
      <div className="pageHead">
        <div className="container">
          <div className="pageInfo">
            <h1>Trading Accounts: Standard</h1>
            <p>
              Feature-rich, commission-free accounts that suit the needs of
              today’s traders. Sign up and experience the advantages of our most
              popular account.
            </p>
          </div>
        </div>
        <a href="#" className="liveChat">
          <img src="image/livechat.svg" width="56" height="56" />
        </a>
      </div>
      <AccountsCategoryWrapper className="accountCategory stand">
        <AccountDetailSection className="accountDetail">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <AccountCard className="actBox">
                  <CardHead className="boxHead">
                    <Heading3>Standard</Heading3>
                    <p>
                      Our most popular account. Great for all types of traders.
                    </p>
                  </CardHead>
                  <CardBody className="boxBody">
                    <InfoListWrapper className="infoList">
                      <strong className="d-block">Minimum deposit</strong>
                      <p>Depends on payment system</p>
                    </InfoListWrapper>
                    <InfoListWrapper className="infoList">
                      <strong className="d-block">Spread</strong>
                      <p>From 0.3</p>
                    </InfoListWrapper>
                    <InfoListWrapper className="infoList">
                      <strong className="d-block">Commission</strong>
                      <p>No commission</p>
                    </InfoListWrapper>
                    <InfoListWrapper className="infoList">
                      <strong className="d-block">Maximum leverage</strong>
                      <p>1:Unlimited</p>
                    </InfoListWrapper>
                    <InfoListWrapper className="infoList">
                      <strong className="d-block">Instruments</strong>
                      <p>
                        Forex, metals, cryptocurrencies, energies, stocks,
                        indices
                      </p>
                    </InfoListWrapper>
                    <PrimaryButton href="#" className="btn">
                      Open MT5 account
                    </PrimaryButton>
                  </CardBody>
                </AccountCard>
              </div>
            </div>
          </div>
        </AccountDetailSection>
        <div className="container">
          <ReasonWrapper className="reason">
            <h3>Reasons to choose standard accounts</h3>
            <p>
              If you are new to trading, our standard accounts are a great
              choice for you. Our most popular <br /> accounts have market
              execution, stable spreads and no requotes.
            </p>
          </ReasonWrapper>
          <div className="accountsFeatures">
            <h3>Standard accounts features</h3>
            
          </div>
          <div className="trade">
            <div className="tradeText">
              <h2>Trade from anywhere with WiseWealth Trade App</h2>
              <p>
                Everything you need to trade with confidence in one innovative
                app.
              </p>
            </div>
          </div>
        </div>
      </AccountsCategoryWrapper>
    </div>
  );
};

export default Platforms;
