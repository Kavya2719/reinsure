import React from "react";
import RightArrowImg from "../../assests/images/rightImg.png";

const GetQuote = ({ buttonSize, color, backgroundColor, image }) => {
  const largeButtonStyles = "py-[14px] pl-[20px] pr-[16px] w-[205px] border-[1.33px]  gap-[10px]"
  const smallButtonStyles = "py-[9.33px] pl-[13.33px] pr-[10.67px] w-[136px] border-[1.33px] gap-1"

  if(image) RightArrowImg = image;

  return (
    <button
      className={`text-white bg-blue border-blue flex items-center ${buttonSize === "small"? smallButtonStyles: largeButtonStyles}`}
      style={{ color, backgroundColor }}
    >
      <span className={buttonSize === "small"? "text-[16px]": "text-2xl"}>Get Quote</span>
      <img src={RightArrowImg} alt="->" className={buttonSize === "small"? "w-[22px]": ""}/>
    </button>
  );
};

export default GetQuote;
