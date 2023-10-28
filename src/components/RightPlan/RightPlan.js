import RightPlanLeft from "./RightPlanLeft/RightPlanLeft"
import RightPlanRight from "./RightPlanRight/RightPlanRight"

const RightPlan = ({ screenSize }) => {
  return (
    <div className="flex items-center justify-center">
        <div className="flex flex-row justify-center items-center p-[30px] rounded-[40px] bg-white shadow-[8px_7px_30px_0_rgba(0,0,0,0.20)] xl:flex-col md:shadow-none" >
            <RightPlanLeft screenSize={screenSize} />
            <RightPlanRight />
        </div>
    </div>
  )
}

export default RightPlan