import React from "react";
import GetStarted from "../components/GetStarted/GetStarted";
import Accordian from "../components/Accordian/Accordian";
import styled from "styled-components";
import WithDrawHistory from "../components/WithDrawHistory/WithDrawHistory";

const Heading4 = styled.h4`
  color: '#0f171c';
  font-size: 24px;
`;
const Deposit = () => {
  return (
    <div className="wrapper">
      <div className="pageHead default-pb">
        <div className="container">
          <div className="pageInfo">
            <h1>Deposits and Withdrawals</h1>
            <p>
              Choose from flexible payment options in local currencies,
              including the worlds most popular payment systems, e-wallets, and
              crypto wallets.
            </p>
          </div>
          <WithDrawHistory/>
        </div>
        <a href="#" className="liveChat">
          <img src="image/livechat.svg" width="56" height="56" />
        </a>
      </div>

      <Accordian />
      <GetStarted
        heading="Deposit now"
        paragraph=" It only takes 3 minutes to get your <br /> account set up <br />
            and ready for trading"
        className="getStarted text-center"
      />
    </div>
  );
};

export default Deposit;
