import PlanFeature from "../PlanFeature/PlanFeature";

const BasicPlanCard = ({ index, title, price, salary, featuresData, isActive, handleClick }) => {
  return (
    <div className={`flex flex-col gap-14 p-[30px] items-start rounded-[25px] text-left transition-all duration-250 ease-in ${isActive && "shadow-[7px_11px_34px_0_#CADBFF]"} lg:gap-10 lg:pt-5 lg:pb-8 lg:px-4`}>
      <div className="flex flex-col items-start gap-10 pl-5 lg:gap-5 lg:pl-3">
        <button
          onClick={() => handleClick(index)}
          className={`leading-[116%] text-[30px] font-semibold py-4 px-10 rounded-[50px] transition-all duration-250 ease-in ${
            isActive
              ? "text-white bg-blue"
              : "text-[rgba(10,60,245,0.50)] border-[3px] border-[rgba(10,60,245,0.50)] border-solid"
            }
          lg:px-[30px] lg:py-[10px] lg:text-xl`}
        >
          {title}
        </button>

        <div className="flex flex-col gap-5 lg:gap-3">
          <span className="text-light-gray-4 leading-[116%] text-2xl font-medium lg:text-base">
            First 3 months get a salary of
          </span>

          <div className="flex flex-row gap-4 justify-center items-center">
            <span className={`leading-[116%] text-[45px] font-medium transition-all duration-250 ease-in ${isActive? "text-blue": "text-[#9F9F9F]"} lg:text-[30px]`}>
              ₹ {salary}
            </span>

            <span className="text-light-gray-4 leading-[116%] text-[30px] font-semibold lg:text-xl">
              / monthly
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-7 lg:gap-4">
        {featuresData.map((data, index) => {
          return <PlanFeature key={index} {...data} isActive={isActive}/>;
        })}
      </div>

      <button className={`leading-[116%] text-[30px] font-semibold py-5 px-[75px] rounded-[50px] self-center transition-all duration-250 ease-in ${
            isActive
              ? "text-white bg-blue"
              : "text-[rgba(10,60,245,0.50)] border-[3px] border-[rgba(10,60,245,0.50)] border-solid"
            }
          lg:py-3 lg:px-[50px] lg:text-xl`}>
        ₹ {price} / month
      </button>
    </div>
  );
};

export default BasicPlanCard;
