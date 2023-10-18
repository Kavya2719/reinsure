import { Navbar, Footer, EnquiryForm } from '../../components'

const GetQuotePage = ({ screenSize }) => {
  return (
    <div>
        <Navbar />
        <div className='h-[92px] w-full lg:hidden' />

        <EnquiryForm screenSize={screenSize} />
        <Footer screenSize={screenSize} />
    </div>
  )
}

export default GetQuotePage