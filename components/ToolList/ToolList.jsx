import React from 'react'
import styled from "styled-components";

const ToolBox = styled.div`
  & .row {
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  &:nth-child(odd) {
    background-color: var(--lightgray);
  }
  & h3 {
    color: var(--sharpblack);
  }
`;

const ToolList = () => {
  return (
    <section className="toolList">
        <ToolBox >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Economic calendar</h3>
                <p>
                  Keep track of high impact news, market-moving economic events
                  and data releases with our Economic Calendar.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="image/exness-analytical-tools-calendar-en.png"
                  width="500"
                  height="380"
                />
              </div>
            </div>
          </div>
        </ToolBox>
        <ToolBox className="toolBox">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Trading signals by Trading Central</h3>
                <p>
                  Use Trading Centrals signals to develop your strategies and
                  plan your trades. The signals incorporate a variety of
                  analytical approaches, providing a valuable tool for traders
                  under all market conditions and timeframes.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="image/exness-analytical-tools-signals.png"
                  width="500"
                  height="380"
                />
              </div>
            </div>
          </div>
        </ToolBox>
        <ToolBox className="toolBox">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Market news by FXStreet</h3>
              </div>
              <div className="col-md-6">
                <img
                  src="image/exness-analytical-tools-news-en.png"
                  width="500"
                  height="380"
                />
              </div>
            </div>
          </div>
        </ToolBox>
        <ToolBox className="toolBox">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>TC Technical Analysis Indicator</h3>
                <p>
                  Download the latest technical analysis indicator from Trading
                  Central. It is a multilingual and customizable plugin that
                  superimposes Trading Central’s technical analysis strategies,
                  forecast, commentary and key areas onto live trading charts.
                  You can use it on MetaTrader 4 desktop platform.
                </p>
                <a href="#">Download TC Technical Analysis Indicator</a>
              </div>
              <div className="col-md-6">
                <img
                  src="image/ExnessWebTerminalScreen_1.png"
                  width="500"
                  height="380"
                />
              </div>
            </div>
          </div>
        </ToolBox>
      </section>
  )
}

export default ToolList