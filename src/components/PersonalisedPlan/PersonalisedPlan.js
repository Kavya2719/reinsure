import PlanCard from "./PlanCard/PlanCard"
import PlansData from '../../assets/data/PlansData.json'
import { useActionData } from "react-router-dom"
import { useState } from "react"

const PersonalisedPlan = () => {
  const [isFirstActive, setIsFirstActive] = useState(true);
  const handleClick = (index) => {
    if(index){
        if(isFirstActive) setIsFirstActive(false)
    }
    else if(! isFirstActive) setIsFirstActive(true)
  }
  
  return (
    <div className="flex items-center justify-center pb-5">
        <div className="w-[90%] max-w-[1296px] flex flex-col gap-20 justify-center items-center p-20 pt-[100px] rounded-[40px] bg-white shadow-[8px_7px_30px_0_rgba(0,0,0,0.20)] lg:p-10 lg:gap-10 md:p-3 md:w-auto md:shadow-none" >
            <div className="flex flex-col gap-7 lg:gap-4 sm:w-[350px]">
                <span className="text-medium-blue font-semibold text-[45px] leading-[116%] lg:text-[32px]">
                    Personalized Career Protection Plans
                </span>

                <span className="text-[#9B9B9B] font-medium leading-[116%] text-[33px] lg:text-2xl">
                    Ensuring Job Security and Peace of Mind
                </span>
            </div>

            <div className="flex flex-row gap-[56px] flex-wrap justify-center lg:gap-8">
                {
                    PlansData.map((data, index) => {
                        return (
                            <PlanCard 
                                key={index}
                                index={index}
                                isActive={index? !isFirstActive: isFirstActive}
                                handleClick={handleClick}
                                {...data}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PersonalisedPlan