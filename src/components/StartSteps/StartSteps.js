import React from "react";
import StartImg from "../../assests/images/start.png";
import GetQuote from "../GetQuote/GetQuote";
import Card from "../Card/Card";
import OneImg from "../../assests/images/one.png";
import TwoImg from "../../assests/images/two.png";
import ThreeImg from "../../assests/images/three.png";
import OneImgSm from "../../assests/images/one-sm.png";
import TwoImgSm from "../../assests/images/two-sm.png";
import ThreeImgSm from "../../assests/images/three-sm.png";

const StartSteps = ({ screenSize }) => {
  return (
    <div className="py-20 w-full flex items-center flex-col gap-[50px] lg:py-[50px] lg:gap-[40px]">
      <div className="flex items-center justify-center flex-wrap text-dark-blue text-[56px] font-medium tracking-[-1.68px] font-scandia lg:text-[30px]">
        <span>Simple steps to&nbsp;</span>
        <img src={StartImg} className="w-[130px] mt-[3px] mr-[3px] lg:w-[71px] lg:mt-[1px] lg:mr-[1px]" alt="start" />
        <span>with</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-[40px]">
        <div className="flex items-center justify-center flex-row gap-16 flex-wrap lg:gap-[30px] sm:gap-7">
          <Card
            // width={"321px"}
            width={"270px"}
            image={screenSize > 1024? OneImg: OneImgSm}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "0px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            imageHeight={screenSize > 1024 ? "80px" : "56px"}
            title={"Fill in Your Details"}
            description={
              "Fill in your personal and employment details to get your quo"
            }
            imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />

        <Card
            // width={"321px"}
            width={"270px"}
            image={screenSize > 1024? TwoImg: TwoImgSm}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "0px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            imageHeight={screenSize > 1024 ? "80px" : "56px"}
            title={"Compare Plans"}
            description={
              "Compare and choose the plan suitable for you."
            }
            // imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />

        <Card
            // width={"321px"}
            width={"270px"}
            image={screenSize > 0 ? ThreeImg: ThreeImgSm}
            gapBetweenImageAndCard={screenSize > 1024 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1024 ? "16px" : "0px"}
            imageWidth={screenSize > 1024 ? "80px" : "46px"}
            imageHeight={screenSize > 1024 ? "80px" : "56px"}
            title={"Compare Plans"}
            description={
              "Pay & immediately get your plan document."
            }
            // imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />
        </div>

        <GetQuote />
      </div>
    </div>
  );
};

export default StartSteps;
