import BehindTheScenesRow1Img  from "../../assets/images/BehindTheScenesRow1Img.png"
import BehindTheScenesRow2Img  from "../../assets/images/BehindTheScenesRow2Img.png"
import BehindTheScenesRow3Img  from "../../assets/images/BehindTheScenesRow3Img.png"
import ReinusreLogo from "../../assets/images/Reinsure.png"

const BehindTheScenes = () => {
  return (
    <div className="flex flex-row gap-[60px] justify-center flex-wrap">
      <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="font-scandia text-dark-blue text-[56px] font-medium leading-[110%] tracking-[-1.68px]">
            Behind-the-Scenes
          </h1>

          <span className="text-light-gray text-2xl w-[407px]">
            Lorem ipsum dolor sit amet consectetur. Enim ut odio interdum sit quis consectetur. Pretium nulla lorem varius quis neque id neque egestas dui.
          </span>
      </div>

      <div className="flex flex-col">
        <img src={BehindTheScenesRow1Img} alt="BehindTheScenesRow1Img" />

        <div className="flex flex-row">
          <img src={BehindTheScenesRow2Img} alt="BehindTheScenesRow2Img" />
          
          <div className="flex flex-col w-[365px] h-[126px] flex-shrink-0 gap-3 justify-center items-center">
            <img src={ReinusreLogo} alt="ReinsureLogo" className="w-[152px]"/>

            <span className="text-light-gray text-2xl">
              Here goes the tag line
            </span>
          </div>
        </div>

        <img src={BehindTheScenesRow3Img} alt="BehindTheScenesRow3Img" />
      </div>
    </div>
  )
}

export default BehindTheScenes