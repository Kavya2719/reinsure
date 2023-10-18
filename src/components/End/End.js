import { GetQuote } from "..";

const End = ({ screenSize }) => {
  return (
    <div className="py-20 flex flex-col gap-11 lg:gap-[30px] items-center justify-center lg:pt-[40px] lg:pb-[30px]">
      <div className="flex flex-col lg:gap-[15px]">
        <h1 className="text-dark-blue font-scandia text-[56px] font-bold lg:text-2xl">
          You've reached to the end!
        </h1>

        <div className="flex flex-row text-light-gray items-center text-xl leading-[130%] font-normal lg:leading-[120%] lg:text-base sm:flex-col">
          <span>Reliable income protection ensuring&nbsp;</span> 
          <span>income security against job loss</span>
        </div>
      </div>

      <GetQuote buttonSize={screenSize > 1022? "large": "small"}/>
    </div>
  );
};

export default End;
