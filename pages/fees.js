import React from "react";
import GetStarted from "../components/GetStarted/GetStarted";
import Accordian from "../components/Accordian/Accordian";
import FeeCards from "../components/FeeCards/FeeCards";
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

const Fees = () => {
  return (
    <div className="wrapper">
      <div className="pageHead default-pb">
        <div className="container">
          <div className="pageInfo">
            <h1>WealthWise Fees</h1>
            <p>
              Focus on trading, not on paying. We have created a trading
              environment that ensures the lowest possible costs for our
              clients.
            </p>
          </div>
          <div className="row pt-5">
            <FeeCards/>
            <div className="col-md-12 text-center pt-5">
              <PrimaryButton href="#" className="btn">
                {" "}
                Start trading
              </PrimaryButton>
            </div>
          </div>
        </div>
        <a href="#" className="liveChat">
          <img src="image/livechat.svg" width="56" height="56" />
        </a>
      </div>
     
      <Accordian/>
      <GetStarted
        heading="Deposit now"
        paragraph="It only takes 3 minutes to get your <br /> account set up <br />
            and ready for trading"
      />
    </div>
  );
};

export default Fees;
