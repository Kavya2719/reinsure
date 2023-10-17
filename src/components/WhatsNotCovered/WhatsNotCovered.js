import Card from "../Card/Card";
import WhatsNotCoveredData from "../../assets/data/WhatsNotCoveredData.json";

const WhatsNotCovered = ({ screenSize }) => {
  return (
    <div className="bg-blue py-20 text-white flex flex-col gap-[47px] w-full lg:gap-[30px] lg:py-[50px]">
      <h1 className="text-white text-center font-scandia text-[56px] font-medium tracking-[0.2px] lg:text-[30px]">
        {"What’s Not Covered?"}
      </h1>

      <div className="flex-wrap flex flex-row gap-[70px] justify-center lg:gap-[30px]">
        {
          WhatsNotCoveredData.map((data, index) => {
            return (
              <Card
                key={index}
                {...data}
                width={"245px"}
                gapBetweenImageAndCard={screenSize > 1022 ? "20px" : "10px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "20px" : "10px"}
                imageHeight={screenSize > 1022 ? "100px" : "67px"}
                imageWidth={screenSize > 1022 ? "100px" : "67px"}
                color={"white"}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default WhatsNotCovered;
