import FullNameImg from "../../assets/images/full-name.png";
import EmailImg from "../../assets/images/email.png";
import PhoneImg from "../../assets/images/phone.png";
import CurrentCompanyImg from "../../assets/images/currentCompany.png";
import { ClaimCard, GetQuote } from "..";
import { Scrollbar } from "react-scrollbars-custom";
import QuoteCardsData from "../../assets/data/QuoteCardsData.json";

const EnquiryForm = ({ screenSize }) => {
  return (
    <div className="bg-light-white flex flex-row flex-wrap py-10 justify-between items-center w-[80%] mx-auto xl:w-full xl:justify-center lg:gap-[30px] lg:flex-col">
      <div className="flex flex-col gap-[40px] justify-center items-center w-[634px] xl:w-[550px] lg:w-auto">
        <span className="text-dark-blue font-scandia text-[32px] font-medium leading-[110%] tracking-[-0.96px]">
          Get Your Instant quote Now!
        </span>

        <div className="flex flex-col gap-[20px]">
          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 shadow-md shadow-light-gray-2 !w-[464px] md:!max-w-[355px] md:!min-w-[280px] md:shadow-none"
            placeholder="Full Name"
            style={{ backgroundImage: `url(${FullNameImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 shadow-md shadow-light-gray-2 !w-[464px] md:!max-w-[355px] md:!min-w-[280px] md:shadow-none"
            placeholder="Email"
            style={{ backgroundImage: `url(${EmailImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 shadow-md shadow-light-gray-2 !w-[464px] md:!max-w-[355px] md:!min-w-[280px] md:shadow-none"
            placeholder="Phone Number"
            style={{ backgroundImage: `url(${PhoneImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <input
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] indent-8 shadow-md shadow-light-gray-2 !w-[464px] md:!max-w-[355px] md:!min-w-[280px] md:shadow-none"
            placeholder="Current Company"
            style={{ backgroundImage: `url(${CurrentCompanyImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left 20px center" }}
          />

          <textarea
            type="text"
            className="p-4 placeholder:text-light-gray-2 leading-[120%] shadow-md shadow-light-gray-2 !w-[464px] md:!max-w-[355px] md:!min-w-[280px] md:shadow-none"
            style={{ height: "180px", resize: "none" }}
            placeholder="Message"

          />
        </div>

        <GetQuote buttonSize={screenSize > 1022 ? "large" : "small"} />
      </div>

      <Scrollbar style={{ height: `${screenSize > 1022? 700: 280}px`, width: `${screenSize > 1022? "380px": "95%"}`}}>
        <div className="flex flex-col gap-[30px] items-center justify-center lg:w-full lg:flex-row lg:gap-[20px] lg:items-start lg:justify-start">
          {
            QuoteCardsData.map((cardData, index) => {
              return (
                <div className="flex flex-row lg:flex-col">
                  <div className="flex items-center z-[1] mr-[-30px] lg:hidden">
                    <ClaimCard responsive={false} role={cardData.role} amount={cardData.amount} />
                  </div>

                  <img src={cardData.image} alt={cardData.name} className='min-w-[185px] min-h-[195px] max-h-[195px]' />

                  <div className="hidden items-center z-[1] mt-[-30px] justify-center lg:flex">
                    <ClaimCard responsive={false} role={cardData.role} amount={cardData.amount} />
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </Scrollbar>
    </div>
  );
};

export default EnquiryForm;
