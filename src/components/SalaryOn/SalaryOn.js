import GetQuote from "../GetQuote/GetQuote"
import SalaryStillOnImg from "../../assests/images/SalaryStillOn.png"
import TopBrandsData from "../../assests/data/TopBrandsData.json"
import Man1Img from "../../assests/images/Man1Img.png"
import Girl1Img from "../../assests/images/Girl1Img.png"
import Girl2Img from "../../assests/images/Girl2Img.png"
import ClaimCard from "../ClaimCard/ClaimCard"

const SalaryOn = ({ screenSize }) => {
  return (
    <div className="pt-[40px] pb-[80px] flex flex-col items-center gap-20">
        <div className="flex flex-row gap-40">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-4">
                        <div className="text-left">
                            <span className="font-scandia text-[56px] tracking-[-1.68px] leading-[110%]">
                                Job Gone?
                            </span>

                            <img src={SalaryStillOnImg} alt="Salary, still On." />
                        </div>

                        <div className="text-left text-2xl">
                            <p>Protect yourself and you family from layoffs with</p>
                            <p>Reinsure income protection plans.</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <input className="bg-white px-6 py-[10px] text-xl placeholder:text-xl placeholder:font-light placeholder:text-light-gray-2 flex items-center" placeholder="Enter your monthy salary"/>

                        <GetQuote buttonSize={screenSize > 1022? "large": "small"}/>
                    </div>
                </div>

                <div className="flex flex-row gap-[40px]">
                    <div className="flex flex-col gap-2 text-left">
                        <span className="text-gray text-[32px] font-unbounded font-medium">
                            50 k+
                        </span>

                        <div className="text-light-gray text-base leading-[150%]">
                            <p>Employees claimed insurance and</p>
                            <p>saved their financial freedom.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 text-left">
                        <span className="text-gray text-[32px] font-unbounded font-medium">
                            50 Cr+
                        </span>

                        <span className="text-light-gray text-base leading-[150%]">
                            Amount Claimed in total.
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-[500px] justify-start">
                    <img src={Man1Img} alt="Man1Img" />
                    <div className="flex items-center">
                        <ClaimCard role={"Product Designer"} amount={"2,00,000"} />
                    </div>
                </div>

                <div className="flex flex-row w-[500px] justify-end">
                    <div className="flex items-center">
                        <ClaimCard role={"Software Developer"} amount={"9,00,000"} />
                    </div>
                    <img src={Girl1Img} alt="Girl1Img" />
                </div>

                <div className="flex flex-row w-[500px] justify-start">
                    <img src={Girl2Img} alt="Girl2Img" />
                    <div className="flex items-center">
                        <ClaimCard role={"Data Analyst"} amount={"4,50,000"} />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center">
            <span className="absolute mt-[-8px] px-3 bg-light-white text-light-gray text-base leading-[120%]">
                Our clients work with top brands including
            </span>

            <div className="flex flex-row gap-16 border-light-gray border-t-[1.5px] py-4 items-center">
                {
                    TopBrandsData.map((brand, index) => {
                        return (
                            <div className="object-cover h-[50px] 2-[110px] flex items-center">
                                <img src={brand.logo} alt={brand.name} key={index} className="max-w-[110px] max-h-[50px]"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SalaryOn