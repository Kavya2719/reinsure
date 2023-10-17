import Man2Img from "../../assets/images/Man2Img.png";
import Girl1Img from "../../assets/images/Girl1Img.png";
import Girl2Img from "../../assets/images/Girl2Img.png";
import ClaimCard from "../ClaimCard/ClaimCard";
import GetQuote from "../GetQuote/GetQuote";

const EnquiryForm = ({ screenSize }) => {
  return (
    <div className="flex flex-row flex-wrap py-10 justify-between items-center w-[80%] mx-auto xl:w-full xl:justify-center">
      <div className="flex flex-col gap-[40px] justify-center items-center w-[634px] ">
        <span className="text-dark-blue font-scandia text-[32px] font-medium leading-[110%] tracking-[-0.96px]">
          Get Your Instant quote Now!
        </span>

        <div className="flex flex-col gap-[20px]">
          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%]"
            style={{ width: "464px" }}
            placeholder="Full Name"
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%]"
            style={{ width: "464px" }}
            placeholder="Email"
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%]"
            style={{ width: "464px" }}
            placeholder="Phone Number"
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%]"
            style={{ width: "464px" }}
            placeholder="Current Company"
          />

          <textarea
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%]"
            style={{ width: "464px", height: "180px", resize: "none" }}
            placeholder="Message"
          />
        </div>

        <GetQuote buttonSize={screenSize > 1022 ? "large" : "small"} />
      </div>

      <div className="flex flex-row gap-[30px]">
        <div className="flex flex-col gap-[30px] items-center justify-center">
          <div className="flex flex-row">
            <div className="flex items-center z-[1] mr-[-30px]">
              <ClaimCard role={"Product Designer"} amount={"2,00,000"} />
            </div>

            <img src={Man2Img} alt="Man2Img" />
          </div>

          <div className="flex flex-row">
            <div className="flex items-center z-[1] mr-[-30px]">
              <ClaimCard role={"Software Developer"} amount={"9,00,000"} />
            </div>

            <img src={Girl1Img} alt="Girl1Img" />
          </div>

          <div className="flex flex-row">
            <div className="flex items-center z-[1] mr-[-30px]">
              <ClaimCard role={"Data Analyst"} amount={"4,50,000"} />
            </div>

            <img src={Girl2Img} alt="Girl2Img" />
          </div>
        </div>

        <div className="bg-[#D9D9D9] w-[6px] h-[650px]"/>
      </div>
    </div>
  );
};

export default EnquiryForm;
