import GetQuote from "../GetQuote/GetQuote";
import SalaryStillOnImg from "../../assets/images/SalaryStillOn.png";
import Man1Img from "../../assets/images/Man1Img.png";
import Girl1Img from "../../assets/images/Girl1Img.png";
import Girl2Img from "../../assets/images/Girl2Img.png";
import ClaimCard from "../ClaimCard/ClaimCard";
import TopBrands from "../TopBrands/TopBrands";

const SalaryOn = ({ screenSize }) => {
  return (
    <div className="pt-[40px] pb-[80px] flex flex-col items-center gap-20 lg:pb-[40px] lg:gap-10">
      <div className="flex flex-row gap-36 flex-wrap xl:gap-0 lg:items-center lg:justify-center lg:gap-10">
        <div className="flex flex-col gap-20 lg:gap-10">
          <div className="flex flex-col gap-[60px] lg:gap-[25px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start lg:items-center lg:gap-1">
                <span className="font-scandia text-[56px] tracking-[-1.68px] leading-[110%] font-medium text-dark-blue lg:tracking-[-0.9px] lg:text-[30px]">
                  Job Gone?
                </span>

                <img
                  src={SalaryStillOnImg}
                  alt="Salary, still On."
                  className="lg:h-[44px]"
                />
              </div>

              <div className="text-left text-2xl lg:text-center lg:hidden">
                <p>Protect yourself and you family from layoffs with</p>
                <p>Reinsure income protection plans.</p>
              </div>
            </div>

            <div className="flex flex-row lg:items-center lg:justify-center">
              <input
                className="bg-white w-[295px] px-6 py-[10px] text-xl placeholder:text-xl placeholder:font-light placeholder:text-light-gray-2 flex items-center lg:text-base lg:placeholder:text-base lg:px-3 sm:w-[220px]"
                placeholder="Enter your monthy salary"
              />

              <GetQuote buttonSize={screenSize > 1022 ? "large" : "small"} />
            </div>
          </div>

          <div className="flex flex-row gap-10 lg:gap-[30px] md:hidden">
            <div className="flex flex-col gap-2 text-left lg:text-center">
              <span className="text-gray text-[32px] font-unbounded font-medium lg:text-2xl">
                50 k+
              </span>

              <div className="text-light-gray text-base leading-[150%] lg:text-[14px] lg:leading-[125%]">
                <p>Employees claimed insurance and</p>
                <p>saved their financial freedom.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left lg:text-center">
              <span className="text-gray text-[32px] font-unbounded font-medium lg:text-2xl">
                50 Cr+
              </span>

              <span className="text-light-gray text-base leading-[150%] lg:text-[14px] lg:leading-[125%]">
                Amount Claimed in total.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[510px] xl:w-[415px] xl:gap-16 lg:gap-0 lg:w-[374px]">
          <div className="flex flex-row justify-start mb-[-80px] ml-6 w-[510px] xl:mb-[0] xl:ml-4 xl:w-[415px] lg:mb-[-20px] lg:w-[374px]">
            <img src={Man1Img} alt="Man1Img" className="xl:w-[120px]" />

            <div className="flex items-center ml-[-40px] mt-5 z-[1] xl:ml-[-20px]">
              <ClaimCard role={"Product Designer"} amount={"2,00,000"} />
            </div>
          </div>

          <div className="flex flex-row justify-end w-[510px] xl:w-[415px] lg:w-[374px]">
            <div className="flex items-center mr-[-40px] mt-5 z-[1] xl:mr-[-20px]">
              <ClaimCard role={"Software Developer"} amount={"9,00,000"} />
            </div>

            <img src={Girl1Img} alt="Girl1Img" className="xl:w-[120px]" />
          </div>

          <div className="flex flex-row justify-start mt-[-80px] w-[510px] xl:mt-[0] xl:w-[415px] lg:mt-[-20px] lg:w-[374px]">
            <img src={Girl2Img} alt="Girl2Img" className="xl:w-[120px]" />

            <div className="flex items-center z-[1] mt-5 ml-[-40px] xl:ml-[-20px]">
              <ClaimCard role={"Data Analyst"} amount={"4,50,000"} />
            </div>
          </div>
        </div>

        <div className="hidden flex-row gap-[30px] md:flex flex-wrap justify-center">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-gray text-2xl font-unbounded font-medium">
              50 k+
            </span>

            <div className="text-light-gray text-[14px] leading-[125%]">
              <p>Employees claimed insurance and</p>
              <p>saved their financial freedom.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <span className="text-gray text-2xl font-unbounded font-medium">
              50 Cr+
            </span>

            <span className="text-light-gray text-[14px] leading-[125%]">
              Amount Claimed in total.
            </span>
          </div>
        </div>
      </div>

      <TopBrands />
    </div>
  );
};

export default SalaryOn;
