import { Card } from "..";
import WhyUsSvg from "../../assets/images/whyus.svg";
import WhyUsData from "../../assets/data/WhyUsData.json";

const WhyUs = ({ screenSize }) => {
  return (
    <div className="gap-[40px] flex flex-col bg-blue py-[80px] lg:pt-[50px] lg:pb-[65px] w-full sm:gap-[35px]">
      <img
        src={WhyUsSvg}
        alt="WhyUs"
        className="text-center h-[70px] lg:h-[33px]"
      />

      <div className="flex-row flex flex-wrap gap-[40px] sm:gap-[30px] justify-center items-center">
        {
            WhyUsData.map((data, index) => {
                return (
                    <Card
                        key={index}
                        {...data}

                        width={screenSize > 1022 ? "352px" : "240px"}
                        height={screenSize > 1022 ? "250px" : "135px"}
                        gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "10px"}
                        gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                        imageHeight={screenSize > 1022 ? "100px" : "67px"}
                        imageWidth={screenSize > 1022 ? "100px" : "67px"}
                        color={"white"}
                        descriptionStyle={{
                        fontSize: screenSize > 1022 ? "24px" : "16px",
                        fontWeight: "400px",
                        lineHeight: "100%",
                        }}
                        titleStyle={{
                        lineHeight: "100%",
                        }}
                    />
                )
            })
        }
      </div>
    </div>
  );
};

export default WhyUs;
