import React from 'react'
import WhyUsSvg from '../../assests/images/whyus.svg'
import Card from '../Card/Card'
import QuickImg from "../../assests/images/QuickImg.png"
import SupportImg from "../../assests/images/SupportImg.png"
import LowPriceImg from "../../assests/images/LowPriceImg.png"

const WhyUs = ({ screenSize }) => {
  return (
    <div className='gap-[40px] flex flex-col bg-blue py-[80px] lg:pt-[50px] lg:pb-[65px] w-full sm:gap-[35px]'>
        <img src={WhyUsSvg} alt="WhyUs" className='text-center h-[70px] lg:h-[33px]'/>

        <div className='flex-row flex flex-wrap gap-[40px] sm:gap-[30px] justify-center items-center'>
            <Card
                width={screenSize > 1022? "352px": "240px"}
                height={screenSize > 1022 ? "250px": "135px"}
                image={LowPriceImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "10px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                imageHeight={screenSize > 1022 ? "100px" : "67px"}
                imageWidth={screenSize > 1022 ? "100px" : "67px"}
                title={"Incredibly low pricing"}
                description={
                    "Starting at just ₹399/year"
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
                width={screenSize > 1022? "352px": "240px"}
                height={screenSize > 1022 ? "250px": "135px"}
                image={QuickImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "10px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                imageHeight={screenSize > 1022 ? "100px" : "67px"}
                imageWidth={screenSize > 1022 ? "100px" : "67px"}
                title={"Superquick and easy"}
                description={
                    "Enroll in 3 simple steps"
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
                width={screenSize > 1022? "352px": "240px"}
                height={screenSize > 1022 ? "250px": "135px"}
                image={SupportImg}
                gapBetweenImageAndCard={screenSize > 1022 ? "35px" : "10px"}
                gapBetweenTitleAndDescription={screenSize > 1022 ? "16px" : "6px"}
                imageHeight={screenSize > 1022 ? "100px" : "67px"}
                imageWidth={screenSize > 1022 ? "100px" : "67px"}
                title={"Hassle-free claims"}
                description={
                    "With 24x7 customer support/ assistance"
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

export default WhyUs