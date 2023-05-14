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
  background-color: var(--white);
  box-shadow: 0px 2px 8px rgba(54, 61, 66, 0.12),
    0px 2px 2px rgba(54, 61, 66, 0.04), 0px 0px 1px rgba(54, 61, 66, 0.15);
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const InputPannelLabel = styled.label`
  padding-bottom: 10px;
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

const signin = () => {
  return (
    <div className="wrapper">
      <AccountWrapper className="registration">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h3>Sign-in</h3>
              <InputPannel className="inputPanel">
                <div className="form-group pb-4">
                  <InputPannelLabel>Your email address</InputPannelLabel>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group pb-4">
                  <InputPannelLabel>Password</InputPannelLabel>
                  <input type="password" className="form-control" />
                </div>
                <PrimaryButton className="btn d-block">Continue</PrimaryButton>
                <p className="text-center">
                  <HyperLink href="#">
                    <Link href="/resetPassword">I forgot my password</Link>{" "}
                  </HyperLink>
                </p>
              </InputPannel>
              <div className="text-center pt-5">
                <p>
                  New to Exness?
                  <HyperLink href="#">
                    <Link href={"/registration"}>Create an account</Link>
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


export default signin;


signin.getLayout = function (page) {
  return (
    <>
      {page}
    </>
  );
};
