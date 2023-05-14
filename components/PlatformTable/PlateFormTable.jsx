import React from "react";
import styled from "styled-components";

const FeaturesWrapper = styled.div`
  & tr{
    font-size: 14px;
    border-bottom-width: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  & td{
    font-size: 14px;
    border-bottom-width: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const HeadParagraph = styled.p`
  background-color: #0f171c;
  color: #fff;
  padding: 25px;
`;

const TableData1 = styled.td`
  font-weight: 600;
`;

const TableData2 = styled.td`
  font-weight: 400;
`;
const PlateFormTable = () => {
  return (
    <FeaturesWrapper id="features">
      <div className="table-responsive">
        <table className="table" cellspacing="5">
          <thead>
            <tr>
              <td width="50%">&nbsp;</td>
              <td width="50%">
                <HeadParagraph>Standard </HeadParagraph>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData1 width="50%">Minimum deposit</TableData1>
              <TableData2 width="50%">Depends on payment system</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Spread</TableData1>
              <TableData2 width="50%">From 0.3</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Commission</TableData1>
              <TableData2 width="50%">No commission</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Maximum leverage</TableData1>
              <TableData2 width="50%">1:Unlimited</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Instruments</TableData1>
              <TableData2 width="50%">
                Forex, metals, cryptocurrencies, energies, stocks, indices
              </TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Minimum lot size</TableData1>
              <TableData2 width="50%">0.01</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Maximum lot size</TableData1>
              <TableData2 width="50%">
                200 (7:00 - 20:59 GMT+0), 20 (21:00 - 6:59 GMT+0)
              </TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Maximum number of positions</TableData1>
              <TableData2 width="50%">Unlimited</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Hedged margin</TableData1>
              <TableData2 width="50%">0%</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Margin call</TableData1>
              <TableData2 width="50%">60%</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Stop out</TableData1>
              <TableData2 width="50%">0% (see details about stocks)</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Order execution</TableData1>
              <TableData2 width="50%">Market</TableData2>
            </tr>
            <tr>
              <TableData1 width="50%">Swap-free</TableData1>
              <TableData2 width="50%">Available</TableData2>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td width="50%">&nbsp;</td>
              <td width="50%">
                {" "}
                <a href="#" className="btn btn-green d-block">
                  Open MT5 account
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td width="50%">&nbsp;</td>
              <td width="50%" style="text-align: center;">
                {" "}
                <a href="#" style="text-decoration: underline;">
                  Open MT4 account
                </a>{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </FeaturesWrapper>
  );
};

export default PlateFormTable;
