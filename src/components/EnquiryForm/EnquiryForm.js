import Man2Img from "../../assets/images/Man2Img.png";
import Girl1Img from "../../assets/images/Girl1Img.png";
import Girl2Img from "../../assets/images/Girl2Img.png";
import ClaimCard from "../ClaimCard/ClaimCard";
import GetQuote from "../GetQuote/GetQuote";
import FullNameImg from "../../assets/images/full-name.png";
import EmailImg from "../../assets/images/email.png";
import PhoneImg from "../../assets/images/phone.png";
import CurrentCompanyImg from "../../assets/images/currentCompany.png";

const EnquiryForm = ({ screenSize }) => {
  return (
    <div className="bg-light-white flex flex-row flex-wrap py-10 justify-between items-center w-[80%] mx-auto xl:w-full xl:justify-center lg:gap-[30px]">
      <div className="flex flex-col gap-[40px] justify-center items-center w-[634px] xl:w-[550px]">
        <span className="text-dark-blue font-scandia text-[32px] font-medium leading-[110%] tracking-[-0.96px]">
          Get Your Instant quote Now!
        </span>

        <div className="flex flex-col gap-[20px]">
          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 !w-[464px] md:!w-[355px] sm:!w-[300px]"
            placeholder="Full Name"
            style={{ backgroundImage: `url(${FullNameImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 !w-[464px] md:!w-[355px] sm:!w-[300px]"
            placeholder="Email"
            style={{ backgroundImage: `url(${EmailImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 !w-[464px] md:!w-[355px] sm:!w-[300px]"
            placeholder="Phone Number"
            style={{ backgroundImage: `url(${PhoneImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 !w-[464px] md:!w-[355px] sm:!w-[300px]"
            placeholder="Current Company"
            style={{ backgroundImage: `url(${CurrentCompanyImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <textarea
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] !w-[464px] md:!w-[355px] sm:!w-[300px]"
            style={{ height: "180px", resize: "none" }}
            placeholder="Message"

          />
        </div>

        <GetQuote buttonSize={screenSize > 1022 ? "large" : "small"} />
      </div>

      <div className="flex flex-row gap-[30px] lg:w-full">
        <div className="flex flex-col gap-[30px] items-center justify-center lg:w-full lg:flex-row lg:gap-0 lg:justify-evenly">
          <div className="flex flex-row lg:flex-col">
            <div className="flex items-center z-[1] mr-[-30px] lg:hidden">
              <ClaimCard role={"Product Designer"} amount={"2,00,000"} />
            </div>

            <img src={Man2Img} alt="Man2Img" />

            <div className="hidden items-center z-[1] mt-[-35px] justify-center lg:flex">
              <ClaimCard role={"Product Designer"} amount={"2,00,000"} />
            </div>
          </div>

          <div className="flex flex-row lg:flex-col">
            <div className="flex items-center z-[1] mr-[-30px] lg:hidden">
              <ClaimCard role={"Software Developer"} amount={"9,00,000"} />
            </div>

            <img src={Girl1Img} alt="Girl1Img" />

            <div className="hidden items-center z-[1] mt-[-35px] justify-center lg:flex">
              <ClaimCard role={"Software Developer"} amount={"9,00,000"} />
            </div>
          </div>

          <div className="flex flex-row lg:flex-col sm:hidden">
            <div className="flex items-center z-[1] mr-[-30px] lg:hidden">
              <ClaimCard role={"Data Analyst"} amount={"4,50,000"} />
            </div>

            <img src={Girl2Img} alt="Girl2Img" />

            <div className="hidden items-center z-[1] mt-[-35px] justify-center lg:flex">
              <ClaimCard role={"Data Analyst"} amount={"4,50,000"} />
            </div>
          </div>
        </div>

        <div className="bg-[#D9D9D9] w-[6px] h-[650px] lg:hidden"/>
      </div>
    </div>
  );
};

export default EnquiryForm;
