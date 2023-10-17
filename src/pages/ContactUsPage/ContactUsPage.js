import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm'

const ContactUsPage = ({ screenSize }) => {
  return (
    <div>
      <Navbar />
      <div className='h-[92px] w-full lg:hidden' />

      <EnquiryForm screenSize={screenSize} />
      <Footer screenSize={screenSize} />
    </div>
  )
}

export default ContactUsPage