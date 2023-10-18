import AchievementsImg from "../../assets/images/Achievements.png"

const Achievements = () => {
  return (
    <div className="flex flex-row gap-[70px] justify-center items-center pb-[100px] pt-[50px] flex-wrap">
      <img src={AchievementsImg} alt="AchievementsImg" className="w-[422px] h-[281px]" />

      <div className="flex flex-col gap-[30px] justify-center items-center">
          <h1 className="font-scandia text-dark-blue text-[56px] font-medium leading-[110%] tracking-[-1.68px]">
            Achievements
          </h1>

          <span className="text-light-gray text-2xl w-[700px]">
            Lorem ipsum dolor sit amet consectetur. Enim ut odio interdum sit quis consectetur. Pretium nulla lorem varius quis neque id neque egestas dui.
          </span>
      </div>
    </div>
  )
}

export default Achievements