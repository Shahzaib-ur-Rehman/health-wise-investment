import React from "react";
import GetStarted from "../components/GetStarted/GetStarted";
import Accordian from "../components/Accordian/Accordian";
import ToolList from "../components/ToolList/ToolList";

const Tools = () => {
  return (
    <div className="wrapper">
      <div className="pageHead default-pb">
        <div className="container">
          <div className="pageInfo">
            <h1>Analytical Tools</h1>
            <p>
              We make sure you have access to the top fundamental and technical{" "}
              <br />
              analysis tools so you can plan your trades with confidence.
            </p>
          </div>
        </div>
        <a href="#" className="liveChat">
          <img src="image/livechat.svg" width="56" height="56" />
        </a>
      </div>
      <ToolList/>
      <Accordian />
      <GetStarted
        heading="Deposit now"
        paragraph="It only takes 3 minutes to get your <br /> account set up <br />
            and ready for trading"
      />
    </div>
  );
};

export default Tools;
