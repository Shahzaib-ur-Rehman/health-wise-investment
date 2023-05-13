import React from "react";
import styled from "styled-components";
import {
  AccountsData,
  CorporateData,
  FooterThirdRowContent,
  InstrumentsData,
  LegalAndReportingData,
  MoreData,
  PlatformsData,
  SocialMediaIcons,
  ToolsData,
} from "../../constants";

const Footer = styled.footer`
  padding: 60px 0;
  background: ${({ theme }) => theme.color.white};
`;

const ListWrapper = styled.div`
  max-width: 100%;
  @media (min-width: 575px) {
    max-width: 50%;
  }
  @media (min-width: 768px) {
    max-width: 25%;
  }
  @media (min-width: 1200px) {
    max-width: 14.28%;
  }
`;
const Heading5 = styled.h5`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.sharpblack};
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0 15px 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

const ListItemHyperLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

const FooterSecondRowWrapper = styled.div`
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  @media (min-width: 1200px) {
    padding: 60px 0;
  }
`;

const HyperLink = styled.a`
  color: solid ${({ theme }) => theme.color.blue};
  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;

const SocialMediaWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const SocialMediaHyperLink = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.black};
  text-align: center;
  line-height: 23px;
  margin: 0 2px;
  &:hover {
    background-color: ${({ theme }) => theme.color.green};
  }
`;

const FooterThirdRrowWrapper = styled.div`
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  @media (min-width: 1200px) {
    padding: 60px 0;
  }
`;

const FooterThirdRowList = styled.ul`
  margin: 0 0 15px 0;
  text-align: center;
`;

const FooterThirdRowListItem = styled.li`
  display: inline-block;
  padding-right: 15px;
`;

const FooterThirdRowListItemHyperLink = styled.a`
  color: ${({ theme }) => theme.color.sharpblack};
  &:hover {
    background-color: ${({ theme }) => theme.color.green};
  }
`;

const CopyRightWrapper = styled.div`
  text-align: center;
  @media (min-width: 1200px) {
    text-align: right;
  }
`;
const FooterComponent = () => {
  return (
    <Footer className="siteFooter">
      <div className="container">
        <div className="row footerFirstRrow">
          <ListWrapper className="linkBox">
            <Heading5>Corporate</Heading5>
            <List>
              {CorporateData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>Legal & Reporting</Heading5>
            <List>
              {LegalAndReportingData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>Accounts</Heading5>
            <List>
              {AccountsData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>Instruments</Heading5>
            <List>
              {InstrumentsData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>Platforms</Heading5>
            <List>
              {PlatformsData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>Tools</Heading5>
            <List>
              {ToolsData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
          <ListWrapper className="linkBox">
            <Heading5>More</Heading5>
            <List>
              {MoreData.map((name) => {
                return (
                  <ListItem key={name}>
                    <ListItemHyperLink href="#">{name}</ListItemHyperLink>
                  </ListItem>
                );
              })}
            </List>
          </ListWrapper>
        </div>
        <FooterSecondRowWrapper className="row footerSecondRrow">
          <div className="col-md-4">
            <a href="#">
              <img src="image/footerlog.png" width="179" height="100" />
            </a>
            <SocialMediaWrapper className="socialMedia">
              {SocialMediaIcons.map((src) => {
                return (
                  <SocialMediaHyperLink href="#" key={src}>
                    <img src={src} />
                  </SocialMediaHyperLink>
                );
              })}
            </SocialMediaWrapper>
          </div>
          <div className="col-md-8">
            <p>
              WiseWealth (SC) Ltd ​is a Securities Dealer registered in
              Seychelles with registration number 8423606-1 and authorised by
              the Financial Services Authority (FSA) with licence number SD025.
              The registered office of Wisewealth (SC) Ltd is at 9A CT House,
              2nd floor, Providence, Mahe, Seychelles.
            </p>
            <p>
              Wisewealth B.V. is a Securities Intermediary registered in Curaçao
              with registration number 148698(0) and authorised by the Central
              Bank of Curaçao and Sint Maarten (CBCS) with licence number
              0003LSI. The registered office of Wisewealth B.V. is at
              Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao.
            </p>
            <p>
              Wisewealth (VG) Ltd is authorised by the Financial Services
              Commission (FSC) in BVI with registration number 2032226 and
              investment business licence number SIBA/L/20/1133. The registered
              office of Wisewealth (VG) Ltd is at Trinity Chambers, P.O. Box
              4301, Road Town, Tortola, BVI.
            </p>
            <p>
              The entities above are duly authorized to operate under the
              Wisewealth brand and trademarks.
            </p>
            <p>
              Risk Warning: Our services relate to complex derivative products
              which are traded outside an exchange. These products come with a
              high risk of losing money rapidly due to leverage and thus are not
              appropriate for all investors. Under no circumstances shall
              Wisewealth have any liability to any person or entity for any loss
              or damage in whole or part caused by, resulting from, or relating
              to any investing activity.{" "}
              <HyperLink href="#"> Learn more</HyperLink>.
            </p>
            <p>
              The information on this website does not constitute investment
              advice or a recommendation or a solicitation to engage in any
              investment activity.
            </p>
            <p>
              The information on this website may only be copied with the
              Wisewealth written permission of Wisewealth.
            </p>
          </div>
        </FooterSecondRowWrapper>
        <FooterThirdRrowWrapper className="row footerThirdRrow">
          <div className="col-lg-8">
            <FooterThirdRowList>
              {FooterThirdRowContent.map((name) => {
                return (
                  <FooterThirdRowListItem key={name}>
                    <FooterThirdRowListItemHyperLink href="#">
                      {name}
                    </FooterThirdRowListItemHyperLink>
                  </FooterThirdRowListItem>
                );
              })}
            </FooterThirdRowList>
          </div>
          <CopyRightWrapper className="col-lg-4">
            <span>© 2023 Wisewealth</span>
          </CopyRightWrapper>
        </FooterThirdRrowWrapper>
      </div>
    </Footer>
  );
};

export default FooterComponent;
