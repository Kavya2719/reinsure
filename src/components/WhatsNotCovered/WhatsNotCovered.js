import React from "react";
import Card from "../Card/Card";
import TheftImg from "../../assests/images/theft.png";
import PerformanceIssuesImg from "../../assests/images/performance-issues.png";
import FraudImg from "../../assests/images/fraud.png";
import HarassmentImg from "../../assests/images/harassment.png";

const WhatsNotCovered = ({ screenSize }) => {
  return (
    <div className="bg-blue py-20 text-white flex flex-col gap-[47px] w-full lg:gap-[30px] lg:py-[50px]">
      <div className="text-white text-center font-scandia text-[56px] font-medium tracking-[0.2px] lg:text-[30px]">
        {"What’s Not Covered?"}
      </div>

      <div className="flex-wrap flex flex-row gap-[70px] justify-center lg:gap-[30px]">
        <Card
          width={"245px"}
          image={TheftImg}
          gapBetweenImageAndCard={screenSize > 1022 ? "20px" : "10px"}
          gapBetweenTitleAndDescription={screenSize > 1022 ? "20px" : "10px"}
          imageHeight={screenSize > 1022 ? "100px" : "67px"}
          imageWidth={screenSize > 1022 ? "100px" : "67px"}
          title={"Theft"}
          description={
            "If you experience job loss because you’re stealing from your employer."
          }
          color={"white"}
        />

        <Card
          width={"245px"}
          image={PerformanceIssuesImg}
          gapBetweenImageAndCard={screenSize > 1022 ? "20px" : "10px"}
          gapBetweenTitleAndDescription={screenSize > 1022 ? "20px" : "10px"}
          imageHeight={screenSize > 1022 ? "100px" : "67px"}
          imageWidth={screenSize > 1022 ? "100px" : "67px"}
          title={"Performance issues"}
          description={
            "If your employer has laid you off because of poor performance issues."
          }
          color={"white"}
        />

        <Card
          width={"245px"}
          image={FraudImg}
          gapBetweenImageAndCard={screenSize > 1022 ? "20px" : "10px"}
          gapBetweenTitleAndDescription={screenSize > 1022 ? "20px" : "10px"}
          imageHeight={screenSize > 1022 ? "100px" : "67px"}
          imageWidth={screenSize > 1022 ? "100px" : "67px"}
          title={"Fraud"}
          description={
            "If your employer terminates you because you’ve committed fraud."
          }
          color={"white"}
        />

        <Card
          width={"245px"}
          image={HarassmentImg}
          gapBetweenImageAndCard={screenSize > 1022 ? "20px" : "10px"}
          gapBetweenTitleAndDescription={screenSize > 1022 ? "20px" : "10px"}
          imageHeight={screenSize > 1022 ? "100px" : "67px"}
          imageWidth={screenSize > 1022 ? "100px" : "67px"}
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
