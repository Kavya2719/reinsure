import GetQuote from "../GetQuote/GetQuote";
import Card from "../Card/Card";
import OneImg from "../../assets/images/one.png";
import TwoImg from "../../assets/images/two.png";
import ThreeImg from "../../assets/images/three.png";
import OneImgSm from "../../assets/images/one-sm.png";
import TwoImgSm from "../../assets/images/two-sm.png";
import ThreeImgSm from "../../assets/images/three-sm.png";
import StartStepsSvg from "../../assets/images/StartStepsSvg.svg";

const StartSteps = ({ screenSize }) => {
  return (
    <div className="py-20 w-full flex items-center flex-col gap-[50px] lg:py-[50px] lg:gap-[40px]">
      <img src={StartStepsSvg} alt="What will you get?" className='text-center h-[72px] lg:h-[38px]'/>

      <div className="flex items-center justify-center flex-col gap-[40px]">
        <div className="flex items-center justify-center flex-row gap-16 flex-wrap lg:gap-[30px] sm:gap-7">
          <Card
            width={screenSize > 767? "270px": "370px"}
            image={screenSize > 1022? OneImg: OneImgSm}
            gapBetweenImageAndCard={screenSize > 1022 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "0px"}
            imageWidth={screenSize > 1022 ? "80px" : "46px"}
            imageHeight={screenSize > 1022 ? "80px" : "56px"}
            title={"Fill in Your Details"}
            description={
              "Fill in your personal and employment details to get your quo"
            }
            imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />

        <Card
            width={screenSize > 767? "270px": "370px"}
            image={screenSize > 1022? TwoImg: TwoImgSm}
            gapBetweenImageAndCard={screenSize > 1022 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "0px"}
            imageWidth={screenSize > 1022 ? "80px" : "46px"}
            imageHeight={screenSize > 1022 ? "80px" : "56px"}
            title={"Compare Plans"}
            description={
              "Compare and choose the plan suitable for you."
            }
            // imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />

        <Card
            width={screenSize > 767? "270px": "370px"}
            image={screenSize > 0 ? ThreeImg: ThreeImgSm}
            gapBetweenImageAndCard={screenSize > 1022 ? "24px" : "16px"}
            gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "0px"}
            imageWidth={screenSize > 1022 ? "80px" : "46px"}
            imageHeight={screenSize > 1022 ? "80px" : "56px"}
            title={"Compare Plans"}
            description={
              "Pay & immediately get your plan document."
            }
            // imageMargin={"auto"}
            flexDirection={screenSize > 767 ? "column": "row"} // md devices
            textAlign={screenSize > 767 ? "center": "left"} // md devices
          />
        </div>

        <GetQuote buttonSize={screenSize > 1022? "large": "small"}/>
      </div>
    </div>
  );
};

export default StartSteps;
