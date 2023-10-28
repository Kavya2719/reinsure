import BackArrow from "../../assets/images/BackArrow.png";
import { useNavigate, Link } from "react-router-dom";

const PlanNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full z-[1000] px-[50px] bg-[#F1F8FF] flex flex-row justify-between items-center top-0 fixed shadow-md xl:bg-white md:px-5">
      <button
        onClick={() => navigate(-1)}
        className="flex flex-row gap-[10px] cursor-pointer lg:gap-[5px] justify-center items-center"
      >
        <img src={BackArrow} alt="BackArrow" className="w-[44px] h-[44px] lg:w-[22px] lg:h-[22px]" />
        <span className="text-[#747474] text-[30px] font-medium tracking-[-1.2px] lg:text-base lg:tracking-[-0.64px]">
          Back
        </span>
      </button>

      <Link
        to="/"
        className="text-blue font-reemkufi text-[65px] tracking-[-3.9px] lg:text-[32px] lg:tracking-normal"
      >
        Reinsure
      </Link>

      <div className="w-[150px] h-1 lg:w-[80px]" />
    </div>
  );
};

export default PlanNavbar;
