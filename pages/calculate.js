import React from "react";
import styled from "styled-components";
import GetStarted from "../components/GetStarted/GetStarted";
import Accordian from "../components/Accordian/Accordian";

const OrderResultWrapper = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 40px;
  max-width: 900px;
`;

const OrderBox = styled.div`
  position: relative;
  &.orInner {
    padding: 0 15px;
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: rgba(15, 23, 28, 0.12);
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

const Label = styled.label`
  display: block;
  padding: 10px 0;
  font-size: 14px;
`;

const Select = styled.select`
  font-size: 16px;
  background-color: transparent;
  padding: 15px 15px;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 23, 28, 0.12);
  padding: 10px 10px;
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

const PageWrapper = styled.div`
  position: relative;
  padding: 80px 0;
  color: ${({ theme }) => theme.color.sharpblack};
  font-size: 16px;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const PageInfo = styled.div`
  max-width: 715px;
`;
const Heading1 = styled.h1`
  color: ${({ theme }) => theme.color.sharpblack};
  font-size: 25px;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 30px;
  }
  @media (min-width: 768px) {
    font-size: 47px;
  }
  @media (min-width: 992px) {
    font-size: 57px;
  }
  @media (min-width: 992px) {
    font-size: 60px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 99;
`;
const calculate = () => {
  return (
    <div className="wrapper">
      <PageWrapper className="pageHead default-pb">
        <Container className="container">
          <PageInfo className="pageInfo">
            <Heading1>Investment Calculator</Heading1>
          </PageInfo>
          <OrderResultWrapper className="orderResult">
            <OrderBox className=" orInner">
              <h3>Your order</h3>
              <div className="form-group">
                <Label>Account type</Label>
                <Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Standard</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </div>
              <div className="form-group">
                <Label>Account currency</Label>
                <Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>USD</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </div>
              <div className="form-group">
                <Label>Instrument</Label>
                <Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>XAUUSDm</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </div>
              <div className="form-group">
                <Label>Lot</Label>
                <Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>0.01</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </div>
              <div className="form-group">
                <Label>Leverage</Label>
                <Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>1:200</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </div>
            </OrderBox>
            <div className="resultBox orInner">
              <h3>Results</h3>
              <ResultItem className="resultitem">
                <span>Margin</span>
                <strong>10.17 USD</strong>
              </ResultItem>
              <ResultItem className="resultitem">
                <span>Spread</span>
                <strong>0.20 USD</strong>
              </ResultItem>
              <ResultItem className="resultitem">
                <span>Commission</span>
                <strong>0 USD</strong>
              </ResultItem>
              <ResultItem className="resultitem">
                <span>Swap short</span>
                <strong>0 USD</strong>
              </ResultItem>
              <ResultItem className="resultitem">
                <span>Swap long</span>
                <strong>−0.28 USD</strong>
              </ResultItem>
              <ResultItem className="resultitem">
                <span>Pip value</span>
                <strong>0.010000 USD</strong>
              </ResultItem>
            </div>
            <div className="col-md-12 text-center pt-5">
              <PrimaryButton href="#" className="btn">
                Calculate
              </PrimaryButton>
            </div>
          </OrderResultWrapper>
        </Container>
        <a href="#" className="liveChat">
          <img src="../public/image/livechat.svg" width="56" height="56" />
        </a>
      </PageWrapper>
      <Accordian/>
      <GetStarted
        heading="Deposit now"
        paragraph={
          "It only takes 3 minutes to get your <br /> account set up <br /> and ready for trading "
        }
      />
    </div>
  );
};

export default calculate;
