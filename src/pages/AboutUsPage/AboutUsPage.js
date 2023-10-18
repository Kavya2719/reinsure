import { Navbar, Footer, Vision } from "../../components"

const AboutUsPage = ({ screenSize }) => {
  return (
    <div>
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />

      <Vision />
      <Footer screenSize={screenSize} />
    </div>
  )
}

export default AboutUsPage