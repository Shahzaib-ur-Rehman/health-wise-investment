import Link from "next/link";
import React from "react";
import styled from "styled-components";
import AccountLayout from "../components/AccountLayout/AccountLayout";

const AccountWrapper = styled.div`
  padding: 30px 0;
  @media (min-width: 992px) {
    padding: 80px 0;
  }
`;

const InputPannel = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 2px 8px rgba(54, 61, 66, 0.12),
    0px 2px 2px rgba(54, 61, 66, 0.04), 0px 0px 1px rgba(54, 61, 66, 0.15);
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const InputPannelLabel = styled.label`
  padding-bottom: 10px;
`;
const InputPannelList = styled.ul`
  margin: 0;
  padding: 0;
`;
const InputPannelListItem = styled.li`
  position: relative;
  padding: 0 0 0 15px;
  color: ${({ theme }) => theme.color.lightgray1};
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.color.lightgray1};
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 5px;
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
const HyperLink = styled.a`
  color: ${({ theme }) => theme.color.green};
  font-weight: 500;
`;


const Heading3 = styled.h3`
  color: ${({ theme }) => theme.color.black};
`;
const Registration = () => {
  return (
    <div className="wrapper">
      <AccountWrapper className="registration">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <Heading3>Registration</Heading3>
              <InputPannel className="inputPanel">
                <div className="form-group pb-4">
                  <InputPannelLabel>
                    Country / Region of residence
                  </InputPannelLabel>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>USA</option>
                    <option value="1">AUS</option>
                    <option value="2">UAE</option>
                    <option value="3">UAD</option>
                  </select>
                </div>
                <div className="form-group pb-4">
                  <InputPannelLabel>Your email address</InputPannelLabel>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group pb-4">
                  <InputPannelLabel>Password</InputPannelLabel>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group pb-4">
                  <InputPannelList>
                    <InputPannelListItem>
                      Use from 8 to 15 characters
                    </InputPannelListItem>
                    <InputPannelListItem>
                      Use both uppercase and lowercase letters
                    </InputPannelListItem>
                    <InputPannelListItem>
                      Use a combination of numbers and English letters
                    </InputPannelListItem>
                  </InputPannelList>
                </div>
                <div className="form-group pb-4">
                  <select>
                    <option selected>Partner code (optional)</option>
                    <option value="1">AUS</option>
                    <option value="2">UAE</option>
                    <option value="3">UAD</option>
                  </select>
                </div>
                <div className="form-group pb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <InputPannelLabel
                      className="form-check-label"
                      for="flexCheckChecked"
                    >
                      I declare and confirm that I am not a citizen or resident
                      of the US for tax purposes.
                    </InputPannelLabel>
                  </div>
                </div>
                <PrimaryButton className="btn d-block">Continue</PrimaryButton>
              </InputPannel>
              <div className="text-center pt-5">
                <p>
                  Already have an account?{" "}
                  <HyperLink href="#">
                    <Link href="/signin">Sign In now</Link>{" "}
                  </HyperLink>{" "}
                </p>
              </div>
            </div>
          </div>
          <AccountLayout/>
        </div>
        <a href="#" className="liveChat">
          <img src="image/livechat.svg" width="56" height="56" />
        </a>
      </AccountWrapper>
    </div>
  );
};

export default Registration;
Registration.getLayout = function (page) {
  return (
    <>
      {page}
    </>
  );
};