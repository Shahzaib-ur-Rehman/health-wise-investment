import React, { Fragment } from "react";
import styled from "styled-components";
import { navbarLinks } from "../../constants";

const Header = styled.header`
  background: ${({ theme }) => theme.color.black};
  position: relative;
  z-index: 999;
`;

const MenuList = styled.ul`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.color.darkgreen};
  height: 100vh;
  max-width: 300px;
  @media (min-width: 992px) {
    position: static;
    height: inherit;
    max-width: inherit;
    background: transparent;
    text-align: center;
  }
`;

const MenuListItem = styled.li`
  display: block;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const MenuListItemHyperLink = styled.a`
  color: ${({ theme }) => theme.color.white};
`;

const RightMenuWrapper = styled.div`
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 992px) {
    text-align: right;
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

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border-color: ${({ theme }) => theme.color.olive};
  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;
const Global = styled.a`
  margin: 0 0 0 10px;
`;
const HeaderComponent = () => {
  return (
    <Fragment>
      <Header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="col-lg-2">
            <a className="navbar-brand" href="#">
              <img src="image/logo.png" width="91" height="62" />
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <MenuList className="menulilst">
                {navbarLinks.map((linkItem) => {
                  return (
                    <MenuListItem className="nav-item dropdown" key={linkItem}>
                      <MenuListItemHyperLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {linkItem}
                      </MenuListItemHyperLink>
                    </MenuListItem>
                  );
                })}
                <MenuListItem className="nav-item">
                  <MenuListItemHyperLink className="nav-link" href="#">
                    Partners
                  </MenuListItemHyperLink>
                </MenuListItem>
                <MenuListItem className="nav-item">
                  <MenuListItemHyperLink className="nav-link" href="#">
                    Help
                  </MenuListItemHyperLink>
                </MenuListItem>
              </MenuList>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <RightMenuWrapper className="topAnchors">
              <PrimaryButton href="#" className="btn">
                Open Account
              </PrimaryButton>
              <SecondaryButton href="#" className="btn">
                Sign In
              </SecondaryButton>
              <Global href="#" className="d-inline-block">
                <img src="image/glob.svg" width="19" height="19" />
              </Global>
            </RightMenuWrapper>
          </div>
        </nav>
      </Header>
    </Fragment>
  );
};

export default HeaderComponent;
