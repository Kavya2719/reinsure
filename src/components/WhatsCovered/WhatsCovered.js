import React from "react";
import Card from "../Card/Card";
import BankRuptyImg from "../../assests/images/bankrupty.png";
import maImg from "../../assests/images/ma.png";
import TerminationImg from "../../assests/images/Termination.png";
import EconomicCyclesImg from "../../assests/images/Economic Cycles.png";
import RestructuringImg from "../../assests/images/restructuring.png";
import BankRuptyImgsm from "../../assests/images/bankruptysm.png";
import maImgsm from "../../assests/images/ma-sm.png";
import TerminationImgsm from "../../assests/images/Termination-sm.png";
import EconomicCyclesImgsm from "../../assests/images/Economic Cycles-sm.png";
import RestructuringImgsm from "../../assests/images/restructuring-sm.png";

const WhatsCovered = ({ screenSize }) => {
  return (
    <div className="py-20 px-[60px] flex flex-col justify-center items-center gap-[52px] lg:gap-[30px] lg:px-0 lg:py-[40px]">
      <span className="text-dark-blue font-scandia text-[56px] font-medium tracking-[-1.68px] leading-[110%] lg:text-[30px] lg:tracking-[-0.9px]">{"What’s Covered?"}</span>

      <div className="gap-[40px] flex flex-wrap justify-center lg:gap-[10px] lg:text-center">
        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? BankRuptyImg: BankRuptyImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"Bankrupty"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />

        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? maImg: maImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"M&A"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />

        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? EconomicCyclesImg: EconomicCyclesImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"Economic Cycles"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />

        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? RestructuringImg: RestructuringImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"Restructuring"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />

        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? BankRuptyImg: BankRuptyImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"Bankrupty"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />

        <Card
          width={screenSize >= 1022? "415px": "350px"}
          image={screenSize > 1022? TerminationImg: TerminationImgsm}
          padding={"10px"}
          gapBetweenImageAndCard={"24px"}
          imageHeight={screenSize > 1022? '100px': '67px'}
          imageWidth={screenSize > 1022? '100px': '67px'}
          title={"Termination"}
          description={"When your employer files for bankruptcy and you suffer job loss."}
          flexDirection={"row"}
          textAlign={"left"}
          margin={"auto 0px"}
        />
      </div>
    </div>
  );
};

export default WhatsCovered;
