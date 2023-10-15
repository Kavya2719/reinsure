import { useState, useEffect, useRef } from "react";
import LayoffsImg from "../../assests/images/layoffs.png";
import AmazonImg from "../../assests/images/amazon.png";
import MetaImg from "../../assests/images/meta.png";
import GetQuote from "../GetQuote/GetQuote";

const Layoffs = ({ screenSize }) => {
  const [companyLogo, setCompanyLogo] = useState(AmazonImg);
  const companyLogoRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      companyLogoRef.current.style.opacity = 0;
      setTimeout(() => {
        if (companyLogo === AmazonImg) {
          setCompanyLogo(MetaImg);
        } else {
          setCompanyLogo(AmazonImg);
        }
        companyLogoRef.current.style.opacity = 1;
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, [companyLogo]);

  return (
    <div className="flex flex-row py-20 justify-center gap-[150px] flex-wrap text-left xl:gap-[60px] lg:gap-[80px] lg:justify-center items-center lg:py-[40px] sm:gap-[40px] sm:text-center">
      <div className="flex flex-col gap-4 lg:gap-[14px]">
        <div>
          <img
            src={LayoffsImg}
            alt="Layoffs"
            className="h-[70px] lg:h-[35px] sm:mx-auto"
          />
          <span className="text-[48px] font-scandia-regular leading-[150%] lg:text-xl">
            in the year 2022
          </span>
        </div>

        <div className="flex flex-col gap-[40px] lg:gap-6">
          <div className="text-2xl lg:text-base sm:hidden">
            <p>Protect yourself and you family from layoffs with</p>
            <p>Reinsure income protection plans.</p>
          </div>

          <div className="sm:hidden">
            <GetQuote buttonSize={screenSize > 1022 ? "large" : "small"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center sm:gap-[25px]">
        <img
          src={companyLogo}
          alt="Company Logo"
          ref={companyLogoRef}
          className="w-[330px] lg:w-[200px]"
          style={{ transition: "opacity 1s ease-in" }}
        />

        <div className="flex flex-col sm:gap-3">
          <span className="font-unbounded text-[88px] leading-[1] capitalize lg:text-5xl">
            2000
          </span>
          <span className="text-blue text-[35px] font-normal leading-[136%] lg:text-2xl">
            Employees
          </span>
        </div>
      </div>

      <div className="flex-col gap-[30px] hidden sm:flex">
          <div className="text-base">
            <p>Protect yourself and you family from layoffs with</p>
            <p>Reinsure income protection plans.</p>
          </div>

          <div className="mx-auto">
            <GetQuote buttonSize="small" />
          </div>
      </div>
    </div>
  );
};

export default Layoffs;
