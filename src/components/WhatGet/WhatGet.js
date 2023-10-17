import WhatGetSvg from '../../assets/images/WhatGetSvg.svg'
import Card from '../Card/Card'
import SalaryImg from '../../assets/images/salary.png'
import RecruitmentAssistanceImg from '../../assets/images/recruitment-assistence.png'
import PlansImg from '../../assets/images/plans.png'

const WhatGet = ({ screenSize }) => {
  return (
    <div className='gap-[90px] flex flex-col bg-blue py-[80px] lg:py-[40px] w-full lg:gap-[40px] sm:gap-[40px]'>
        <div className='flex justify-center flex-col gap-4 lg:gap-2'>
            <img src={WhatGetSvg} alt="What will you get?" className='text-center h-[62px] lg:h-[33px]'/>
            <span className='text-white text-2xl font-normal lg:text-[12px] lg:leading-3'>Protect your monthly income and Be incharge of your career</span>
        </div>

        <div className='flex-row flex flex-wrap gap-[40px] sm:gap-[30px] justify-center items-center'>
            <Card
                width={screenSize > 1022? "352px": "250px"}
                height={screenSize > 1022 ? "220px": "135px"}
                image={SalaryImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "20px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                // imageHeight={screenSize > 1022 ? "80px" : "61px"}
                imageWidth={screenSize > 1022 ? "75px" : "56px"}
                title={"3 month Salary"}
                description={
                    "Protection on job loss"
                }
                color={"white"}
                descriptionStyle={{
                    fontSize: screenSize > 1022 ? "24px" : "16px",
                    fontWeight: "400px",
                    lineHeight: "100%"
                }}
                titleStyle={{
                    lineHeight: "100%"
                }}
            />

            <Card
                width={screenSize > 1022? "352px": "250px"}
                height={screenSize > 1022 ? "225px": "135px"}
                image={PlansImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "20px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                // imageHeight={screenSize > 1022 ? "80px" : "67px"}
                imageWidth={screenSize > 1022 ? "90px" : "60px"}
                title={"₹399/year plans"}
                description={
                    "Accessible for everyone"
                }
                color={"white"}
                descriptionStyle={{
                    fontSize: screenSize > 1022 ? "24px" : "16px",
                    fontWeight: "400px",
                    lineHeight: "100%"
                }}
                titleStyle={{
                    lineHeight: "100%"
                }}
            />

            <Card
                width={screenSize > 1022? "352px": "250px"}
                height={screenSize > 1022 ? "225px": "135px"}
                image={RecruitmentAssistanceImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "20px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                // imageHeight={screenSize > 1022 ? "80px" : "67px"}
                imageWidth={screenSize > 1022 ? "80px" : "56px"}
                title={"Recruitment Assistance"}
                description={
                    "through experts"
                }
                color={"white"}
                descriptionStyle={{
                    fontSize: screenSize > 1022 ? "24px" : "16px",
                    fontWeight: "400px",
                    lineHeight: "100%"
                }}
                titleStyle={{
                    lineHeight: "100%"
                }}
            />
        </div>
    </div>
  )
}

export default WhatGet