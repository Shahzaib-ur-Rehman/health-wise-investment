import React from "react";
import styled from "styled-components";

const NumberSection = styled.section`
  color: ${({ theme }) => theme.color.sharpblack};
  padding: 30px 0;
  background-color: ${({ theme }) => theme.color.lightgray};
  @media (min-width: 992px) {
    padding: 80px 0;
  }
`;

const NumberText = styled.div`
  max-width: 500px;
`;

const Heading2 = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.sharpblack};
 
`;

const Heading3 = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.sharpblack};
  @media (min-width: 992px){
    font-size: 32px;
  }
`;
const Paragraph = styled.p`
  margin-bottom: 40px;
`;

const Numbers = () => {
  return (
    <NumberSection className="numbers">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4">
            <NumberText className="numberTxt">
              <Heading2>The numbers that make up Wealthwise</Heading2>
              <p>
                From trading volume to number of active clients, we are happy to
                share with you the figures that make us one of the world’s
                leading brokers
              </p>
              <a href="#">Learn more</a>
            </NumberText>
          </div>
          <div className="col-md-4 text-center numberStats">
            <Heading3>$3.88 trillion</Heading3>
            <Paragraph>Trading volume in March 2023</Paragraph>
            <Heading3>491,064</Heading3>
            <Paragraph>Active clients in March 2023</Paragraph>
            <Heading3>$1.35 billion</Heading3>
            <Paragraph>Client withdrawals in Q1 2023</Paragraph>
            <Heading3>$109.8 million</Heading3>
            <Paragraph>Partner rewards in Q1 2023</Paragraph>
          </div>
        </div>
      </div>
    </NumberSection>
  );
};

export default Numbers;
