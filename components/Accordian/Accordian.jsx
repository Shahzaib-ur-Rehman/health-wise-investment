import React from "react";
import styled from "styled-components";

const AccordianSection = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.lightgray};
`;

const Heading2 = styled.h2`
  color: ${({ theme }) => theme.color.sharpblack};
`;
const AccordianButton = styled.button`
   background: ${({ theme }) => theme.color.mediumgray};
`
const Accordian = () => {
  return (
    <AccordianSection className=" text-center">
      <div className="container">
        <Heading2>Frequently asked questions</Heading2>
        <p>
          Find answers to the most frequently asked questions about Investment
          Calculator.
        </p>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="ruleLeft">
              <div className="accordion-item">
                <Heading2 className="accordion-header" id="flush-headingOne">
                  <AccordianButton
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is the Investment Calculator?
                  </AccordianButton>
                </Heading2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#ruleLeft"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac convallis nisl, ut vehicula magna. Fusce tellus
                    libero, pellentesque et aliquam ut, facilisis a tortor. Nam
                    fermentum sagittis elit vitae euismod. Nullam sed porta
                    velit. Proin quis lobortis urna. Pellentesque iaculis
                    ultricies nunc, a rhoncus dui tincidunt vel. Maecenas ac
                    viverra nisl, id faucibus ante.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <Heading2 className="accordion-header" id="flush-headingTwo">
                  <AccordianButton
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How do I use it?
                  </AccordianButton>
                </Heading2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#ruleLeft"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac convallis nisl, ut vehicula magna. Fusce tellus
                    libero, pellentesque et aliquam ut, facilisis a tortor. Nam
                    fermentum sagittis elit vitae euismod. Nullam sed porta
                    velit. Proin quis lobortis urna. Pellentesque iaculis
                    ultricies nunc, a rhoncus dui tincidunt vel. Maecenas ac
                    viverra nisl, id faucibus ante.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="ruleRight">
              <div className="accordion-item">
                <Heading2 className="accordion-header" id="flush-RightOne">
                  <AccordianButton
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseRightOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseRightOne"
                  >
                    What do the terms of the calculation results mean?
                  </AccordianButton>
                </Heading2>
                <div
                  id="flush-collapseRightOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-RightOne"
                  data-bs-parent="#ruleRight"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac convallis nisl, ut vehicula magna. Fusce tellus
                    libero, pellentesque et aliquam ut, facilisis a tortor. Nam
                    fermentum sagittis elit vitae euismod. Nullam sed porta
                    velit. Proin quis lobortis urna. Pellentesque iaculis
                    ultricies nunc, a rhoncus dui tincidunt vel. Maecenas ac
                    viverra nisl, id faucibus ante.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <Heading2 className="accordion-header" id="flush-RightTwo">
                  <AccordianButton
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseRightTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseRightTwo"
                  >
                    Why is Leverage disabled for some instruments?
                  </AccordianButton>
                </Heading2>
                <div
                  id="flush-collapseRightTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-RightTwo"
                  data-bs-parent="#ruleRight"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac convallis nisl, ut vehicula magna. Fusce tellus
                    libero, pellentesque et aliquam ut, facilisis a tortor. Nam
                    fermentum sagittis elit vitae euismod. Nullam sed porta
                    velit. Proin quis lobortis urna. Pellentesque iaculis
                    ultricies nunc, a rhoncus dui tincidunt vel. Maecenas ac
                    viverra nisl, id faucibus ante.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordianSection>
  );
};

export default Accordian;
