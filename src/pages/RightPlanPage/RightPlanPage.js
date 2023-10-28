import { PlanNavbar, RightPlan } from "../../components"

const RightPlanPage = ({ screenSize }) => {
  return (
    <div className="bg-[#F1F8FF] pt-[130px] pb-20 xl:bg-white lg:pt-[70px] lg:pb-0">
      <PlanNavbar />
      <RightPlan screenSize={screenSize} />
    </div>
  )
}

export default RightPlanPage