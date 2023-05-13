import React, { Fragment } from "react";
import styled from "styled-components";

const PayInstructionsWrapper = styled.div`
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  height: 95%;
  text-align: center;
  padding: 15px;

  & img {
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const FeeCards = () => {
  return (
    <Fragment>
      <div className="col-md-4">
        <PayInstructionsWrapper className="payInstruction">
          <img src="image/feeicon1.png" width="114" height="107" />
          <p>
            We pay your third-party transaction fees so you don not have to.
          </p>
        </PayInstructionsWrapper>
      </div>
      <div className="col-md-4">
        <PayInstructionsWrapper className="payInstruction">
          <img src="image/feeicon2.png" width="114" height="107" />
          <p>
            Choose the one that will maximize your returns while minimizing your
            costs.
          </p>
        </PayInstructionsWrapper>
      </div>
      <div className="col-md-4">
        <PayInstructionsWrapper className="payInstruction">
          <img src="image/feeicon3.png" width="114" height="107" />
          <p>
            We have eliminated swap fees for most of our instruments, including
            majors, stocks, crypto, and gold.
          </p>
        </PayInstructionsWrapper>
      </div>
    </Fragment>
  );
};

export default FeeCards;
