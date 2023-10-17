import Card from "../Card/Card";
import WhatsCoveredData from '../../assets/data/WhatsCoveredData.json'

const WhatsCovered = ({ screenSize }) => {
  return (
    <div className="py-20 px-[60px] flex flex-col justify-center items-center gap-[52px] lg:gap-[30px] lg:px-0 lg:py-[40px]">
      <span className="text-dark-blue font-scandia text-[56px] font-medium tracking-[-1.68px] leading-[110%] lg:text-[30px] lg:tracking-[-0.9px]">{"What’s Covered?"}</span>

      <div className="gap-[40px] flex flex-wrap justify-center lg:gap-[10px] lg:text-center">
        {
          WhatsCoveredData.map((data, index) => {
            return (
              <Card
                key={index}
                {...data}
                width={screenSize >= 1022? "415px": "350px"}
                image={screenSize > 1022? data.imageLarge: data.imageSmall}
                padding={"10px"}
                gapBetweenImageAndCard={"24px"}
                imageHeight={screenSize > 1022? '100px': '67px'}
                imageWidth={screenSize > 1022? '100px': '67px'}
                flexDirection={"row"}
                textAlign={"left"}
                margin={"auto 0px"}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default WhatsCovered;
