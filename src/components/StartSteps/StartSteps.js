import React from "react";
import "./StartSteps.css";

import StartImg from "../../assests/images/start.png";
import GetQuote from "../GetQuote/GetQuote";
import Card from "../Card/Card";
import OneImg from "../../assests/images/one.png";
import TwoImg from "../../assests/images/two.png";
import ThreeImg from "../../assests/images/three.png";

const StartSteps = ({ screenSize }) => {
  return (
    <div className="StartSteps">
      <div className="StartSteps-title">
        <span>Simple steps to&nbsp;</span>
        <img src={StartImg} className="StartSteps-startImg" alt="start" />
        <span>with</span>
      </div>

      <div className="StartSteps-cards-container">
        <div className="StartSteps-cards">
          <Card
            width={"311px"}
            image={OneImg}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "6px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            title={"Fill in Your Details"}
            description={
              "Fill in your personal and employment details to get your quo"
            }
            flexDirection={screenSize > 1024 ? "column": "row"}
          />

        <Card
            width={"311px"}
            image={TwoImg}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "6px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            title={"Compare Plans"}
            description={
              "Compare and choose the plan suitable for you."
            }
            flexDirection={screenSize > 1024 ? "column": "row"}
          />

        <Card
            width={"311px"}
            image={ThreeImg}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "6px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            title={"Compare Plans"}
            description={
              "Pay & immediately get your plan document."
            }
            flexDirection={screenSize > 1024 ? "column": "row"}
          />
        </div>

        <GetQuote />
      </div>
    </div>
  );
};

export default StartSteps;
