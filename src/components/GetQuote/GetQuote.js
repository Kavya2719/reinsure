import { useState, useEffect } from "react";
import RightArrowImg from "../../assets/images/rightImg.png";

const GetQuote = ({ buttonSize, color, backgroundColor, image }) => {
  const largeButtonStyles = "py-[14px] pl-[20px] pr-[16px] w-[205px] border-[1.33px]  gap-[10px]"
  const smallButtonStyles = "py-[9.33px] pl-[13.33px] pr-[10.67px] w-[136px] border-[1.33px] gap-1"

  const [ArrowImg, setArrowImg] = useState(RightArrowImg)

  useEffect(() => {
    if(image) setArrowImg(image)
  }, [])

  return (
    <button
      className={`text-white bg-blue border-blue flex items-center ${buttonSize === "small"? smallButtonStyles: largeButtonStyles}`}
      style={{ color, backgroundColor }}
    >
      <span className={buttonSize === "small"? "text-[16px]": "text-2xl"}>Get Quote</span>
      <img src={ArrowImg} alt="->" className={buttonSize === "small"? "w-[22px]": ""}/>
    </button>
  );
};

export default GetQuote;
