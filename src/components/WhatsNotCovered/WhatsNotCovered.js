import React from "react";
import "./WhatsNotCovered.css";

import Card from "../Card/Card";
import TheftImg from "../../assests/images/theft.png";
// import TheftImgSm from '../../assests/images/theft-sm.png';
import PerformanceIssuesImg from '../../assests/images/performance-issues.png';
// import PerformanceIssuesImgsm from '../../assests/images/performance-issues-sm.png';
import FraudImg from '../../assests/images/fraud.png';
// import FraudImgsm from '../../assests/images/fraud-sm.png';
import HarassmentImg from '../../assests/images/harassment.png';
// import HarassmentImgsm from '../../assests/images/harassment-sm.png';

const WhatsNotCovered = ({ screenSize }) => {
  return (
    <div className="WhatsNotCovered">
      <div className="WhatsNotCovered-title">{"What’s Not Covered?"}</div>

      <div className="WhatsNotCovered-cards">
        <Card
          width={"200px"}
          image={TheftImg}
          gapBetweenImageAndCard={screenSize > 1024? "20px": "10px"}
          gapBetweenTitleAndDescription={screenSize > 1024? "20px": "10px"}
          imageHeight={screenSize > 1024 ? "100px" : "67px"}
          imageWidth={screenSize > 1024 ? "100px" : "67px"}
          title={"Theft"}
          description={
            "If you experience job loss because you’re stealing from your employer."
          }
          color={"white"}
        />

        <Card
          width={"200px"}
          image={PerformanceIssuesImg}
          gapBetweenImageAndCard={screenSize > 1024? "20px": "10px"}
          gapBetweenTitleAndDescription={screenSize > 1024? "20px": "10px"}
          imageHeight={screenSize > 1024 ? "100px" : "67px"}
          imageWidth={screenSize > 1024 ? "100px" : "67px"}
          title={"Performance issues"}
          description={
            "If your employer has laid you off because of poor performance issues."
          }
          color={"white"}
        />

        <Card
          width={"200px"}
          image={FraudImg}
          gapBetweenImageAndCard={screenSize > 1024? "20px": "10px"}
          gapBetweenTitleAndDescription={screenSize > 1024? "20px": "10px"}
          imageHeight={screenSize > 1024 ? "100px" : "67px"}
          imageWidth={screenSize > 1024 ? "100px" : "67px"}
          title={"Fraud"}
          description={
            "If your employer terminates you because you’ve committed fraud."
          }
          color={"white"}
        />

        <Card
          width={"200px"}
          image={HarassmentImg}
          gapBetweenImageAndCard={screenSize > 1024? "20px": "10px"}
          gapBetweenTitleAndDescription={screenSize > 1024? "20px": "10px"}
          imageHeight={screenSize > 1024 ? "100px" : "67px"}
          imageWidth={screenSize > 1024 ? "100px" : "67px"}
          title={"Harassment"}
          description={
            "If you’ve been terminated due to proven harassment or employer's code of conduct."
          }
          color={"white"}
        />
      </div>
    </div>
  );
};

export default WhatsNotCovered;
