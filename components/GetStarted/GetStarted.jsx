import React from "react";
import styled from "styled-components";

const GetStartedWrapper = styled.section`
  color: ${({ theme }) => theme.color.white};
  padding: 115px 0;

`;
const Heading2 = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  @media (min-width: 992px) {
    font-size: 42px;
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

const GetStarted = ({heading, paragraph}) => {
  return (
    <GetStartedWrapper className="getStarted text-center">
      <div className="container">
        <Heading2>{heading}</Heading2>
        <p dangerouslySetInnerHTML={{__html:paragraph}}>
        </p>
        <br />
        <br />
        <PrimaryButton href="#" className="btn">
          Open account
        </PrimaryButton>
      </div>
    </GetStartedWrapper>
  );
};

export default GetStarted;
