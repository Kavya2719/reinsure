import ReinsureLogo from '../../assets/images/Reinsure.png'
import { Link } from 'react-router-dom'
import { GetQuote } from '..'

const Navbar = ({ handleScrollToFAQ }) => {
  return (
    <div className='top-0 fixed z-[10000] py-6 px-[120px] flex flex-row items-center bg-light-white justify-between w-full lg:hidden' style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
      <Link to="/">
        <img src={ReinsureLogo} alt='Reinsure' style={{ marginTop: "-8px"}}/>
      </Link>

      <div className='flex flex-row items-center gap-[13.33px]'>
        <div className='flex flex-row items-center gap-6 text-light-gray text-base leading-[120%]'>
          <Link to='/about-us' className='py-[9.33px] w-20'>
            About Us
          </Link>

          <button className='py-[9.33px] w-20' onClick={handleScrollToFAQ}>
            FAQs
          </button>

          <Link to='/' className='py-[9.33px] w-[92px]'>
            Contact Us
          </Link>

          <button className='py-[9.33px] w-auto px-[13.33px] text-blue border-[1.33px] border-blue bg-white'>
            Sign In
          </button>
        </div>

        <GetQuote LinkTo="/get-quote" buttonSize="small"/>
      </div>
    </div>
  )
}

export default Navbar;