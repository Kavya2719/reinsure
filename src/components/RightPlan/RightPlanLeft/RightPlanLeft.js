import RightPlanPng from "../../../assets/images/RightPlanPng.png";

const RightPlanLeft = ({ screenSize }) => {
  return (
    <div
      className="pt-[60px] pb-10 px-[50px] flex flex-col justify-center items-center gap-20 rounded-[25px] xl:p-0 xl:pt-2"
      style={{
        background:
          `${screenSize > 1279? "linear-gradient(232deg, rgba(205, 220, 255, 0.50) 30.63%, rgba(211, 225, 255, 0.00) 79.5%)": ""}`,
      }}
    >
      <div className="flex flex-col gap-6 items-start text-left xl:items-center xl:text-center lg:gap-3">
        <div className="flex flex-col gap-10 lg:gap-8">
          <span className="text-blue text-[44px] font-bold leading-[116%] w-[410px] lg:text-[32px] lg:w-[300px]">
            {"Let’s find the right plan for you"}
          </span>

          <span className="text-[30px] font-medium leading-[116%] lg:text-xl">
            Employment type
          </span>
        </div>

        <button className="px-6 py-[15px] rounded-lg opacity-60 bg-[#4F52FF] text-white text-2xl leading-[116%] font-medium">
          Full time
        </button>
      </div>

      <img
        src={RightPlanPng}
        alt="Right Plan"
        className="w-[330px] h-[330px] xl:hidden"
      />
    </div>
  );
};

export default RightPlanLeft;
