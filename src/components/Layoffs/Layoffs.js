import { useState, useEffect, useRef } from "react";
import LayoffsImg from "../../assets/images/layoffs.png";
import AmazonLogo from "../../assets/images/AmazonLogo.png";
import MetaLogo from "../../assets/images/MetaLogo.png";
import GetQuote from "../GetQuote/GetQuote";

const Layoffs = ({ screenSize }) => {
  const [companyLogo, setCompanyLogo] = useState(AmazonLogo);
  const [currentNumber, setCurrentNumber] = useState(2000);
  const [digits, setDigits] = useState(currentNumber.toString().split('').map(Number));
  const companyLogoRef = useRef();

  const animateNumber = (targetNumber) => {
    const duration = 1500; // Duration of the animation in milliseconds
    const steps = 50; // Number of steps for the animation
    
    const curNumber = targetNumber === 2000? 4177: 2000;
    const change = (targetNumber - curNumber) / steps;
    const multiplier = (change < 0? -1: 1);

    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const newNumber = multiplier * Math.min(
          multiplier * targetNumber,
          multiplier * Math.round(prevNumber + change)
        );

        if (newNumber === targetNumber) clearInterval(intervalId);

        return newNumber;
      });
    }, duration / steps);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      companyLogoRef.current.style.opacity = 0;

      setTimeout(() => {
        if (companyLogo === AmazonLogo) {
          setCompanyLogo(MetaLogo);
          animateNumber(4177);
        } else {
          setCompanyLogo(AmazonLogo);
          animateNumber(2000);
        }
        
        companyLogoRef.current.style.opacity = 1;
      }, 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [companyLogo]);

  useEffect(() => {
    animateNumber(2000)
  }, [])

  useEffect(() => {
    setDigits(currentNumber.toString().split('').map(Number));
  }, [currentNumber])

  return (
    <div className="flex flex-row py-20 justify-center gap-[150px] flex-wrap text-left items-center xl:gap-[60px] lg:gap-[80px] lg:justify-center lg:py-[40px] md:gap-[35px] sm:gap-[40px] sm:text-center">
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

        <div className="flex flex-col items-center sm:gap-3">
          <div className="font-unbounded text-[88px] leading-[1] capitalize lg:text-5xl flex flex-row">
            {
              digits.map((digit, index) => {
                return (
                  <div className="flex justify-center items-center w-[75px] lg:w-11" key={index}>
                    {digit}
                  </div>
                )
              })
            }
          </div>

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
