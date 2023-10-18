import { Navbar, Footer, Vision, BehindTheScenes, Achievements, MeetOurTeam } from "../../components"

const AboutUsPage = ({ screenSize }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />

      <div className="flex flex-col gap-[100px]">
        <Vision />
        <BehindTheScenes />
        <MeetOurTeam />
        <Achievements />
      </div>

      <Footer screenSize={screenSize} />
    </div>
  )
}

export default AboutUsPage