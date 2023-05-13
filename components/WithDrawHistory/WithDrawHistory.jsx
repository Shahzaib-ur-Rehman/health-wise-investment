import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  overflow: scroll;
  & tr {
    border-color: var(--black);
  }
  & tr td img {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    overflow: inherit;
  }
`;

const TableHeading = styled.td`
  padding: 10px;
`;

const Heading4 = styled.h4`
  color: #0f171c;
  font-size: 24px;
`;

const Paragraph = styled.p`
  color: #d8dbdd;
  font-size: 14px;
`;

const TableBodyCol = styled.td`
  padding: 10px;
  color: #0f171c;
  font-size: 14px;
  vertical-align: middle;
`;

const TableBodyColForName = styled.td`
  padding: 10px;
  vertical-align: middle;
`;

const Heading3 = styled.h3`
  color: #0f171c;
`;
const WithDrawHistory = () => {
  return (
    <MainWrapper id="Withdrawal">
      <table className="table" cellspacing="5">
        <thead>
          <tr>
            <td width="500">&nbsp;</td>
            <TableHeading>
              <Heading4>Deposit </Heading4>
              <Paragraph>Minimum amount </Paragraph>
            </TableHeading>
            <TableHeading>
              <Heading4>&nbsp; </Heading4>
              <Paragraph>Speed </Paragraph>
            </TableHeading>
            <TableHeading>
              <Heading4>Withdrawal </Heading4>
              <Paragraph>Minimum amount </Paragraph>
            </TableHeading>
            <TableHeading>
              <Heading4>&nbsp; </Heading4>
              <Paragraph>Speed </Paragraph>
            </TableHeading>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableBodyColForName width="500">
              <Heading3>
                <img src="image/bc.png" width="36" height="36" /> Bank Card
              </Heading3>
            </TableBodyColForName>
            <TableBodyCol>$10</TableBodyCol>
            <TableBodyCol>within 30 minutes</TableBodyCol>
            <TableBodyCol>$10</TableBodyCol>
            <TableBodyCol>within 24 hours</TableBodyCol>
          </tr>
          <tr>
            <TableBodyColForName width=" 500">
              <Heading3>
                <img src="image/pm.png" width="36" height="36" />
                Perfect Money
              </Heading3>
            </TableBodyColForName>
            <TableBodyCol>$10</TableBodyCol>
            <TableBodyCol>within 30 minutes</TableBodyCol>
            <TableBodyCol>$2</TableBodyCol>
            <TableBodyCol>within 24 hours</TableBodyCol>
          </tr>
        </tbody>
      </table>
    </MainWrapper>
  );
};

export default WithDrawHistory;
