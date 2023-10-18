import TeamCard from "./TeamCard/TeamCard"
import TeamCardsData from '../../assets/data/TeamCardsData.json'

const MeetOurTeam = () => {
  return (
    <div className="flex flex-col gap-[30px] justify-center">
      <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="font-scandia text-dark-blue text-[56px] font-medium leading-[110%] tracking-[-1.68px]">
            Meet Our Team
          </h1>

          <span className="text-light-gray text-2xl w-[814px]">
            Lorem ipsum dolor sit amet consectetur. Enim ut odio interdum sit quis consectetur. Pretium nulla lorem varius quis neque id neque egestas dui.
          </span>
      </div>

      <div className="gap-10 flex flex-row justify-center flex-wrap">
        {
          TeamCardsData.map((teamCard, index) => {
            return (
              <TeamCard
                key={index}
                {...teamCard}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MeetOurTeam