import React from 'react'
import styled from 'styled-components';


const ParagraphWrapper = styled.p`
  color: ${({ theme }) => theme.color.gray};
`;

const BoldParagrap = styled.b`
  color: ${({ theme }) => theme.color.sharpblack};
`;
const AccountLayout = () => {
  return (
    <ParagraphWrapper className="note pt-5">
    <p>
      <BoldParagrap>
        WiseWealth does not offer services to residents of certain
        jurisdictions including the USA, Iran, North Korea and others.
        The content of the website including translations should not be
        construed as means for solicitation. Investors make their own
        and independent decisions.
      </BoldParagrap>
    </p>
    <p>
      <BoldParagrap>
        Trading in CFDs and generally leveraged products involves
        substantial risk of loss and you may lose all of your invested
        capital.
      </BoldParagrap>
    </p>
    <p>
      WiseWealth (SC) Ltd is a Securities Dealer registered in
      Seychelles with registration number 8423606-1 and authorised by
      the Financial Services Authority (FSA) with licence number SD025.
      The registered office of WiseWealth (SC) Ltd is at 9A CT House,
      2nd floor, Providence, Mahe, Seychelles.
    </p>
    <p>
      WiseWealth B.V. is a Securities Intermediary registered in Curaçao
      with registration number 148698(0) and authorised by the Central
      Bank of Curaçao and Sint Maarten (CBCS) with licence number
      0003LSI. The registered office of WiseWealth B.V. is at
      Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao.
    </p>
    <p>
      WiseWealth (VG) Ltd is authorised by the Financial Services
      Commission (FSC) in BVI with registration number 2032226 and
      investment business licence number SIBA/L/20/1133. The registered
      office of WiseWealth (VG) Ltd is at Trinity Chambers, P.O. Box
      4301, Road Town, Tortola, BVI.
    </p>
    <p>
      The entities above are duly authorised to operate under the
      WiseWealth brand and trademarks
    </p>
    <p>
      Risk Warning: Our services relate to complex derivative products
      (CFDs) which are traded outside an exchange. These products come
      with a high risk of losing money rapidly due to leverage and thus
      are not appropriate for all investors. Under no circumstances
      shall WiseWealth have any liability to any person or entity for
      any loss or damage in whole or part caused by, resulting from, or
      relating to any investing activity.
    </p>
    <p>
      The information on this website does not constitute investment
      advice or a recommendation or a solicitation to engage in any
      investment activity.
    </p>
    <p>
      The information on this website may only be copied with the
      express written permission of WiseWealth.
    </p>
  </ParagraphWrapper>
  )
}

export default AccountLayout