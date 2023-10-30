import TickImg from "../../../assets/images/greentick.png";
import CrossImg from "../../../assets/images/red-cross.png";
import ActiveInfoImg from "../../../assets/images/info-medium-blue.png";
import InactiveInfoImg from "../../../assets/images/info-light-gray.png";
import { useState, useRef } from "react";

const PlanFeature = ({ FeatureDescription, FeatureTitle, isIncluded, isActive }) => {
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef();

  const handleClick = () => {
    descriptionRef.current.style.maxHeight = showDescription? "0": `${descriptionRef.current.scrollHeight + 40}px`;
    // adding 40 to scrollHeight to account for padding added in the box

    setShowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-10 items-center lg:gap-[30px]">
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center w-[50px] h-[50px] lg:w-[32px] lg:h-[32px]">
            <img
                src={isIncluded ? TickImg : CrossImg}
                alt={isIncluded ? "tick" : "cross"}
                className={isIncluded ? "w-[50px] h-[50px] lg:w-[32px] lg:h-[32px]" : "w-[28px] h-[28px] lg:w-[16px] lg:h-[16px]"}
            />
          </div>

          <span className={`${isActive? "text-[#88A5CF]": "text-[#B3B3B3]"} text-[28px] font-medium leading-[116%] w-[340px] lg:text-[18px] lg:w-[220px]`}>
            {FeatureTitle}
          </span>
        </div>

        <button onClick={handleClick}>
          <img
            src={isActive && isIncluded ? ActiveInfoImg : InactiveInfoImg}
            alt="info-btn"
            className="w-[50px] h-[50px] lg:w-[32px] lg:h-[32px]"
          />
        </button>
      </div>

      <div
        ref={descriptionRef}
        className={`bg-light-blue rounded-[10px] transition-all duration-500 overflow-hidden max-h-0 ${
          showDescription && "px-10 py-5 lg:px-5 lg:py-3"
        }`}
      >
        <div className="w-[395px] italic text-base text-[#989898] lg:w-[265px] lg:text-[14px]">
          {FeatureDescription}
        </div>
      </div>
    </div>
  );
};

export default PlanFeature;
